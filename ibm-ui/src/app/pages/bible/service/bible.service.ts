import { Injectable, OnInit } from '@angular/core';
import { BibleBook } from './bible-book';

declare var require: any;

@Injectable({
  providedIn: 'root'
})
export class BibleService {

  readonly books: Array<BibleBook>;

  constructor() {
    this.books = require('../../../../assets/bible/nvi.json');
  }

}
