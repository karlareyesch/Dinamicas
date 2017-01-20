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
     <h2>Paises</h2>
    <ul>
        <li>España</li>
        <li>Mexico</li>
        <li>Colombia</li>
    </ul>
  `,
})

export class ParejasComponent implements OnInit {

  parejas: Pareja[];
  public posts;

  // constructor(private parejasService: ParejaService) {}
  constructor(private parejasService: ParejaService) {
/*    this.parejasService.getPosts()
      .subscribe(
       result => {
         this.posts = result;
         console.log(this.posts);
       },
  );*/
  }

  ngOnInit() {
    this.parejas = this.parejasService.getParejas();
    console.log(this.parejas);
  }
}
