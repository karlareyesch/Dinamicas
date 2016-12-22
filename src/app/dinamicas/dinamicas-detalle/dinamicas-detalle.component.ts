//import { Component, OnInit } from '@angular/core';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pareja } from '../../parejas/shared/pareja';
import { DinamicaService } from '.././shared/dinamicas.service';
import { Dinamicas } from '.././shared/dinamicas';

@Component({
  selector: 'app-dinamicas-detalle',
  templateUrl: './dinamicas-detalle.component.html',
  styleUrls: ['./dinamicas-detalle.component.css'],
  inputs:['value','showPrompt','placeholder','title','okText','cancelText'],
  outputs:['valueEmitted']
})
/*
export class DinamicasDetalleComponent implements OnInit {
  dinamicasForm: FormGroup;
  dinamicas: Dinamicas[];

  constructor(fb: FormBuilder, private dinamicaService: DinamicaService) {
    this.dinamicasForm = fb.group({
      id: ['', Validators.required],
      dinamica: ['', Validators.required],
      finicio: ['', Validators],
      ffinal: ['', Validators],
      lugar: ['', Validators]
    });
  }

  onSubmit() {
    console.log(this.dinamicasForm.value);
  }

  ngOnInit() {    
  }
}*/

export class DinamicasDetalleComponent implements OnInit {
 
 // public value: string;
  public value : Dinamicas;
  public showPrompt: boolean;
  public placeholder: string;
  public title: string;  
  public okText: string;
  public cancelText: string;
  dinamicasForm: FormGroup;
  dinamicas: Dinamicas[];

  //public valueEmitted = new EventEmitter<string>();
  
  public valueEmitted =new EventEmitter<Dinamicas>();
 // valueEmitted: EventEmitter<{resultados: Dinamicas}>;
  myDate : Date;
  constructor(fb: FormBuilder, private dinamicaService: DinamicaService) {
    this.okText = 'OK';
    this.cancelText = 'Cancelar';
    this.myDate = new Date(); 
  //  this.valueEmitted = new EventEmitter(Dinamicas());
    
    this.dinamicasForm = fb.group({
      id: ['', Validators.required],
      dinamica: ['', Validators.required],
      finicio: ['', Validators],
      ffinal: ['', Validators],
      lugar: ['', Validators]
    });
  }

onSubmit() {
    console.log(this.dinamicasForm.value);
  }
  //emitValue(value) {
  //emitValue(value: Dinamicas){
    emitValue(){
    this.valueEmitted.emit(null);
    console.log(this.value);
  }

  ngOnInit() {
  }
}