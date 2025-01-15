import { Component, Inject, OnInit } from '@angular/core';


import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';

import { Aperitivo } from '../../model/aperitivo';


@Component({
  selector: 'app-aceptar',
  standalone: true,
  imports: [],
  templateUrl: './aceptar.component.html',
  styleUrl: './aceptar.component.css'
  
})

export class AceptarComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<AceptarComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Aperitivo) { }

  ngOnInit(): void {
    alert('33')
  }

  iniciar() {
    this.dialogRef.close(true);
  }

  cerrar() {
    this.dialogRef.close();
  }
}