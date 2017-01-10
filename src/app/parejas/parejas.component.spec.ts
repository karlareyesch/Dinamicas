/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ParejasComponent } from './parejas.component';
import { ParejaService} from './shared/pareja.service';

describe('Component: Parejas', () => {
  let parejaService:ParejaService;
  it('should create an instance', () => {
    let component = new ParejasComponent(parejaService);
    expect(component).toBeTruthy();
  });
});
