import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:string ='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  
  constructor(private _http:Http) { 
  }

  public getUsers(){
    return this._http.get(this.baseUrl+'/users').pipe(map((response: Response)=> response.json()));
  }

 

  public getUser(id:Number){
    return this._http.get(this.baseUrl+'/user/' +id,this.options).pipe(map((response: Response)=> response.json()));
  }

  public deleteUser(id:number){
    return this._http.get(this.baseUrl+'/user/'+id,this.options).pipe(map((response: Response)=> response.json()))
  }

  public createUser(user:User){

    return this._http.post(this.baseUrl+'/user',JSON.stringify(user), this.options).pipe(map((response: Response)=> response.json()))
    
  }

  public updateUser(user:User){

    return this._http.put(this.baseUrl+'/user',JSON.stringify(user), this.options).pipe(map((response: Response)=> response.json()))
   
  }

}
