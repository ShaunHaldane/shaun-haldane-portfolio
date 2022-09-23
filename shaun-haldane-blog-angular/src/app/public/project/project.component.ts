import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicService } from 'src/app/services/public.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  d = new Date()
  date = this.d.getDate() + '/' + this.d.getMonth() + '/' + this.d.getFullYear() 
  submitted = false

  comment = {
    content: '',
    datePosted: this.date,

  }

  project: any
  projectId = Number(this.route.snapshot.paramMap.get('id'))
  showAddComment = false
  isLoggedIn = false
  private roles: string[]

  constructor(
    private tokenStorageService: TokenStorageService,
    private publicService: PublicService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.publicService.getProject(this.projectId).subscribe(
      data => {
        this.project = data;
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
    this.userService.createCommentProject(this.projectId, this.comment).subscribe(
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
