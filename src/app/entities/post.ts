import { User } from './user';

export class Post {
  views: number;
  comments: number;
  likes: number;
  text: string;
  cover: string;
  owner: User;
}
