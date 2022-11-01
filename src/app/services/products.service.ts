import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.dataUrl);
  }
}
