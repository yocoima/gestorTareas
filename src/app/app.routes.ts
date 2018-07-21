import { RouterModule, Routes } from '@angular/router';
import { NewTareaComponent } from './components/new-tarea/new-tarea.component';
import { BitacoraTareasComponent } from './components/bitacora-tareas/bitacora-tareas.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { MantenedorComponent } from './components/mantenedor/mantenedor.component';

const APP_ROUTES: Routes = [
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'new-tarea', component: NewTareaComponent },
  { path: 'bitacora-tareas', component: BitacoraTareasComponent },
  { path: 'mantenedor', component: MantenedorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio-sesion' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
