import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from 'src/app/user/users';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogIncorrectUserComponent } from './components/dialog-incorrect-user/dialog-incorrect-user.component';
import { DialogSessionOutComponent } from './components/dialog-session-out/dialog-session-out.component';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private timer;

    constructor(
        private router: Router,
        private http: HttpClient,
        private route: Router,
        private dialog: MatDialog) {
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

                this.timer = setTimeout(() => {
                    this.dialog.open(DialogSessionOutComponent);
                    this.logout();
                }, 300000);
                return user;
            }));
    }

    logout() {
        clearTimeout(this.timer);
        sessionStorage.removeItem('currentUser');
        localStorage.setItem('lastItem', this.route.url);
        this.currentUserSubject.next(null);
        this.router.navigate(['/login']);
    }

    usuarioLogado() {
        return this.currentUserSubject.value;
    }
}
