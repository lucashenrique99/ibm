import { Injectable } from '@angular/core';
import { CrudInterface } from '../interface/crud-interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LessonsService implements CrudInterface<Lesson, number> {

  lessons: Array<Lesson> = [];
  lessons$: BehaviorSubject<Array<Lesson>>;

  constructor(
    private http: HttpClient
  ) {
    this.lessons$ = new BehaviorSubject(this.lessons);
  }

  findAll(): Observable<Array<Lesson>> {
    // return this.lessons$;
    return this.http.get<Array<Lesson>>(`${environment.apiURL}/lessons`);
  }

  findById(id: number): Observable<Lesson> {
    // const lessons = this.lessons.find(u => u.id == id);
    // return new BehaviorSubject(lessons ? lessons : null);
    return this.http.get<Lesson>(`${environment.apiURL}/lessons/${id}`);
  }

  save(lesson: any): Observable<Lesson> {
    return (lesson.id) ? this.update(lesson) : this.insert(lesson);
  }

  private insert(lesson: Lesson): Observable<Lesson> {
    // if (!lesson.id) {
    //   lesson.id = Math.ceil(Math.random() * 1000);
    // }
    // this.lessons.push(lesson);
    // this.lessons$.next(this.lessons);

    // return new BehaviorSubject(lesson);
    return this.http.post<Lesson>(`${environment.apiURL}/lessons`, lesson);
  }

  private update(lesson: Lesson): Observable<Lesson> {
    // this.lessons = this.lessons.filter(u => u.id != lesson.id);
    // return this.insert(lesson);
    return this.http.put<Lesson>(`${environment.apiURL}/lessons/${lesson.id}`, lesson);

  }

  delete(id: number): Observable<Lesson> {
    // this.lessons = this.lessons.filter(u => u.id != id);
    // this.lessons$.next(this.lessons);
    // return new BehaviorSubject(null);
    return this.http.delete<Lesson>(`${environment.apiURL}/lessons/${id}`);
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