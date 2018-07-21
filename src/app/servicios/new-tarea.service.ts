import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewTareaService {

  private newTarea:any[]=[
    {
    nombre: "clasificacion",
    labelVista: "Clasificacion",
    name: "SeleccionClasificacion",
  },
]

  constructor() { }
}
