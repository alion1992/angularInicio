
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router : Router){
  }
  login(){
    this.router.navigate (['/inicioSesion'] ,{skipLocationChange: true})
  }

}
