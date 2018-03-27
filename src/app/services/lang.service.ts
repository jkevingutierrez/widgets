import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Lang } from '../entities/lang';
import { LANGS } from '../mocks/langs-mock';

@Injectable()
export class LangService {

  constructor() { }

  get(): Observable<Lang[]> {
    return of(LANGS);
  }

  getById(id: number): Observable<Lang> {
    return of(LANGS.find(lang => id === lang.id));
  }

  getByCode(code: string): Observable<Lang> {
    return of(LANGS.find(lang => code === lang.code));
  }
}
