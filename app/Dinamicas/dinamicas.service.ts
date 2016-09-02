export class DinamicasService {
  
  dinamicas = [
    { id: 1, dinamicaId: 41, fechaInicio: new Date(),  fechaFinal: new Date(), lugar: '' },
    { id: 1, dinamicaId: 42, fechaInicio: new Date(),  fechaFinal: new Date(), lugar: '' },
    { id: 1, dinamicaId: 43, fechaInicio: new Date(),  fechaFinal: new Date(), lugar: '' },   
    
     ];

  
  getDinamicas() {
    return this.dinamicas;  
  }
  
  getDinamica(id) {
    return this.dinamicas.find(dinamica => dinamica.id == id);
  }
}