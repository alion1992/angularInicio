import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio/inicio-sesion/inicio-sesion.component';
//{ path: '', redirectTo: 'inicioSesion', pathMatch: 'full' },
export const routes: Routes = [
    {path: 'registro', component: RegistroComponent },
    {path: 'inicioSesion', component: InicioSesionComponent },
    
];
