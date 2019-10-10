import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeConsoleComponent } from './components/home-console/home-console.component';

// angular material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// locale
import { MAT_DATE_LOCALE } from '@angular/material';
import { getPortuguesePaginatorIntl } from './ptbr-paginator-intl';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ContaComponent } from './components/conta/conta.component';
import { AmigosComponent } from './components/amigos/amigos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    SidebarComponent,
    HomeConsoleComponent,
    FooterComponent,
    PerfilComponent,
    ContaComponent,
    AmigosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    AppRoutingModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
    { provide: MatPaginatorIntl, useValue: getPortuguesePaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
