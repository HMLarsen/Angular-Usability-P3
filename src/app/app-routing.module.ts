import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeConsoleComponent } from './components/home-console/home-console.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ContaComponent } from './components/conta/conta.component';
import { AmigosComponent } from './components/amigos/amigos.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeConsoleComponent, canActivate: [AuthGuardService] },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuardService] },
  { path: 'conta', component: ContaComponent, canActivate: [AuthGuardService] },
  { path: 'amigos', component: AmigosComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
