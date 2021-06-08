import { Neighbourhood } from './../../interfaces/neighbourhood';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NeighbourhoodService {

  url ='https://neighborhood-joy.herokuapp.com/api/neighbourhood/'
  Updateurl ='https://neighborhood-joy.herokuapp.com/api/neighbourhood/update/'
  deleteUrl = 'https://neighborhood-joy.herokuapp.com/api/neighbourhood/delete/'
  singleUrl = 'https://neighborhood-joy.herokuapp.com/api/neighbourhood/get/'


  

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

  // findByName(neighbourhood_name: any): Observable<any> {
  //   return this.http.get(`${this.url}?neighbourhood_name=${neighbourhood_name}`);
  // }

  getAll(): Observable<Neighbourhood[]> {
    return this.http.get<Neighbourhood[]>(this.url);
  }

  get(id: any): Observable<Neighbourhood> {
    return this.http.get<Neighbourhood>(`${this.singleUrl}/${id}`);
  }
}






