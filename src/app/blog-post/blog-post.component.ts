import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { Post } from './post';
import { User } from '../profile/user';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  post: Post;

  constructor(private domSanitizer: DomSanitizer, public matIconRegistry: MatIconRegistry) {
    matIconRegistry.addSvgIcon('views', domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/preview.svg'));
    matIconRegistry.addSvgIcon('comments', domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/bubble.svg'));
    matIconRegistry.addSvgIcon('likes', domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/like.svg'));
  }

  ngOnInit() {
    this.post = new Post();

    this.post.views = 172;
    this.post.comments = 34;
    this.post.likes = 210;
    this.post.cover = '../../assets/images/cover.jpg';
    this.post.text = 'Your talent amazes! This is awesome. Excited to see the final product.';
    this.post.owner = new User();
    this.post.owner.firstName = 'John';
    this.post.owner.lastName = 'Raymons';
    this.post.owner.image = '../../assets/images/avatar.png';
  }

}
