import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from 'src/app/user/users';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(
        private http: HttpClient,
        private route: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string, remindPassword: boolean) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                sessionStorage.setItem('currentUser', JSON.stringify(user));
                if (remindPassword) {
                    localStorage.setItem('ultimoLogin', username);
                    localStorage.setItem('ultimaSenha', password);
                } else {
                    localStorage.removeItem('ultimoLogin');
                    localStorage.removeItem('ultimaSenha');
                }
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem('currentUser');
        localStorage.setItem('lastItem', this.route.url);
        this.currentUserSubject.next(null);
    }

    usuarioLogado() {
        return this.currentUserSubject.value;
    }

}