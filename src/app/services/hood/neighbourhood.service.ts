import { Neighbourhood } from './../../interfaces/neighbourhood';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NeighbourhoodService {

  url ='http://127.0.0.1:8000/api/neighbourhood/'
  Updateurl ='http://127.0.0.1:8000/api/neighbourhood/update/'
  deleteUrl = 'http://127.0.0.1:8000/api/neighbourhood/delete/'
  

  constructor(private http:HttpClient) { }

  fetchNeighbourhoodApi(): Observable<Neighbourhood[]> {
    return this.http.get<Neighbourhood[]>(this.url);

  }

  create(neighbourhood: any) {
    return this.http.post(this.url, neighbourhood);
  }

  update(id:any, neighbourhood:Neighbourhood){
    return this.http.put(`${this.Updateurl}${id}/`,neighbourhood)
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.deleteUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.deleteUrl);
  }

  findByName(neighbourhood_name: any): Observable<any> {
    return this.http.get(`${this.url}?neighbourhood_name=${neighbourhood_name}`);
  }
}






