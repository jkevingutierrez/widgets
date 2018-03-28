import { Post } from '../entities/post';
import { USERS } from './users-mock';

export const POSTS: Post[] = [{
  id: 1,
  text: 'Your talent amazes! This is awesome. Excited to see the final product.',
  cover: './assets/images/cover.jpg',
  views: 172,
  comments: 34,
  likes: 210,
  owner: USERS.find(user => user.firstName === 'John' && user.lastName === 'Raymons')
}];
