/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DinamicasDetalleComponent } from './dinamicas-detalle.component';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DinamicaService } from '.././shared/dinamicas.service';

describe('Component: DinamicasDetalle', () => {
  let fb:FormBuilder;
  let dinamicasServide: DinamicaService;
  it('Debe crear la instancia', () => {
    let component = new DinamicasDetalleComponent(fb, dinamicasServide);
    expect(component).toBeTruthy();
  });
});
