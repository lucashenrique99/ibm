import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ArticleService, Article } from 'src/app/services/articles/article.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var require: any;

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {

  @ViewChild('quill', { static: true })
  quill: ElementRef;
  article: Article;

  editor: any;

  constructor(
    private articles: ArticleService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.article = {
      content: '',
      date: null,
      id: null,
      title: ''
    };

    let Quill = require('quill');
    this.editor = new Quill(this.quill.nativeElement, {
      theme: 'bubble',
      modules: {
        toolbar: null
      }
    });
    this.editor.enable(false);

    this.activatedRoute
      .paramMap
      .pipe(filter((param: ParamMap) => param && param.has("id")))
      .subscribe(
        (param: ParamMap) => {
          this.articles
            .findById(param.get("id"))
            .pipe(filter(value => value !== null && value !== undefined))
            .subscribe((value) => {
              this.article = value;
              this.editor.setContents(JSON.parse(this.article.content), 'api');
            })
        }
      )
  }

}
