import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmarComponent } from '../../modales/confirmar/confirmar.component';
import { Tarea } from '../../model/tarea';


@Component({
  selector: 'app-crear-tareas',
  imports: [],
  templateUrl: './crear-tareas.component.html',
  styleUrl: './crear-tareas.component.css'
})
export class CrearTareasComponent implements OnInit{
  constructor(private router : Router,private dialog: MatDialog){
   
  }
  ngOnInit(): void {
    
  }
  tarea = new Tarea()
  crearTarea(){
    var nombreTarea = (<HTMLInputElement>document.getElementById("nombreTarea")).value;
    var descTarea = (<HTMLInputElement>document.getElementById("descTarea")).value;
    this.tarea.nombre = nombreTarea
    this.tarea.descripcion = descTarea
    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '500px',
      height: '500px',
      data: this.tarea,
      
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if( result) {
          this.router.navigate (['/listaTareas'] ,{skipLocationChange: true})
        }
      }
    )
  }


}
