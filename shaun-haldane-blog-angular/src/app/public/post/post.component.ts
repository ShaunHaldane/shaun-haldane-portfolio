import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicService } from 'src/app/services/public.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  date = new Date();
  lastUpdated =  this.date.getFullYear() + '-' + ('0' + (this.date.getMonth()+1)).slice(-2)  + '-' + ('0' + this.date.getDate()).slice(-2)
  submitted = false

  comment = {
    content: '',
    datePosted: this.lastUpdated,
  }

  post: any
  postId = Number(this.route.snapshot.paramMap.get('id'))
  showAddComment = false
  isLoggedIn = false
  private roles: string[]

  constructor(
    private tokenStorageService: TokenStorageService,
    private publicService: PublicService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.publicService.getPost(this.postId).subscribe(
      data => {
        this.post = data;
      },
      err => {
        console.log(err)
      }
    );

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAddComment = this.roles.includes('ROLE_USER');
    }

  }

  saveComment() {
    this.submitted = true
    this.userService.createCommentPost(this.postId, this.comment).subscribe(
      response => {
        console.log(response)
      },
      err => {
        console.log(err)
      }
    )
    location.reload()
  }

}
