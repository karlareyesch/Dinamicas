import {Component,OnInit} from '@angular/core';
import {FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';
import {LoginService} from '../login/login.service';
import { Router } from '@angular/router';
import {Usuario} from '../clases/usuario';

import { AuthenticationService } from '../login/authentication.service';


@Component({
selector: 'login-form',
templateUrl: '/app/Login/login.component.html',


})

export class LoginComponent  implements OnInit {  
  alerta :boolean =false;
  loginForm: FormGroup;
  usuario : Usuario 

   model: any = {};
    loading = false;
    error = '';
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        lf: FormBuilder) { 
        this.loginForm = lf.group({
              username: ['', Validators.required],
              password: ['', Validators.required]
            });
        }
 
    /*

  onSubmit() {     
    this.usuario=this._loginService.getUsuarioPassword(this.loginForm.value.username,this.loginForm.value.password);
    
     if (this.usuario !== null && this.usuario != undefined) {       
       this.alerta = false;
       console.log(this.usuario);           
     }else {       
       this.alerta =true;
     }     
  }
*/
  ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }
 
    login() {
        this.loading = true;    
        console.log(this.loginForm.value.username + this.loginForm.value.password);    
        this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
            .subscribe(result => {             
                if (result === true) {
                    // login successful                  
                    this.router.navigate(['/usuarios']);
                } else {
                    // login failed
                    this.error = 'Usuario y/o Contraseña incorrectos ';                     
                    this.loading = false;
                }
            });
    }  
}