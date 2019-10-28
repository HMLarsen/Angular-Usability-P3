import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { UserIdleService } from 'angular-user-idle';


@Component({ templateUrl: 'login.component.html', styleUrls: ['login.component.css'] })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthService,
        private userIdle: UserIdleService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            Login: [localStorage.getItem('ultimoLogin') || '', Validators.required],
            Senha: [localStorage.getItem('ultimaSenha') || '', Validators.required],
            LembrarSenha: ['']
        });
        this.userIdle.onTimerStart().subscribe(count => console.log(count));
        this.userIdle.onTimeout().subscribe(() => console.log('Time is up!'));
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.Login.value, this.f.Senha.value, this.f.LembrarSenha.value)
            .pipe(first())
            .subscribe(
                data => {
                    let route = localStorage.getItem('lastItem');
                    if (!route) {
                        route = '/';
                    }
                    this.router.navigate([route]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                    alert(error);
                });
    }
}