import { Component, OnInit } from '@angular/core';
import { ConexionbdService } from '../../servicios/conexionbd.service';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Tareas } from '../../models/tareas';
@Component({
  selector: 'app-bitacora-tareas',
  templateUrl: './bitacora-tareas.component.html'
})
export class BitacoraTareasComponent implements OnInit {

  // item: string []=[];
  tareas: any []=[];
  // tareaLista: Tareas [];

  constructor(private _conexionbdService: ConexionbdService
  ) {

    this._conexionbdService.getobjects('https://appangular-1e41c.firebaseio.com/tareas.json').subscribe(
    data => {
      console.log(data);
      for( let  key$ in data ){
        console.log(data[key$]);
        this.tareas.push( data[key$]);
      }
    })
}
  ngOnInit() {
}

}

        // this.tareaLista=[]
        // item.forEach(element =>{
        //   let tarea = element.payload.toJSON();
        //   console.log(element)
        //   tarea["$key"] = element.key;
        //   this.tareaLista.push(tarea as Tareas);
        // });

  //       console.log (item);
  //       Object.keys(item).forEach(
  //       element => {
  //         console.log('key de elemento es:', element)
  //         this.tareaList.push(element)
  //       }
  //       )
  //     }
  //   )
  // }
