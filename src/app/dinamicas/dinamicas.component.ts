import { Component, OnInit } from '@angular/core';
//import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario} from '../shared/usuario';
//import { Pareja } from '../parejas/shared/pareja';
import { DinamicaService } from './shared/dinamicas.service';


import { Dinamicas } from './shared/dinamicas';
import { DinamicasDetalleComponent } from './dinamicas-detalle/dinamicas-detalle.component';

@Component({
  selector: 'app-dinamicas',
  templateUrl: './dinamicas.component.html',
  //styleUrls: ['../..//assets/stylesheets/styles.css']
  styleUrls: ['./dinamicas.component.css'],
})

export class DinamicasComponent implements OnInit {
  //dinamicasForm: FormGroup;
  dinamicas: Dinamicas[];
usuarios=[];
  constructor(private dinamicaService: DinamicaService) { }

  /*
    constructor( private dinamicaService: DinamicaService) {    
      this.dinamicasForm = fb.group({
        id: ['', Validators.required],
        dinamica: ['', Validators.required],
        finicio: ['', Validators],
        ffinal: ['', Validators],
        lugar: ['', Validators]
      });
    }
  
    /*onSubmit() {
      console.log(this.dinamicasForm.value);
    }
    }*/

  ngOnInit() {
   // this.dinamicas = this.dinamicaService.getDinamicas();
    this.dinamicasList = this.dinamicaService.getDinamicas();

//Con Fakebackend
/*      this.llamaUsuarios();
      this.llamaDinamica();
      console.log(this.dinamicasApi);
*/

  }

  showDialog: boolean = false;
  editingTodo = null;
  //fieldValue: string = '';
  dinamicasApi=[];
  fieldValue: Dinamicas;
  dinamicasList: any = [];
  okButtonText: string = '';
  titulo: string = '';

  todoDialog(todo = null) {
    this.okButtonText = 'Agregar';
    this.titulo = 'Agregar Dinamica Matrimonial';
    //this.fieldValue = '';
    this.fieldValue = new Dinamicas();
    this.editingTodo = todo;
    if (todo) {
      //this.fieldValue = todo.dinamicaId;
      this.fieldValue = todo;
      this.okButtonText = 'Editar';
      this.titulo = 'Editar Dinamica Matrimonial'
    }
    this.showDialog = true;
  }

  remove(index: number) {
    this.dinamicasList.splice(index, 1);
  }

  updateTodo(dinamicaId) {
    if (dinamicaId) {
      dinamicaId = dinamicaId.trim();
      if (this.editingTodo) {
        this.editTodo(dinamicaId);
      } else {
        this.addTodo(dinamicaId);
      }
    }
    this.hideDialog();
  }

  editTodo(dinamicaId) {
    this.editingTodo.dinamicaId = dinamicaId;
  }

  addTodo(dinamicaId) {
    const dinamica = { dinamicaId: dinamicaId, completed: false };
    this.dinamicasList.push(dinamica);
  }

  hideDialog() {
    this.showDialog = false;
    this.editingTodo = null;
    this.fieldValue = null; // make sure Input is always new
  }

  llamaUsuarios(){
   this.dinamicaService.getUsuarios()
            .subscribe(usuarios => {
                this.usuarios = usuarios;
                console.log(usuarios);
            });

  }

  llamaDinamica(){
  this.dinamicaService.getDinamicasApi()
  .subscribe(dinamicasApi => {
         this.dinamicasApi = dinamicasApi;
         console.log(dinamicasApi);
  });}
}






