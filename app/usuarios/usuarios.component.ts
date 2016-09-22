
import { Component, OnInit } from '@angular/core';

import { Usuario } from '../clases/usuario';
import { LoginService } from '../login/login.service';

@Component({    
    selector: 'usuarios',
    templateUrl: '/app/usuarios/usuarios.component.html'
})

export class UsuariosComponent implements OnInit {
     usuarios=[];
    constructor(private loginService: LoginService) { }

    ngOnInit() {        
        this.loginService.getUsuarios()
            .subscribe(usuarios => {
                this.usuarios = usuarios;
              //  console.log(usuarios);
            });
    }
}