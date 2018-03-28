import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Data } from '../entities/data';
import { DATA } from '../mocks/data-mock';

@Injectable()
export class DataService {

  constructor() { }

  get(): Observable<Data[]> {
    return of(DATA);
  }

  getById(id: number): Observable<Data> {
    return of(DATA.find(data => id === data.id));
  }
}
