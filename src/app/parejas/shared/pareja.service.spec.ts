import { Pareja } from './pareja';
// import { TestBed, async } from '@angular/core/testing';
import { ParejaService } from './pareja.service';
import { Http } from '@angular/http';


describe('Clase Pareja tests', () => {
    let pareja: Pareja;

    beforeEach(() => {
        pareja = new Pareja();
    });
    it('La Clase Pareja debe ser valida', () => {
        expect(pareja).not.toBeNull();
    });
});

describe('ParejaService Tests', () => {
    let http : Http;
    let service: ParejaService;
    beforeEach(() => {
        service = new ParejaService(http);
    });

    it('Debe existir funcion getPareja', function () {
        expect(service.getPareja).toBeDefined();
    });

    it('Debe existir funcion getParejas', function () {
        expect(service.getParejas).toBeDefined();
    });

    it('Regresa todas las parejas disponibles', () => {
        expect(service.getParejas()).toEqual(service.parejas);
        console.log(service.parejas);
    });

    it('Debe regresar una sola pareja', function () {
        expect(service.getPareja()).toEqual(service.pareja);
        console.log(service.pareja);
    });
});
