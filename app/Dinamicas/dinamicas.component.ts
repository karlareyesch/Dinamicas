import {Component, OnInit} from '@angular/core';
import { FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';
import {Usuario} from '../clases/usuario';
import {Pareja} from '../clases/pareja';
import {DinamicasService} from './dinamicas.service';
import {Dinamicas} from '../clases/dinamicas';

@Component({
selector: 'dinamicas-form',
templateUrl: '/app/Dinamicas/dinamicas.component.html',

})

export class DinamicasComponent implements OnInit {

  dinamicasForm: FormGroup;
  dinamicas: Dinamicas[];

  constructor(fb: FormBuilder,private dinamicasService: DinamicasService) {
    this.dinamicasForm = fb.group({
      id: ['', Validators.required],
      dinamica: ['', Validators.required],
      finicio:['',Validators],
      ffinal: ['',Validators],
      lugar: ['',Validators]
    });
  }

  onSubmit() {        
        console.log(this.dinamicasForm.value); 
  }
 
  ngOnInit() {
    this.dinamicas=this.dinamicasService.getDinamicas();
  }

}


  