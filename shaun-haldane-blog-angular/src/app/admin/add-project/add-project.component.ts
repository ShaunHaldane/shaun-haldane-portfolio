import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  // date = new Date();
  // lastUpdated =  this.date.getFullYear() + '-' + ('0' + (this.date.getMonth()+1)).slice(-2)  + '-' + ('0' + this.date.getDate()).slice(-2)

  submitted = false
  project = {
    title: '',
    imageUrl: '',
    content: '',
    link: ''
    // lastUpdated: this.lastUpdated
  }

  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveProject() {
    this.adminService.createProject(this.project).subscribe(
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
