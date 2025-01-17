import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmarComponent } from '../../modales/confirmar/confirmar.component';
import { Tarea } from '../../model/tarea';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-crear-tareas',
  imports: [MatPaginatorModule,MatTableModule],
  templateUrl: './crear-tareas.component.html',
  styleUrl: './crear-tareas.component.css'
})
export class CrearTareasComponent implements OnInit{
  constructor(private router : Router,private dialog: MatDialog){
   
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
  items: string[] = Array.from({ length: 100 }, (_, i) => `Tarea ${i + 1}`);
  displayedItems: string[] = [];
  displayedColumns: string[] = ['item'];

  ngOnInit() {
    
    this.displayedItems = this.items.slice(0, 5);
  }

  paginate(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.displayedItems = this.items.slice(startIndex, endIndex);
  }

}
