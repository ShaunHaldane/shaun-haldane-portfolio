import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { HomeComponent } from './public/home/home.component';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { PostComponent } from './public/post/post.component';
import { PostsComponent } from './public/posts/posts.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { PrivacyPolicyComponent } from './public/privacy-policy/privacy-policy.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ProjectsComponent } from './public/projects/projects.component';
import { ProjectComponent } from './public/project/project.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { EditProjectComponent } from './admin/edit-project/edit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddPostComponent,
    EditPostComponent,
    PostComponent,
    PostsComponent,
    PrivacyPolicyComponent,
    ProjectsComponent,
    ProjectComponent,
    AddProjectComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
