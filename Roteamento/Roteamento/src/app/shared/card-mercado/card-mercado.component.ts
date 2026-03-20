// import { Component, Input } from '@angular/core';
// import { IMercado } from 'src/app/features/main-page/mercado-page/Mercado.mock';

// @Component({
//   selector: 'app-card-mercado',
//   templateUrl: './card-mercado.component.html',
//   styleUrls: ['./card-mercado.component.css']
// })


import { Component, Input } from '@angular/core';
import { IMercado } from 'src/app/features/main-page/mercado-page/Mercado.mock';

@Component({
  selector: 'app-card-mercado',
  templateUrl: './card-mercado.component.html',
  styleUrls: ['./card-mercado.component.css']
})
export class CardMercadoComponent {
  @Input()
    mercado!: IMercado;
}

