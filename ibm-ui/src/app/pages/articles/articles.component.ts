import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/articles/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Array<any>;

  constructor(
    private articlesService: ArticleService
  ) { }

  ngOnInit() {
    this.articlesService.findAll()
      .subscribe(array => this.articles = array);
  }

}
