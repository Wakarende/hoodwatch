import { Business } from './../../interfaces/business';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const url = 'https://neighborhood-joy.herokuapp.com/api/business/'
const updateUrl = 'https://neighborhood-joy.herokuapp.com/api/business/update'
const deleteUrl = 'https://neighborhood-joy.herokuapp.com/api/business/delete'
const getUrl = 'https://neighborhood-joy.herokuapp.com/api/business/get'


@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  

  constructor(private http: HttpClient) { }

  getAll(): Observable<Business[]> {
    return this.http.get<Business[]>(url);

  }
  get(id: any): Observable<Business> {
    return this.http.get(`${getUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(url, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${updateUrl}/${id}/`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${deleteUrl}/${id}/`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(url);
  }

  findByBusinessName(business_name: any): Observable<any> {
    return this.http.get(`${url}?business_name=${business_name}`);
  }
  
}



