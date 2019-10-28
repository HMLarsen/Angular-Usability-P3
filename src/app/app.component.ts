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
                private router: Router) {}

    usuarioLogado() {
        return this.authService.usuarioLogado();
    }
}

