import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pareja } from '../../parejas/shared/pareja';
import { DinamicaService } from '.././shared/dinamicas.service';
import { Dinamicas } from '.././shared/dinamicas';

interface IDinamicas {
  id: number;
  dinamicaId: number;
  fechaInicio: Date;
  fechaFinal: Date;
  lugar: string;
}

@Component({
  selector: 'app-dinamicas-detalle',
  templateUrl: './dinamicas-detalle.component.html',
  styleUrls: ['./dinamicas-detalle.component.css'],
  inputs: ['value', 'showPrompt', 'placeholder', 'title', 'okText', 'cancelText'],
  outputs: ['valueEmitted']
})

export class DinamicasDetalleComponent implements OnInit {
  public value: Dinamicas;
  public showPrompt: boolean;
  public placeholder: string;
  public title: string;
  public okText: string;
  public cancelText: string;
  dinamicasForm: FormGroup;
  dinamicas: Dinamicas[];
  myDate: Date;

  valueEmitted: EventEmitter<IDinamicas> = new EventEmitter<IDinamicas>();

  constructor(private fb: FormBuilder, private dinamicaService: DinamicaService) { } // se dejo libre el constructor se paso todo al init
  
  procesar({ value, valid }: { value: IDinamicas, valid: boolean }) {
    console.log(this.dinamicasForm.value);
  }

  ngOnInit() {
    this.okText = 'OK';
    this.cancelText = 'Cancelar';
    this.myDate = new Date();
    

    this.dinamicasForm = this.fb.group({
      id: ['', Validators.required], //Pendiente asignar un set value para asignar valor de inputs
      dinamica: ['', Validators.required],
      finicio: [this.myDate, Validators],
      ffinal: [this.myDate, Validators],
      lugar: ['cancelText', Validators]
    });
  }

  onSubmit() {
    console.log(this.dinamicasForm.value);
    let idinamicas: IDinamicas = {
      id: this.dinamicasForm.value.id,
      dinamicaId: this.dinamicasForm.value.dinamica,
      fechaInicio: this.dinamicasForm.value.finicio,
      fechaFinal: this.dinamicasForm.value.ffinal,
      lugar: this.dinamicasForm.value.lugar
    }
    console.log(idinamicas);
    console.log(this.value)
    // this.valueEmitted.emit(idinamicas);   Queda listo regreso de datos en esta parte
  }


}