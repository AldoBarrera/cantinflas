import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent }      from './nav-bar/nav-bar.component';

import { AppRoutingModule }     from './app-routing.module';

import { commonsRouting } from "./common/commons.routing";
import { CommonsModule } from "./common/commons.module";
import { SecurityModule } from "./core/security/security.module" 
import { RestaurantModule } from "./modules/restaurant/restaurant.module" 



import { initializer } from './services/keycloackinit';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { httpInterceptorProviders } from './http-interceptors/index';

import {Error403Component} from "./errors/error403.component";

@NgModule({
  declarations: [
      AppComponent,
      NavBarComponent,
      Error403Component       
  ], 
  imports: [
    KeycloakAngularModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    commonsRouting,
    CommonsModule,  
	SecurityModule,
	RestaurantModule 

	
  ],
  providers: [    
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
  /*providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]*/
})
export class AppModule { }

