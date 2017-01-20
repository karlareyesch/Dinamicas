/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DinamicasComponent } from './dinamicas.component';
import { DinamicaService} from './shared/dinamicas.service';

describe('Component: Dinamicas', () => {
  let ds: DinamicaService;
  it('Debe crear la instancia', () => {
    let component = new DinamicasComponent(ds);
    expect(component).toBeTruthy();
  });
});
