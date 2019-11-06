import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Array<Article> = [];

  constructor(
    private http: HttpClient
  ) {
  }

  findAll(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(`${environment.apiURL}/articles`);
  }

  findById(id: number): Observable<Article> {
    return this.http.get<Article>(`${environment.apiURL}/articles/${id}`);
  }
}

export interface Article {

  id: number;
  title: string;
  subtitle?: string;
  content?: string;
  date?: Date;

}
