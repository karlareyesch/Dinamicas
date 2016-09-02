import {Component} from '@angular/core';

@Component({
	selector: 'app',
  templateUrl: 'app/app.component.html',	
  styleUrls:['./assets/stylesheets/styles.css']
  
})


export class AppComponent {  

   openSideNave(mysidenav) {     
      mysidenav.toggle();   
    }

    views: Object[] = [
    {
      apartado: "Home",
      descripcion:"",
      icono:"home"
    } , 
     
    {
      apartado: "Dinamicas",
      descripcion:'/dinamicas',
      icono: "event"
    },
    {
      apartado: "Parejas",
      descripcion:'/parejas',
      icono:"wc"
    },
    {
      apartado: "Reportes",
      descripcion: '/pareja/3',
      icono: "assignment"
    },
    {
      apartado: "Equipo Interno",
      descripcion: '/pareja/4',
      icono: "assignment_ind"
    },
    {
      apartado: "Configuracion",
      descripcion: '/configuracion',
      icono: "settings"
    },
   ]; 

   }

   
   