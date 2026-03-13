import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Output()
  textInput: EventEmitter<string> = new EventEmitter<string>

  @Input()
  label: string = ""

  valor: string = '';
  

  change = () => {
    this.textInput.emit("valor")
  }
}
