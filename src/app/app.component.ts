import { Component, OnInit } from '@angular/core';
import {} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['..//assets/stylesheets/styles.css',
              './app.component.css']
})
export class AppComponent implements OnInit{
   views : Object[];

   openSideNave(mysidenav) {
      mysidenav.toggle();
    }

   constructor (){}

   ngOnInit () {

   this.views= [
    {
      apartado: "Home",
      descripcion:"/home",
      icono:"home"
    },
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
}
