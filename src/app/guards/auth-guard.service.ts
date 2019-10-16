import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthService) { }

  canActivate() {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      // Retorna true se logado
      return true;
    }

    // Redireciona para o login caso nao esteja logado
    this.router.navigate(['/login']);
    return false;
  }
}
