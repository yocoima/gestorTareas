import { Component, OnInit } from '@angular/core';
import { ConexionbdService } from '../../servicios/conexionbd.service';
import { Tareas } from '../../models/tareas';
import { Urls } from '../../models/urls';
import { NgForm } from '@angular/forms';
import { Clasificacion, Importancia, Periodo } from '../../models/clasificacion';

@Component({
  selector: 'app-new-tarea',
  templateUrl: './new-tarea.component.html'
})

export class NewTareaComponent implements OnInit {

imprimirVarlor(){
  console.log('');
}

// Para llenar los combos
 ComboClasificacion: string []=[];
 ComboImportancia: string []=[];
 ComboPeriodo: string[]= [];
 SeleccionClasificacion: string;
 SeleccionImportancia: string;
 SeleccionPerido: string;

   // clasificacion: Clasificacion[] = [
  //   {id: 1, name: 'Hardware'},
  //   {id: 2, name: 'Software'}
  // ]

  // importancia: Importancia[] = [
  //   {id: 0, name: 'Baja'},
  //   {id: 1, name: 'Media'},
  //   {id: 2, name: 'Alta'}
  // ]

  // periodo: Periodo[] = [
  //   {id: 1, name: 'Diaria'},
  //   {id: 2, name: 'Semanal'},
  //   {id: 3, name: 'Quincenal'},
  //   {id: 4, name: 'Mensual'},
  //   {id: 5, name: 'Trimestral'},
  //   {id: 6, name: 'Semestral'},
  //   {id: 7, name: 'Anual'}
  // ]

  constructor(private conexionbdService: ConexionbdService) {

// combo clasificacion
  conexionbdService.getobjects('https://appangular-1e41c.firebaseio.com/clasifiacion.json').subscribe(
  clasificacionTarea => {
    console.log(clasificacionTarea);
    Object.keys(clasificacionTarea).forEach(
      keyCasificacion => {
        console.log('key de clasifiacion es:', keyCasificacion)
        this.ComboClasificacion.push(keyCasificacion);
        }
      )
    }
  )

// combo Importancia
  conexionbdService.getobjects('https://appangular-1e41c.firebaseio.com/importancia.json').subscribe(
  importanciaTarea => {
    console.log(importanciaTarea);
    Object.keys(importanciaTarea).forEach(
      keyImportancia => {
        // console.log('key de clasifiacion es:', keyImportancia)
        this.ComboImportancia.push(keyImportancia);
      }
    )
  }
)
    conexionbdService.getobjects('https://appangular-1e41c.firebaseio.com/periodo.json').subscribe(
        periodosTarea => {
            console.log(periodosTarea);
            Object.keys(periodosTarea).forEach(
              keyPeriodo => {
                // this.periodoCollection.push(peridos[k])
                // console.log('el key es ',keyPeriodo)
                this.ComboPeriodo.push(keyPeriodo);
              }
            )
          }
    );
   }

  ngOnInit() {
    this.conexionbdService.getTareas();
    this.resetForm()
  }

  guardar(newTarea: NgForm){
    console.log(newTarea.value);
    this.conexionbdService.insertTarea(newTarea.value);
    this.resetForm(newTarea);

  }

  resetForm(newTarea?: NgForm){
    if(newTarea != null)
    newTarea.reset();
    this.conexionbdService.selectedTarea = new Tareas();
  }
}
