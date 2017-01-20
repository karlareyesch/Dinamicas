import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {Usuario} from './usuario';

export function httpFactory(backend, options) {
      //function (backend,options) {


        // configure fake backend
        backend.connections.subscribe((connection: MockConnection) => {
           // let testUser = { usuarioId: 1, usuario: 'test', password: 'test', foto:'C:\cat.jpg' };
        let dina=[];

        let testUsers = [
            { usuarioId: 1, usuario:'admin',  password: 'admin', foto:'C:/cat.jpg' },
            { usuarioId: 2, usuario:'invitado', password: 'invitado', foto:'foto2.jpg' },
            { usuarioId: 3, usuario:'karla',  password: 'karla', foto:'foto3.jpg' },
           ];
        let usuario : Usuario;
            // wrap in timeout to simulate server api call
            setTimeout(() => {
                // fake authenticate api end point
                if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                    // get parameters from post request
                    let params = JSON.parse(connection.request.getBody());
                    // check user credentials and return fake jwt token if valid
                   //if (params.usuario === testUser.usuario && params.password === testUser.password) {
                  usuario= testUsers.find(testUsers=> testUsers.usuario === params.usuario && testUsers.password === params.password)
                  console.log(usuario);
                  if (usuario !== null && usuario != undefined) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({ status: 200, body: { token: 'fake-jwt-token' } })
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({ status: 401 })
                        ));
                    }
                }

                // fake users api end point
                if (connection.request.url.endsWith('/api/usuarios') && connection.request.method === RequestMethod.Get) {
                    // check for fake auth token in header and return test users if valid, this security is implemented server side
                    // in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        connection.mockRespond(new Response(
                            new ResponseOptions({ status: 200, body: [testUsers] })
                        ));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new Response(
                            new ResponseOptions({ status: 401 })
                        ));
                    }
                }

                 if (connection.request.url.endsWith('/api/dinamicas') && connection.request.method === RequestMethod.Get) {
                  // dina= this.http.request('app/dinamicas/shared/dinamicas.json')
                  //   .map(res => res.json());

                        dina=this.http.get('/app/dinamicas/shared/dinamicas.json')
                        .subscribe(res => this.data = res.json());

                      console.log(dina);

                     if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        connection.mockRespond(new Response(
                            new ResponseOptions({ status: 200, body: [testUsers[0]] })
                        ));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new Response(
                            new ResponseOptions({ status: 401 })
                        ));
                    }
                     //console.log('dinamicas');
                  }

            }, 500);

        });

        return new Http(backend, options);
    };

export let fakeBackendProvider = {

    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: httpFactory,
    deps: [MockBackend, BaseRequestOptions]
};