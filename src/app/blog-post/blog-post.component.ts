import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { Post } from '../entities/post';
import { User } from '../entities//user';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  post: Post;

  constructor(private domSanitizer: DomSanitizer, public matIconRegistry: MatIconRegistry, private postService: PostService) {
    matIconRegistry.addSvgIcon('views', domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/preview.svg'));
    matIconRegistry.addSvgIcon('comments', domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/bubble.svg'));
    matIconRegistry.addSvgIcon('likes', domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/like.svg'));
  }

  ngOnInit() {
    this.postService.getById(1).subscribe(post => this.post = post);
  }

}
