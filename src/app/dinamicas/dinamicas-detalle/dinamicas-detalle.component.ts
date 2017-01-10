import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
   inputs: ['value', 'showPrompt', 'placeholder', 'title', 'okText', 'cancelText'],
   outputs: ['valueEmitted'],
  styleUrls: ['./dinamicas-detalle.component.css']
})

export class DinamicasDetalleComponent implements OnInit {
  dinamicasForm: FormGroup;
  dinamicas: Dinamicas[];
  myDate: Date;
  public value: Dinamicas;
  public showPrompt: boolean;
  public placeholder: string;
  public title: string;
  public okText: string;
  public cancelText: string;
  valueEmitted: EventEmitter<IDinamicas> = new EventEmitter<IDinamicas>();
 /* @Input() value: Dinamicas;
  @Input() showPrompt: boolean;
  @Input() title: string;
  @Input() okText: string;
  @Input() cancelText: string;
  @Output() valueEmitted: EventEmitter<IDinamicas> = new EventEmitter<IDinamicas>();*/

  constructor(private fb: FormBuilder, private dinamicaService: DinamicaService) {} // se dejo libre el constructor se paso todo al init
    procesar({ value, valid }: { value: IDinamicas, valid: boolean }) {
    console.log(this.dinamicasForm.value);
  }

  ngOnInit() {
    this.okText = 'OK';
    this.cancelText = 'Cancelar';
    this.myDate = new Date('2017-01-04');
    this.dinamicasForm = this.fb.group({
      id: [{disabled : true}, Validators.required], // Pendiente asignar un set value para asignar valor de inputs
      dinamica: ['', Validators.required],
      finicio: ['', Validators],
      ffinal: ['', Validators],
      lugar: ['', Validators]
    });
  }

  cancel(valor: any) {
     this.valueEmitted.emit(valor);
  }

  emitValue(value: Dinamicas) {
    console.log(this.myDate);
    console.log(value);
    this.valueEmitted.emit(value);
}

}
