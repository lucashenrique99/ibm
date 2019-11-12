import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {

        if (this.isWhiteList(req.url)
            && !this.isBlackList(req.url)
            && this.authService.getAccessKey()) {

            return next
                .handle(
                    req.clone({
                        headers: req.headers.set('Authorization', `${this.authService.getAccessKey()}`)
                    }));

        } else {
            return next.handle(req);
        }
    }

    private isBlackList(url: string) {
        return url.includes(`${environment.apiURL}/users/sign-in`);
    }

    private isWhiteList(url: string) {
        return url.includes(environment.apiURL);
    }
}