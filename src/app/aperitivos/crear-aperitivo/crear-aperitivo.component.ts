import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AceptarComponent } from '../../modales/aceptar/aceptar.component';
import { Router } from '@angular/router';
import { Aperitivo } from '../../model/aperitivo';

@Component({
  selector: 'app-crear-aperitivo',
  imports: [],
  templateUrl: './crear-aperitivo.component.html',
  styleUrl: './crear-aperitivo.component.css'
})
export class CrearAperitivoComponent implements OnInit {
  constructor(private router : Router,private dialog: MatDialog){
   
  }

  ngOnInit(): void {
    alert('ff')
  }
  aperitivo = new Aperitivo()
  crearAperitivo(){
    
    var nombreApe = (<HTMLInputElement>document.getElementById("nombreAperitivo")).value;
    var descApe = (<HTMLInputElement>document.getElementById("descAperitivo")).value;
    this.aperitivo.nombre = nombreApe
    this.aperitivo.descripcion = descApe


    const dialog = this.dialog.open( AceptarComponent, {
          width: '500px',
          height: '500px',
          data: this.aperitivo,
          
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
