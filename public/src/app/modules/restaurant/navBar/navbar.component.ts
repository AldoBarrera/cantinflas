import { Component, OnInit } from '@angular/core';
import { KeycloakService, KeycloakAuthGuard } from 'keycloak-angular';
@Component({
  selector: 'app-nav-barrestaurant',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarRestaurantComponent implements OnInit {
  isLogged: boolean
  constructor(public keycloakService: KeycloakService) { }

  ngOnInit() {
    this.keycloakService.isLoggedIn().then(response => {
      this.isLogged = response;
   }); 
    
  }

  logout() {
    this.keycloakService.logout();
  }

  login() {
    this.keycloakService.login();
  }

}
