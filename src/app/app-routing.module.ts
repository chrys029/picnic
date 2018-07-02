import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { AuthGuardService } from '../app/services/auth-guard.service';
import { ConnexionComponent } from '../app/components/connexion/connexion.component';
import { FourohfourComponent } from '../app/components/fourohfour/fourohfour.component';
import { AccountComponent } from "./components/account/account.component";




const routes: Routes =[
    { path: 'connect',  component: ConnexionComponent  },
    { path: 'account', canActivate: [AuthGuardService], component: AccountComponent },
    { path: '' , component : ConnexionComponent},
    { path: 'not-found', component: FourohfourComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule{
}
export const routingComponents = [AccountComponent,ConnexionComponent,FourohfourComponent]