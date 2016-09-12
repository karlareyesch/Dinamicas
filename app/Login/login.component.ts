import {Component} from '@angular/core';
import {FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';
import {LoginService} from '../login/login.service';

import {Usuario} from '../clases/usuario';

@Component({
selector: 'login-form',
templateUrl: '/app/Login/login.component.html',


})

export class LoginComponent  {  
  alerta :boolean =false;
  loginForm: FormGroup;
  usuario : Usuario 

  constructor(lf: FormBuilder,private _loginService: LoginService) {
    this.loginForm = lf.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {     
    this.usuario=this._loginService.getUsuarioPassword(this.loginForm.value.username,this.loginForm.value.password);
    
     if (this.usuario !== null && this.usuario != undefined) {       
       this.alerta = false;
       console.log(this.usuario);           
     }else {       
       this.alerta =true;
     }     
  }
}