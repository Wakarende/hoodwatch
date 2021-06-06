import { Neighbourhood } from './../../interfaces/neighbourhood';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NeighbourhoodService {

  url ='http://127.0.0.1:8000/api/neighbourhood/'
  Updateurl ='http://127.0.0.1:8000/api/neighbourhood/update/'
  Deleteurl = 'http://127.0.0.1:8000/api/neighbourhood/delete/'
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

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

  delete(id:any) {
    return this.http.delete(`${this.Deleteurl}/${id}`);
  }

  
  
  // deleteAll():Observable<any>{
  //   return this.http.delete(this.url)
  // }
}

