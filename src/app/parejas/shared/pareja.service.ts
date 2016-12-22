import { Injectable } from '@angular/core';
import { Pareja } from './pareja';

@Injectable()
export class ParejaService {

  parejas: Array<Pareja>;
  pareja: Pareja;

  constructor() {
    this.parejas = [
      {
        id: 1, nombrePareja: 'Los Hernandez', nombresEsposa: 'martha', nombresEsposo: 'martin',
        apellidosEsposa: '', apellidosEsposo: '', aliasEsposa: '', aliasEsposo: '',
        numeroHijos: 0, numeroNietos: 0, estanciaHijos: '', pago: 0, registrado: 0,
        equipoInterno: 1
      },

      {
        id: 2, nombrePareja: 'Los Martinez', nombresEsposa: 'daniela', nombresEsposo: 'daniel',
        apellidosEsposa: '', apellidosEsposo: '', aliasEsposa: '', aliasEsposo: '',
        numeroHijos: 0, numeroNietos: 0, estanciaHijos: '', pago: 0, registrado: 0,
        equipoInterno: 2
      },

      {
        id: 3, nombrePareja: 'Los Ramirez', nombresEsposa: 'josefa', nombresEsposo: 'jose',
        apellidosEsposa: '', apellidosEsposo: '', aliasEsposa: '', aliasEsposo: '',
        numeroHijos: 0, numeroNietos: 0, estanciaHijos: '', pago: 0, registrado: 0,
        equipoInterno: 3
      }
    ];

    this.pareja =
      {
        id: 1, nombrePareja: 'Los Hernandez', nombresEsposa: 'martha', nombresEsposo: 'martin',
        apellidosEsposa: '', apellidosEsposo: '', aliasEsposa: '', aliasEsposo: '',
        numeroHijos: 0, numeroNietos: 0, estanciaHijos: '', pago: 0, registrado: 0,
        equipoInterno: 1
      };
  }

  getParejas() {
    return this.parejas;
  }

  getPareja(id) {
    return this.parejas.find(pareja => pareja.id == id);
  }
}