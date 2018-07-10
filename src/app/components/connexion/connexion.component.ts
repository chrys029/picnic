import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service'
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  
  userForm : FormGroup;
  user: User;
 
  constructor(private  _authservice: AuthService, private _formBuiler:FormBuilder, private _userService: UserService,private router: Router) { 

  }

  ngOnInit() {
    
    this.initForm();
  }

  initForm(){
    this.userForm =this._formBuiler.group({
      email:'',
      password:''
    })
    this._authservice.getter;
  }


  onSignIn(){
    const formValue = this.userForm.value;
    this._authservice.getUserByEmailAndPassword(formValue.email, formValue.password).subscribe(value => {
      console.log(value);
      if(true ===value){
        this._authservice.isAuth = true;
        this.router.navigate(['account']);
      }
      else{
        this.router.navigate(['']);
      }
    }
    );
  }
}
