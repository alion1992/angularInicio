import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  imports: [],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() dd: string = '';
  
}
