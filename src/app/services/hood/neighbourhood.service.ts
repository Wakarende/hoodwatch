import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Neighbourhood } from '../../interfaces/neighbourhood'

@Injectable({
  providedIn: 'root'
})
export class NeighbourhoodService {

  url ='http://127.0.0.1:8000/api/neighbourhood/'
  constructor(private http:HttpClient) { }

  fetchNeighbourhoodApi(): Observable<Neighbourhood[]> {
    return this.http.get<Neighbourhood[]>(this.url);

  }
}

