import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { LangModule } from './lang/lang.module';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

import { LangService } from './services/lang.service';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ProfileComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule,
    LangModule
  ],
  providers: [LangService, UserService, PostService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


