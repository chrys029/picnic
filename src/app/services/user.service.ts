import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import {Response, Headers, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";
import { User } from '../models/user';
import { Subject } from "rxjs";


@Injectable()
export class UserService{

    private baseUrl: string ='http://localhost:8080/api'
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({headers: this.headers});

    private user: User;

 
    constructor(private _http: HttpClient){}

        public getUsers(){
            return this._http.get(this.baseUrl+'/users').pipe(map((response: Response)=> response.json()));
        }


        public getUser(id:Number){
            return this._http.get(this.baseUrl+'/user/' +id).pipe(map((response: Response)=> response.json()));
        }


        public getUserByEmailAndPassword(email:string, password:string){
            return this._http.get(this.baseUrl+'/userActive/'+email+'/'+password).pipe(map((response:Response) => response.json()));
        }

        
        public deleteUser(id:number){
            return this._http.get(this.baseUrl+'/user/'+id).pipe(map((response: Response)=> response.json()))
        }

        public createUser(user:User){

            return this._http.post(this.baseUrl+'/user',JSON.stringify(user)).pipe(map((response: Response)=> response.json()))
            
        }

        public updateUser(user:User){

            return this._http.put(this.baseUrl+'/user',JSON.stringify(user)).pipe(map((response: Response)=> response.json()))
        
        }




        setter(user: User){
            this.user=user;
        }

        getter(){
            return this.user;
        }


}