import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {


  userForm : FormGroup;
 
  constructor(private _userService:UserService, private _formBuiler:FormBuilder) { }


  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.userForm =this._formBuiler.group({
      email:'',
      password:''
    })
  }


  onSignIn(){
    const formValue = this.userForm.value;

    this._userService.getUserByEmailAndPassword(formValue.email, formValue.password);

  }

}
