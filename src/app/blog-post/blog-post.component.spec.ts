import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';

import { BlogPostComponent } from './blog-post.component';

import { PostService } from '../services/post.service';

describe('BlogPostComponent', () => {
  let component: BlogPostComponent;
  let fixture: ComponentFixture<BlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatIconModule, HttpClientModule ],
      declarations: [ BlogPostComponent ],
      providers: [ PostService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
