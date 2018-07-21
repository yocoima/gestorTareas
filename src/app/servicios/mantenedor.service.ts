import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MantenedorService {

  private mantenedores:any[]=[
    {
    label: "clasificacion",
    name: "clasificacion",
    ngModel: "conexionbdService.selectedTarea.clasificacion",
    placeholder:"Clasificacion"
  },
    {
    label: "importancia",
    name: "importancia",
    ngModel: "conexionbdService.selectedTarea.importancia",
    placeholder:"Importancia"
  },
    {
    label: "periodo",
    name: "periodo",
    ngModel: "conexionbdService.selectedTarea.periodo",
    placeholder:"Periodo"
  },
  ]

  constructor() {
    console.log("servicio mantenedor activo")
  }

 getMantendor(){
   return this.mantenedores;

 }

}
