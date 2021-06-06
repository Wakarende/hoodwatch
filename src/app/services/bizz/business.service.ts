import { Business } from './../../interfaces/business';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  url = 'http://127.0.0.1:8000/api/business/'
  updateUrl = 'http://127.0.0.1:8000/api/business/update'
  deleteUrl = 'http://127.0.0.1:8000/api/business/delete'

  constructor(private http: HttpClient) { }

  fetchBusinessApi(): Observable<Business[]> {
    return this.http.get<Business[]>(this.url);

  }
  get(id: any): Observable<Business> {
    return this.http.get(`${this.url}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.updateUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.deleteUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.url);
  }

  findByBusinessName(business_name: any): Observable<any> {
    return this.http.get(`${this.url}?business_name=${business_name}`);
  }
  
}


