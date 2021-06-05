import { Users } from './../../interfaces/users';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://127.0.0.1:8000/api/neighbourhood/'
  constructor(private http: HttpClient) { }

  fetchUsersApi(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);

  }
}


