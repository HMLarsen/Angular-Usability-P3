import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user/users';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthService) {
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
    this.router.navigate(['/login']);
  }

}
