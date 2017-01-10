/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { UsuarioLoginComponent } from './usuario-login.component';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService} from '../../shared/authentication.service';


describe('Component: UsuarioLoginComponent', () => {
let fb: FormBuilder;
let router: Router;
let authenticationService: AuthenticationService;

  it('should create an instance', () => {
    let component = new UsuarioLoginComponent(router, authenticationService, fb);
    expect(component).toBeTruthy();
  });
});
