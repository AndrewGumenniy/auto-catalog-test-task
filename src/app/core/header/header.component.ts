import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {}

  public loggedIn(): string {
    return this.authService.loggedIn();
  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
