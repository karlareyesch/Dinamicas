/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { UsuarioLoginComponent } from './usuario-login.component';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService} from '../../shared/authentication.service';


describe('Component: UsuarioLoginComponent', () => {
let lf: FormBuilder;
let router: Router;
let authenticationService: AuthenticationService;

  it('Debe crear la instancia', () => {
    let component = new UsuarioLoginComponent(router, authenticationService, lf);
    expect(component).toBeTruthy();
  });
});
