import { Posts } from './../../interfaces/posts';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = 'https://neighborhood-joy.herokuapp.com/api/post/'
  updateUrl = 'https://neighborhood-joy.herokuapp.com/api/post/update/'
  deleteUrl = 'https://neighborhood-joy.herokuapp.com/api/post/delete/'
  getUrl = 'https://neighborhood-joy.herokuapp.com/api/post/get/'

  constructor(private http:HttpClient) { }

  getAll():Observable<Posts[]>{
    return this.http.get<Posts[]>(this.url);
  }

  get(id: any): Observable<Posts> {
    return this.http.get<Posts>(`${this.getUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.updateUrl}/${id}/`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.deleteUrl}/${id}/`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.url);
  }

  findByPost_Name(post_name: any): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.url}?post_name=${post_name}`);
  }
}

