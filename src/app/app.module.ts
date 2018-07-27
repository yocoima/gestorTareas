import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// para BD Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
// SERVICIOS
import { ConexionbdService } from './servicios/conexionbd.service';
import { MantenedorService } from './servicios/mantenedor.service';

// COMPONENTES
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { NewTareaComponent } from './components/new-tarea/new-tarea.component';
import { BitacoraTareasComponent } from './components/bitacora-tareas/bitacora-tareas.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Tareas } from './models/tareas';
import { Urls } from './models/urls';

// RUTAS
import { APP_ROUTING } from './app.routes';
import { MantenedorComponent } from './components/mantenedor/mantenedor.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    NavbarComponent,
    NewTareaComponent,
    BitacoraTareasComponent,
    MantenedorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    HttpClientModule
  ],
  providers: [ConexionbdService,Tareas, Urls, AngularFireDatabase, MantenedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
