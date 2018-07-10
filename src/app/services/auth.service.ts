import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string ='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  isAuth = false;
  private user = new User("","","");


  constructor(private _http:Http) {  
  }

  getUserByEmailAndPassword(email: string, password:string){
    return this._http.get(this.baseUrl+'/userActive/'+email+"/"+password).pipe(map((response: Response)=> response.json()));
  }

  signOut() {
    this.isAuth = false;
  }

  
  setter(user: User){
    this.user=user;
  }

  getter(){
    return this.user;
  }
}
