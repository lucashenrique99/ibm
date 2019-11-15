import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  articles: Array<string> = [];

  constructor(
    private http: HttpClient
  ) {
  }

  findAll(): Observable<Array<string>> {
    return this.http.get<{ urls: Array<string> }>(`${environment.apiURL}/cults`)
      .pipe<Array<string>>(map((obj) => obj.urls.map(v => v.replace("watch?v=", "embed/"))));
  }
}
