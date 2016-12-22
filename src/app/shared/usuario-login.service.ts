import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService} from './authentication.service';
import { Usuario } from './usuario';


@Injectable ()
export class UsuarioLoginService {
  
  usuariosLocales = [
    { usuarioId: 1, usuario:'admin',  password: 'admin', foto:'C:/cat.jpg' },
    { usuarioId: 2, usuario:'invitado', password: 'invitado', foto:'foto2.jpg' },
    { usuarioId: 3, usuario:'karla',  password: 'karla', foto:'foto3.jpg' },    
  ];

  private token: string;

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
  }

  getUsuarios(): Observable<Usuario[]> {
   // add authorization header with jwt token
   let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
   let options = new RequestOptions({ headers: headers });

   // get users from api
   return this.http.get('/api/usuarios', options)
              .map((response: Response) => response.json());
  }


  getUsuariosLocales() {
    return this.usuariosLocales;  
  }
  
  getUsuario(id) {
    return this.usuariosLocales.find(usuario => usuario.usuarioId == id);
  }
  
  getUsuarioPassword(username,password) {
    return this.usuariosLocales.find(usuario => ( usuario.usuario == username && usuario.password == password) )  
  }
}


