import { Component, OnInit } from '@angular/core';
import { Pareja} from './clases/pareja'
import { ParejasService }   from './equipointerno.service';


@Component({
  selector: 'equipointerno-list',
  template: `
    <h2>Equipo Interno</h2>
    
    <ul>
      <li *ngFor="let pareja of parejas">
        <a [routerLink]="['/pareja',  pareja.id ]">{{pareja.nombrePareja}}</a>
      </li>
    </ul>
  `,
  
})
export class ParejasListComponent implements OnInit {
  
  parejas: Pareja[];

  constructor(private parejasService: ParejasService) {
    
  }
  
  ngOnInit() {
    this.parejas=this.parejasService.getParejas();
  }
}