import {Component, OnInit} from '@angular/core';
import { FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';
import {Usuario} from '../Clases/usuario';
import {Pareja} from '../Clases/pareja';
import {DinamicasService} from './dinamicas.service';
import {CatalogoDinamica} from '../Clases/catalogoDinamica';

@Component({
selector: 'dinamicas-form',
templateUrl: '/app/Dinamicas/dinamicas.component.html',

})

export class DinamicasComponent implements OnInit {

  dinamicasForm: FormGroup;
  dinamicas: CatalogoDinamica[];

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


  