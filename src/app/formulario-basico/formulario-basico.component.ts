import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-formulario-basico',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './formulario-basico.component.html',
  styleUrl: './formulario-basico.component.css'
})
export class FormularioBasicoComponent {

}
