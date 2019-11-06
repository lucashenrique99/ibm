import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CrudInterface } from '../interface/crud-interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements CrudInterface<User, number> {

  users: Array<User> = [];
  users$: BehaviorSubject<Array<User>>;

  constructor(
    private http: HttpClient
  ) {
    this.users$ = new BehaviorSubject<Array<User>>(this.users);
  }

  findAll(): Observable<Array<User>> {
    // return this.users$;
    return this.http.get<Array<User>>(`${environment.apiURL}/users`);
  }

  findById(id: any): Observable<User> {
    // const user = this.users.find(u => u.id == id);
    // return new BehaviorSubject<User>(user ? user : null);
    return this.http.get<User>(`${environment.apiURL}/users/${id}`);
  }

  save(user: any): Observable<User> {
    return (user.id) ? this.update(user) : this.insert(user);
  }

  private insert(user: any): Observable<User> {
    // if (!user.id) {
    //   user.id = Math.ceil(Math.random() * 1000);
    // }
    // this.users.push(user);
    // this.users$.next(this.users);

    // return new BehaviorSubject<User>(user);
    return this.http.post<User>(`${environment.apiURL}/users`, user);
  }

  private update(user: User): Observable<User> {
    // const index = this.users.findIndex(u => u.id == user.id);
    // if (index !== -1) {
    //   user.password = this.users[index].password;
    //   this.users.splice(index, 1);
    // }
    // return this.insert(user);
    return this.http.put<User>(`${environment.apiURL}/users/${user.id}`, user);
  }

  delete(id: number): Observable<User> {
    // this.users = this.users.filter(u => u.id == id);
    // this.users$.next(this.users);
    // return new BehaviorSubject<User>(null);
    return this.http.delete<User>(`${environment.apiURL}/users/${id}`);
  }

}

export interface User {

  id: number;
  email: string;
  name: string;
  password?: string;

}