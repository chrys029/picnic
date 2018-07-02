import { Routes, RouterModule} from '@angular/router';
import { NgModule } from "@angular/core";
import { ConnexionComponent } from './components/connexion/connexion.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AccountComponent } from './components/account/account.component';
import { FourohfourComponent } from './components/fourohfour/fourohfour.component';


const routes: Routes =[
    { path: 'connect', component: ConnexionComponent  },
    { path: 'account', canActivate: [AuthGuardService], component: AccountComponent },
    { path: '', component: ConnexionComponent},
    { path: 'not-found', component: FourohfourComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule{
}
export const routingComponents = [ConnexionComponent,AccountComponent,FourohfourComponent]