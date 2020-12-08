import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/_models';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  currentUser: User;
  menuOpen: boolean;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ){
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);  
    this.menuOpen = false;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  nav_slide() {
      document.getElementsByClassName('nav-bar')[0].classList.toggle('nav_active');
      document.getElementsByClassName('burger')[0].classList.toggle('open');
}

}
