import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NgSelectModule } from '@ng-select/ng-select';

import { LangModule } from './lang/lang.module';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { StatisticsComponent } from './statistics/statistics.component';

import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { LangService } from './services/lang.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ProfileComponent,
    BlogPostComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatTabsModule,
    NgSelectModule,
    LangModule
  ],
  providers: [ LangService, UserService, PostService, DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


