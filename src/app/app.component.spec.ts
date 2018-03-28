import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { LangModule } from './lang/lang.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { StatisticsComponent } from './statistics/statistics.component';

import { LangService } from './services/lang.service';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { DataService } from './services/data.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatIconModule,
        MatSelectModule,
        MatCheckboxModule,
        MatTabsModule,
        NgSelectModule,
        LangModule
      ],
      declarations: [
        AppComponent,
        ContactFormComponent,
        ProfileComponent,
        BlogPostComponent,
        StatisticsComponent
      ],
      providers: [
        LangService,
        UserService,
        PostService,
        DataService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render container', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.container')).toBeTruthy();
  }));
});
