import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { DialogIncorrectUserComponent } from '../dialog-incorrect-user/dialog-incorrect-user.component';
import { MatDialog } from '@angular/material';


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
        private dialog: MatDialog
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
                    this.openDialog();
                });
    }

    openDialog(): void {
        this.dialog.open(DialogIncorrectUserComponent);
    }

}
