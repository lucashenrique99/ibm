import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(
    private http: HttpClient
  ) {
  }

  findAll(): Observable<Array<Lesson>> {
    return this.http.get<Array<Lesson>>(`${environment.apiURL}/lessons`);
  }

}

export interface Lesson {

  id: number;
  title: string;
  subtitle?: string;
  date: Date | string;
  content?: string;
  url: string;

}