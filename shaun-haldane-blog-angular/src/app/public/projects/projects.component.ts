import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { PublicService } from 'src/app/services/public.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[]

  private roles: string[];
  isLoggedIn = false;
  showAdmin = false;

  constructor(
    private publicService: PublicService,
    private tokenStorageService: TokenStorageService,
    private adminService: AdminService) { }

  ngOnInit(): void {

    this.publicService.getProjects().subscribe(
      data => {
        this.projects = data;
      },
      err => {
        console.log(err)
      }
    );

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdmin = this.roles.includes('ROLE_ADMIN');
    }
  }

  deleteProject(id: number): void {
    this.adminService.deleteProject(id).subscribe(
      response => {
        location.reload(); 
      },
      err => {
        console.log(err)
      }
    )
  }
}