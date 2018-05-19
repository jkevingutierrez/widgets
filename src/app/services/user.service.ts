import { Injectable } from '@angular/core';
import { Observable,  of } from 'rxjs';

import { User } from '../entities/user';
import { USERS } from '../mocks/users-mock';

@Injectable()
export class UserService {

  constructor() { }

  get(): Observable<User[]> {
    return of(USERS);
  }

  getById(id: number): Observable<User> {
    return of(USERS.find(user => id === user.id));
  }

}
