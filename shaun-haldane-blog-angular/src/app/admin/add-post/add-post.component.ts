import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  d = new Date()
  date = this.d.getDate() + '/' + this.d.getMonth() + '/' + this.d.getFullYear() 

  submitted = false
  post = {
    title: '',
    content: '',
    lastUpdated: this.date
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
