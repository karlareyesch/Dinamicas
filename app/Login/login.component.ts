import {Component} from '@angular/core';
import {FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';



import {Usuario} from '../Clases/usuario';

@Component({
selector: 'login-form',
templateUrl: '/app/Login/login.component.html',


})

export class LoginComponent  {

  loginForm: FormGroup;

  constructor(lf: FormBuilder) {
    this.loginForm = lf.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {        
        console.log(this.loginForm.value); 
  }
}