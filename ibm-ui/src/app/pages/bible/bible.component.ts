import { Component, OnInit } from '@angular/core';
import { BibleService } from './service/bible.service';
import { BibleBook } from './service/bible-book';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent implements OnInit {

  books: Array<BibleBook>;

  constructor(
    private bibleService: BibleService
  ) { }

  ngOnInit() {
    this.books = this.bibleService.books;
  }

}

interface Chapter extends BibleBook {
  isReadMode: boolean;
  selectedChapter: string;
}
