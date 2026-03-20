import { Component, EventEmitter, Output } from '@angular/core';
import MockComida, { IComida } from './Comida.mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent {
  protected comida: IComida[] = []
  protected comidaSelecionada: IComida | null =  null;
  IsClicked: boolean = false;
  
  @Output()
  OnClick: EventEmitter<any> = new EventEmitter();

  
  constructor () {
    this.comida = MockComida
  }
  clicked(comida: IComida) {
    this.IsClicked = !this.IsClicked;
    this.comidaSelecionada = comida
  }

  closeModal(fechar: boolean) {
    this.IsClicked = fechar
  }
}

