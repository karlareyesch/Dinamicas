import {Component} from '@angular/core';
import {FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';

import { ROUTER_DIRECTIVES } from '@angular/router';

import {Usuario} from '../Clases/usuario';

@Component({
selector: 'login-form',
templateUrl: '/app/Login/login.component.html',

directives: [ROUTER_DIRECTIVES],
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