import { Component, OnInit } from '@angular/core';
// import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { UsuarioLoginService } from '..//../shared/usuario-login.service';
import { AuthenticationService} from '../../shared/authentication.service';
import { Usuario} from '../../shared/usuario';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {
    alerta: boolean = false;
    loginForm: FormGroup;
    usuario: Usuario ;
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
                   // this.router.navigate(['/usuarios']);
                } else {
                    // login failed
                    this.error = 'Usuario y/o Contraseña incorrectos ';
                    this.loading = false;
                }
            });
    }
}
