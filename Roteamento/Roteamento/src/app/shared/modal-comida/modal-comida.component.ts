import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComida } from 'src/app/features/main-page/comida-page/Comida.mock';

@Component({
  selector: 'app-modal-comida',
  templateUrl: './modal-comida.component.html',
  styleUrls: ['./modal-comida.component.css']
})
export class ModalComidaComponent {


  @Input()
  comida?: IComida | null

  @Output()
  OnClose: EventEmitter<boolean> = new EventEmitter;

  closeModal() {
    this.OnClose.emit(false);
  }
}
