import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authenticationService: AuthService) {
  }

  ngOnInit() {
  }

  socialSpan() {
    const element = document.getElementById('social-item');
    if (element.style.display === 'flex') {
      element.style.display = 'none';
    } else {
      element.style.display = 'flex';
    }
  }

  logout() {
    this.authenticationService.logout();
  }

  usuarioLogado() {
    return this.authenticationService.usuarioLogado();
  }

}
