import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComida } from 'src/app/features/main-page/comida-page/Comida.mock';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  IsClicked: boolean = false;

  @Output()
  OnClick: EventEmitter<void> = new EventEmitter();

  @Input()
    comida!: IComida;

  clicked = () => {
    this.OnClick.emit();
    this.IsClicked = true
    console.log(this.IsClicked)
  }
}
