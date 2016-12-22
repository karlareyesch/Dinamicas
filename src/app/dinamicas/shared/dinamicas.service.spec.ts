import { Dinamicas } from './dinamicas';
import { TestBed, async } from '@angular/core/testing';
import { DinamicaService } from './dinamicas.service';


describe('Clase Dinamicas tests', () => {
    let dinamica: Dinamicas;

    beforeEach(() => {
        dinamica = new Dinamicas();
    });
    it('La Clase Dinamicas debe ser valida', () => {
        expect(dinamica).not.toBeNull();
 });

describe('DinamicaService Tests', () => {

    let service: DinamicaService;
    beforeEach(() => {
        service = new DinamicaService();
    });

    it('Debe existir funcion getDinamica', function () {
        expect(service.getDinamica).toBeDefined();
    });

    it('Debe existir funcion getDinamicas', function () {
        expect(service.getDinamicas).toBeDefined();
    });

    it('Debe regresar una dinamica especifica', function () {
        expect(service.getDinamica('1')).toEqual(service.dinamica);
        console.log(service.dinamica);
    });

    it('Regresa todas las dinamicas disponibles', () => {
        expect(service.getDinamicas()).toEqual(service.dinamicas);
        console.log(service.dinamicas);
    });
});

