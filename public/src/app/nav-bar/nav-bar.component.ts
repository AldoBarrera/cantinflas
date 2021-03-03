import { Component, OnInit } from '@angular/core';
import { KeycloakService, KeycloakAuthGuard } from 'keycloak-angular';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
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
