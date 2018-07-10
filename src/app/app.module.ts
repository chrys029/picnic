import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [
    AuthGuardService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}