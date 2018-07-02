import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { AccountComponent } from './components/account/account.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AppRoutingModule, routingComponents} from './app-routing.module';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}