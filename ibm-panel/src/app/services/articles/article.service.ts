import { Injectable } from '@angular/core';
import { CrudInterface } from '../interface/crud-interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService implements CrudInterface<Article, number>  {

  articles: Array<Article> = [];
  articles$: BehaviorSubject<Array<Article>>;

  constructor(
    private http: HttpClient
  ) {
    this.articles$ = new BehaviorSubject(this.articles);
  }

  findAll(): Observable<Array<Article>> {
    // return this.articles$;
    return this.http.get<Array<Article>>(`${environment.apiURL}/articles`);
  }

  findById(id: number): Observable<Article> {
    // const articles = this.articles.find(u => u.id == id);
    // return new BehaviorSubject(articles ? articles : null);
    return this.http.get<Article>(`${environment.apiURL}/articles/${id}`);
  }

  save(article: any): Observable<Article> {
    return (article.id) ? this.update(article) : this.insert(article);
  }

  private insert(article: Article): Observable<Article> {
    // if (!article.id) {
    //   article.id = Math.ceil(Math.random() * 1000);
    // }
    // this.articles.push(article);
    // this.articles$.next(this.articles);

    // return new BehaviorSubject(article);
    return this.http.post<Article>(`${environment.apiURL}/articles`, article);
  }

  private update(article: Article): Observable<Article> {
    // this.articles = this.articles.filter(u => u.id != article.id);
    // return this.insert(article);
    return this.http.put<Article>(`${environment.apiURL}/articles/${article.id}`, article);
  }

  delete(id: number): Observable<Article> {
    // this.articles = this.articles.filter(u => u.id != id);
    // this.articles$.next(this.articles);
    // return new BehaviorSubject(null);
    return this.http.delete<Article>(`${environment.apiURL}/articles/${id}`);
  }
}

export interface Article {

  id: number;
  title: string;
  subtitle?: string;
  content?: string;
  date?: Date;

}
