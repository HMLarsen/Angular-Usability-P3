import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeConsoleComponent } from './components/home-console/home-console.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-console', pathMatch: 'full' },
  { path: 'home-console', component: HomeConsoleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
