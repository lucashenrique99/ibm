import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/articles/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Array<any>;

  constructor(
    private articlesService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.articlesService.findAll()
      .subscribe(array => this.articles = array);
  }

  onClick(id) {
    this.router.navigate([`/artigos/${id}`])
  }

}
