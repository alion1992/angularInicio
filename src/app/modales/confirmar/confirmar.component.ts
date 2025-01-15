import { Component, Inject, OnInit } from '@angular/core';


import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { Tarea } from '../../model/tarea';


@Component({
  selector: 'app-confirmar',
  standalone: true,
  imports: [],
  templateUrl: './confirmar.component.html',
  styleUrl: './confirmar.component.css'
  
})

export class ConfirmarComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfirmarComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Tarea) { }

  ngOnInit(): void {
  }

  iniciar() {
    this.dialogRef.close(true);
  }

  cerrar() {
    this.dialogRef.close();
  }
}