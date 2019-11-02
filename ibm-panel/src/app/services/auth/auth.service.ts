import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly $isAuthenticated: BehaviorSubject<boolean>;

  constructor(
    private http: HttpClient
  ) {
    this.$isAuthenticated = new BehaviorSubject<boolean>(
      this.getAccessKey() !== null && this.getAccessKey() !== undefined
    );
  }

  getAccessKey() {
    return localStorage.getItem('key');
  }

  isAuthenticated(): Observable<boolean> {
    return this.$isAuthenticated;
  }

  handleLogin(username: string, password: string): Observable<any> {
    return this.$isAuthenticated;
    // return this.http.post<{ key: string }>(`${environment.apiURL}/users/sign-in`, { username, password })
    //   .pipe(map(value => {
    //     localStorage.setItem('key', value.key);
    //     this.$isAuthenticated.next(true);

    //     return { logged: true }
    //   }));
  }

  handleLogout(): Observable<any> {
    localStorage.removeItem('key');
    this.$isAuthenticated.next(false);
    return this.$isAuthenticated;
  }

}
