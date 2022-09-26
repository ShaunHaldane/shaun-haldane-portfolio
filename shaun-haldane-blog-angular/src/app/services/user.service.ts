import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createCommentPost(postId: number, comment: any): Observable<any> {
    return this.http.post(API_URL + 'add-comment-post/' + postId, comment);
  }

  createCommentProject(projectId: number, comment: any): Observable<any> {
    return this.http.post(API_URL + 'add-comment-project/' + projectId, comment);
  }

}

