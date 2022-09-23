import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  d = new Date()
  date = this.d.getDate() + '/' + this.d.getMonth() + '/' + this.d.getFullYear() 

  projectId = Number(this.route.snapshot.paramMap.get('id'))

  submitted = false
  project = {
    title: '',
    imageUrl: '',
    description: '',
    content: '',
    link: '',
    lastUpdated: this.date
  }

  constructor(
    private adminService: AdminService,
    private publicService: PublicService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.publicService.getProject(this.projectId).subscribe(
      data => {
        this.project = data;
      },
      err => {
        console.log(err)
      }
    );

  }

  editPost() {
    this.adminService.updatePost(this.projectId, this.project).subscribe(
      response => {
        console.log(response)
      },
      err => {
        console.log(err)
      }
    )
    this.router.navigate(['projects']).then(() => {
      window.location.reload();
    });
  }

}
