import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { EditProjectComponent } from './admin/edit-project/edit-project.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { PostComponent } from './public/post/post.component';
import { PostsComponent } from './public/posts/posts.component';
import { PrivacyPolicyComponent } from './public/privacy-policy/privacy-policy.component';
import { ProjectComponent } from './public/project/project.component';
import { ProjectsComponent } from './public/projects/projects.component';
import { RegisterComponent } from './public/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'edit-post/:id', component: EditPostComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'edit-project/:id', component: EditProjectComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
