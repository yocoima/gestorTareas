import { Component, OnInit } from '@angular/core';
import { MantenedorService } from '../../servicios/mantenedor.service';



@Component({
  selector: 'app-mantenedor',
  templateUrl: './mantenedor.component.html'
})
export class MantenedorComponent implements OnInit {

  mantenedores:any[]=[];
  constructor(private _mantenedorService:MantenedorService ) { }

  ngOnInit() {
    this.mantenedores = this._mantenedorService.getMantendor();
    console.log(this.mantenedores);
  }

}
