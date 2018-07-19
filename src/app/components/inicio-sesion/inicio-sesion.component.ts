import { Component, OnInit } from '@angular/core';
import { ConexionbdService } from '../../servicios/conexionbd.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html'
})
export class InicioSesionComponent implements OnInit {

  constructor(private conexionbdservice: ConexionbdService) { }

  ngOnInit() {
  }

  // onClickGoogleLogin(){
  //   this.conexionbdservice.loginGoogle()
  //   .then((res) => {
  //     console.log(res);
  //   }).catch( err => console.log(err.message))
  // }

}
