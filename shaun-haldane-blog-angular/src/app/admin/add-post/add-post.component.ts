import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  // date = new Date();
  // lastUpdated =  this.date.getFullYear() + '-' + ('0' + (this.date.getMonth()+1)).slice(-2)  + '-' + ('0' + this.date.getDate()).slice(-2)

  submitted = false
  post = {
    title: '',
    content: ''
    // lastUpdated: this.lastUpdated
  }

  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  savePost() {
    this.adminService.createPost(this.post).subscribe(
      response => {
        console.log(response)
      },
      err => {
        console.log(err)
      }
    )
    this.router.navigate(['posts']).then(() => {
      window.location.reload();
    });
  }

}
