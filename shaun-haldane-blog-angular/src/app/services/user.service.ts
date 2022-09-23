import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://shaun-haldane-blog.us-east-1.elasticbeanstalk.com//api/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createCommentPost(postId: number, comment: any): Observable<any> {
    return this.http.post(API_URL + '/post/add-comment/' + postId, comment);
  }

  createCommentProject(projectId: number, comment: any): Observable<any> {
    return this.http.post(API_URL + '/post/add-comment/' + projectId, comment);
  }

}

