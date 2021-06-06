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

  // deleteAll():Observable<any>{
  //   return this.http.delete(this.url)
  // }
}

