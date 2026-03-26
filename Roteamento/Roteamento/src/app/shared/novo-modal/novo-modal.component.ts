import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-novo-modal',
  templateUrl: './novo-modal.component.html',
  styleUrls: ['./novo-modal.component.css']
})
export class NovoModalComponent {
  @Input() Title: string = '';
  @Input() SaveLabel: string = '';
  @Input() modalType: 'login' | 'cadastro' = 'login';

  @Input() isLogin: boolean = true;
  @Output() toggleType = new EventEmitter<void>();

  toggle() {
    this.toggleType.emit();
  }
}
