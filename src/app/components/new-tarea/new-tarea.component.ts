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

}

// Para llenar los combos
 ComboClasificacion: string []=[];
 ComboImportancia: string []=[];
 ComboPeriodo: string[]= [];
 SeleccionClasificacion: string;
 SeleccionImportancia: string;
 SeleccionPerido: string;

  constructor(private conexionbdService: ConexionbdService) {

  let urlClasificacion:string =
  "https://appangular-1e41c.firebaseio.com/clasifiacion.json";
  let UrlImportancia:string =
  "https://appangular-1e41c.firebaseio.com/importancia.json";
  let urlPeriodo:string =
  "https://appangular-1e41c.firebaseio.com/periodo.json";

// combo clasificacion
  conexionbdService.getobjects(urlClasificacion).subscribe(
  clasificacionTarea => {
    Object.keys(clasificacionTarea).forEach(
      key => {
        this.ComboClasificacion.push(key);
        }
      )
    }
  )

// combo Importancia
conexionbdService.getobjects(UrlImportancia).subscribe(
  importanciaTarea => {
    Object.keys(importanciaTarea).forEach(
      key => {
        this.ComboImportancia.push(key);
      }
    )
  }
)
    conexionbdService.getobjects(urlPeriodo).subscribe(
        periodosTarea => {
            Object.keys(periodosTarea).forEach(
              key => {
              this.ComboPeriodo.push(key);
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
  borrar(newTarea: NgForm){
    this.conexionbdService.deleteTarea(newTarea.value);

  }

  resetForm(newTarea?: NgForm){
    if(newTarea != null)
    newTarea.reset();
    this.conexionbdService.selectedTarea = new Tareas();
  }
}
