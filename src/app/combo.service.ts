// combo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Combo } from './combo.model';

@Injectable({
  providedIn: 'root'
})
export class ComboService {


  private baseUrl = 'https://thisis-6el4.onrender.com/combos';

  constructor(private http: HttpClient) { }


  getCombos(): Observable<Combo[]> {
    return this.http.get<Combo[]>(this.baseUrl);
  }

  suggestCombos(productIds: string[]): Observable<Combo[]> {
    return this.http.get<Combo[]>(`${this.baseUrl}/suggest?products=${productIds.join(',')}`);
  }

}
