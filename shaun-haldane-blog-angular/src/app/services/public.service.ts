import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/public/'

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(API_URL + 'posts')
  }

  getPost(id: number): Observable<any> {
    return this.http.get(API_URL + 'posts/' + id)
  }

  getProjects(): Observable<any> {
    return this.http.get(API_URL + 'projects')
  }

  getProject(id: number): Observable<any> {
    return this.http.get(API_URL + 'projects/' + id)
  }

}
