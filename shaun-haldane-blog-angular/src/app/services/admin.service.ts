import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://shaun-haldane-blog.us-east-1.elasticbeanstalk.com//api/admin/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  createPost(post: any): Observable<any> {
    return this.http.post(API_URL + "add-post", post)
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(API_URL + "posts/" + id)
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put(API_URL + "posts/" + id, post);
  }

  createProject(project: any): Observable<any> {
    return this.http.post(API_URL + "add-project", project)
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(API_URL + "projects/" + id)
  }

  updateProject(id: number, project: any): Observable<any> {
    return this.http.put(API_URL + "projects/" + id, project);
  }

}
