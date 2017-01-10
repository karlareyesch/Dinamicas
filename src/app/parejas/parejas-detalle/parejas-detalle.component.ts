import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParejaService } from '../shared/pareja.service';
import { Pareja} from  '../shared/pareja';
// styleUrls: ['./parejas-detalle.component.css']
@Component({
  selector: 'app-parejas-detalle',
  template: `
    <h2>{{ pareja.nombresEsposa + ' y ' + pareja.nombresEsposo }}</h2>
  `})

export class ParejasDetalleComponent implements OnInit {
  pareja: Pareja;
  constructor(private parejaService: ParejaService, private route: ActivatedRoute) {}
  ngOnInit() {
  console.log(this.route.snapshot.params);
    this.pareja = this.parejaService.getPareja(this.route.snapshot.params['id']);
  }
}
