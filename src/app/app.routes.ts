import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio/inicio-sesion/inicio-sesion.component';
import { ListaTareasComponent } from './tareas/lista-tareas/lista-tareas.component';
import { CrearTareasComponent } from './tareas/crear-tareas/crear-tareas.component';
import { CrearAperitivoComponent } from './aperitivos/crear-aperitivo/crear-aperitivo.component';
//{ path: '', redirectTo: 'inicioSesion', pathMatch: 'full' },
export const routes: Routes = [
    {path: 'registro', component: RegistroComponent },
    {path: 'inicioSesion', component: InicioSesionComponent },
    {path: '', redirectTo: 'inicioSesion', pathMatch: 'full' },
    {path: 'listaTareas', component: ListaTareasComponent },
    {path: 'crearTareas', component: CrearTareasComponent },
    {path: 'aperitivos', component: CrearAperitivoComponent}

    
];
