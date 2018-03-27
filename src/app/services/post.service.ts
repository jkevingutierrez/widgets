import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Post } from '../entities/post';
import { POSTS } from '../mocks/posts-mock';

@Injectable()
export class PostService {

  constructor() { }

  get(): Observable<Post[]> {
    return of(POSTS);
  }

  getById(id: number): Observable<Post> {
    return of(POSTS.find(post => id === post.id));
  }


}
