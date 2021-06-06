import { Posts } from './../../interfaces/posts';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = 'http://127.0.0.1:8000/api/post/'
  constructor(private http:HttpClient) { }

  getAll():Observable<Posts[]>{
    return this.http.get<Posts[]>(this.url);
  }

  get(id: any): Observable<Posts> {
    return this.http.get<Posts>(`${this.url}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.url);
  }

  findByPost_Name(post_name: any): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.url}?post_name=${post_name}`);
  }
}
