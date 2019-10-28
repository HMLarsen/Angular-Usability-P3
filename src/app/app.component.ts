import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    timedOut = false;
    lastPing?: Date = null;
    
    constructor(private authService: AuthService, 
                private idle: Idle, 
                private keepalive: Keepalive,
                private router: Router) {
        // sets an idle timeout of 5 seconds, for testing purposes.
        idle.setIdle(5);

        idle.onTimeout.subscribe(() => {
            sessionStorage.clear();
            this.timedOut = true;
            this.router.navigate(['/']);
        });

        // sets the ping interval to 15 seconds
        keepalive.interval(15);

        keepalive.onPing.subscribe(() => this.lastPing = new Date());

        this.reset();
    }

    reset() {
        this.idle.watch();
        this.timedOut = false;
    }

    public get mostrarMenuValue(): boolean {
    if (localStorage.getItem('mostrarMenu') == 'true')
        return true;
    else
        return false;
    }
}

