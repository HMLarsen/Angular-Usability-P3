import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeConsoleComponent } from './components/home-console/home-console.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ContaComponent } from './components/conta/conta.component';
import { AmigosComponent } from './components/amigos/amigos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeConsoleComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'conta', component: ContaComponent },
  { path: 'amigos', component: AmigosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
