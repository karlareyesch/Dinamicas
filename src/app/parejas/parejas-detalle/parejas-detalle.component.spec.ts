/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ParejasDetalleComponent } from './parejas-detalle.component';
import { ActivatedRoute } from '@angular/router';
import { ParejaService } from '../shared/pareja.service';

describe('Component:ParejasDetalle', () => {
let activateRoute: ActivatedRoute;
let parejaService: ParejaService;
  it('should create an instance', () => {
    let component = new ParejasDetalleComponent(parejaService, activateRoute);
    expect(component).toBeTruthy();
  });
});

