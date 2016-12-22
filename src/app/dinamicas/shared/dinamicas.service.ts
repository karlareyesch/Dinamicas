import { Injectable } from '@angular/core';
import { Dinamicas } from './dinamicas';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { AuthenticationService} from '../../shared/authentication.service';
import {Usuario} from '../../shared/usuario';
//import { Usuario } from './usuario';


@Injectable()
export class DinamicaService {

    dinamicas: Array<Dinamicas>;
    dinamica: Dinamicas;
    data;

    constructor(private http: Http, private authenticationService: AuthenticationService) {
        this.dinamicas = [
            { id: 1, dinamicaId: 41, fechaInicio: new Date(), fechaFinal: new Date(), lugar: 'Catedral Del Espiritu Santo' },
            { id: 2, dinamicaId: 42, fechaInicio: new Date(), fechaFinal: new Date(), lugar: 'Iglesia Santo Niño' },
            { id: 3, dinamicaId: 43, fechaInicio: new Date(), fechaFinal: new Date(), lugar: 'Iglesia San Carmen' },
            { id: 4, dinamicaId: 44, fechaInicio: new Date(), fechaFinal: new Date(), lugar: 'Iglesia San Martin de Porres' },
            { id: 5, dinamicaId: 45, fechaInicio: new Date(), fechaFinal: new Date(), lugar: 'Iglesia San Judas' },
            { id: 6, dinamicaId: 46, fechaInicio: new Date(), fechaFinal: new Date(), lugar: 'Iglesia Sagrada Familia' },
        ];

        this.dinamica =
            {
                id: 1, dinamicaId: 41, fechaInicio: new Date(), fechaFinal: new Date(), lugar: ''
            }
    }

    getDinamicas() {
        return this.dinamicas;
    }

    getDinamica(id) {
        return this.dinamicas.find(dinamica => dinamica.id == id);
    }
/*
    getDinamicasApi(): Observable<Dinamicas[]> {
    // add authorization header with jwt token
    //let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.get('/api/usuarios', options)
              .map((response: Response) => response.json());
    }
*/
    getDinamicasApi(): Observable<Dinamicas[]>{
   //  return this.http.get('/app/dinamicas/shared/dinamicas.json').map((res:Response) => res.json());
 let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
   let options = new RequestOptions({ headers: headers });
                 return this.http.get('/api/dinamicas', options)
              .map((response: Response) => response.json());
    }

    getUsuarios(): Observable<Usuario[]> {
   // add authorization header with jwt token
   let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
   let options = new RequestOptions({ headers: headers });

   // get users from api
   return this.http.get('/api/usuarios', options)
              .map((response: Response) => response.json());
  }

}

