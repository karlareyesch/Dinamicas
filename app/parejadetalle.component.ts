import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParejasService } from './equipointerno.service';
import { Pareja} from  "./clases/pareja";

@Component({
  selector: 'pareja-detail',
  template: `
    <h2>{{ pareja.nombresEsposa + ' y ' + pareja.nombresEsposo }}</h2>
  `
})
export class ParejasDetalleComponent implements OnInit { 

  pareja: Pareja;
  constructor(private parejaService: ParejasService, private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
  console.log(this.route.snapshot.params);
    this.pareja = this.parejaService.getPareja(this.route.snapshot.params["id"]);
  }
}