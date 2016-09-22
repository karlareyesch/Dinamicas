import {Component} from '@angular/core';


@Component({
    selector: 'navbartop',
    templateUrl: './app/navbartop.component.html',
    styleUrls:['./assets/stylesheets/styles.css'],
    
    
})


export class NavBarTopComponent {
 
  openSideNave(mysidenav) {         
        mysidenav.toggle(); 
    }


   views: Object[] = [
     
    {
      apartado: "Dinamicas",
      descripcion: "['/']",
      icono: "event"
    },
    {
      apartado: "Parejas",
      descripcion: "['/']",
      icono: "wc"
    },
    {
      apartado: "Reportes",
      descripcion: "['/']",
      icono: "assignment"
    },
    {
      apartado: "Equipo Interno",
      descripcion: "['/']",
      icono: "assignment_ind"
    },
    {
      apartado: "Configuracion",
      descripcion: "['/']",
      icono: "settings"
    },
]; 
}



