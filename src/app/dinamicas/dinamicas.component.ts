import { Component, OnInit } from '@angular/core';
import { Usuario} from '../shared/usuario';
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
  dinamicas: Dinamicas[];
  usuarios=[];
  showDialog: boolean = false;
  editingTodo = null;  
  dinamicasApi=[];
  fieldValue: Dinamicas;
  dinamicasList: any = [];
  okButtonText: string = '';
  titulo: string = '';
  
  constructor(private dinamicaService: DinamicaService) { }
 
  ngOnInit() {
    // this.dinamicas = this.dinamicaService.getDinamicas();    
    this.dinamicasList = this.dinamicaService.getDinamicas();
    } 

  todoDialog(todo = null) {
    this.okButtonText = 'Agregar';
    this.titulo = 'Agregar Dinamica Matrimonial';   
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

  updateTodo(dinamicas: Dinamicas) {
    if (dinamicas != null) {
     
     //    this.hideDialog();
    if (dinamicas.dinamicaId) {  
      if (this.editingTodo) {
        this.editTodo(dinamicas);
      } else {
        this.addTodo(dinamicas);
      }
    }
  }    
    console.log('viene nulo');
    this.hideDialog();
  }

  editTodo(dinamicas: Dinamicas) {
    //this.editingTodo.dinamicaId = dinamicas.dinamicaId;
    this.editingTodo.dinamicas=dinamicas;
  }

  addTodo(dinamicas: Dinamicas) {
    const dinamica = { id: dinamicas.id, dinamicaId: dinamicas.dinamicaId, fechaInicio: dinamicas.fechaInicio, fechaFinal: dinamicas.fechaFinal, lugar: dinamicas.lugar, completed: false };
    this.dinamicasList.push(dinamica);
  }

  hideDialog() {
    this.showDialog = false;
    this.editingTodo = null;
    this.fieldValue = null; // make sure Input is always new
  }

 /*
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
*/

}






