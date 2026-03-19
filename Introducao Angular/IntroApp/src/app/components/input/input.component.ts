import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input()
  value: string = ""
  @Output()
  changed: EventEmitter<string> = new EventEmitter()


  valor: string = '';
  

  onInputChange = (value: any) => {
    const StringValue = value.srcElement?.value;
    this.changed.emit(StringValue)
  }
}
