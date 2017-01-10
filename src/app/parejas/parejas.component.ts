import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { ParejaService } from './shared/pareja.service';
import { Pareja} from  './shared/pareja';

@Component({
  selector: 'app-parejas',
  // templateUrl: './parejas.component.html',
  // <h2>{{ pareja.nombresEsposa + ' y ' + pareja.nombresEsposo }}</h2>
  template: `
    <h2>Equipo Interno</h2>
    <ul>
      <li *ngFor="let pareja of parejas">
        <a [routerLink]="['/pareja',  pareja.id ]">{{pareja.nombrePareja}}</a>
      </li>
    </ul>
  `,
})

export class ParejasComponent implements OnInit {

  parejas: Pareja[];

  constructor(private parejasService: ParejaService) {}

  ngOnInit() {
    this.parejas = this.parejasService.getParejas();
    console.log(this.parejas);
  }
}
