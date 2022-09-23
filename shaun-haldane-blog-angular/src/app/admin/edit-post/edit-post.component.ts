import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  d = new Date()
  date = this.d.getDate() + '/' + this.d.getMonth() + '/' + this.d.getFullYear() 

  postId = Number(this.route.snapshot.paramMap.get('id'))

  submitted = false
  post = {
    title: '',
    content: '',
    lastUpdated: this.date
  }

  constructor(
    private adminService: AdminService,
    private publicService: PublicService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.publicService.getPost(this.postId).subscribe(
      data => {
        this.post = data;
      },
      err => {
        console.log(err)
      }
    );

  }

  editPost() {
    this.adminService.updatePost(this.postId, this.post).subscribe(
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
