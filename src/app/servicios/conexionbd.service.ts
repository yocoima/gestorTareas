import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AngularFirestoreCollection} from 'angularfire2/firestore';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import * as firebase from 'firebase/app';
import { Tareas } from '../models/tareas';

// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';

@Injectable()
export class ConexionbdService {

    tareaList: AngularFireList<any>;
    perido: AngularFirestoreCollection<any>;
    selectedTarea: Tareas = new Tareas();


    constructor(private firebase: AngularFireDatabase,
                private http: HttpClient
    ){}




// metodo obtener las tareas de la base de datos
    getTareas(){
      return this.tareaList = this.firebase.list('tareas');

    }

// getobjects(){
//   let url= 'https://appangular-1e41c.firebaseio.com/periodo.json';
//   return this.http.get(url);
// }

getobjects(url: string){

  //let url= 'https://appangular-1e41c.firebaseio.com/periodo.json';
  return this.http.get(url);
}

    insertTarea(tareas: Tareas){
      this.tareaList.push({

        descripcion: tareas.descripcion,
        SeleccionClasificacion: tareas.SeleccionClasificacion,
        SeleccionImportancia: tareas.SeleccionImportancia,
        SeleccionPeriodo:tareas.SeleccionPeriodo,
        notas: tareas.notas
      });
    }
    updateTarea(tareas: Tareas){
      this.tareaList.update(tareas.key$,{
        descripcion: tareas.descripcion,
        SeleccionClasificacion: tareas.SeleccionClasificacion,
        SeleccionImportancia: tareas.SeleccionImportancia,
        SeleccionPeriodo:tareas.SeleccionPeriodo
      });
    }

    deleteTarea($id_tarea: string){
      this.tareaList.remove($id_tarea);

    }

    // loginGoogle(){
    //   return this.afAuth.auth.signInWithPopup (new firebase.auth.GoogleAuthProvider())
    // }

  //   getAuth(){
  //   return this.afAuth.authState.map(auth => auth);
  // }

    // logout(){
    //   return this.afAuth.auth.signOut();
    // }


}
