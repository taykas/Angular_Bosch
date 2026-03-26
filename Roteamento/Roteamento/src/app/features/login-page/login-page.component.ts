import { Component, OnInit } from '@angular/core';
import {}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  isLogin = true;
  showModal = true;

  openLogin() {
    this.isLogin = true;
    this.showModal = true;
  }

  openCadastro() {
    this.isLogin = false;
    this.showModal = true;
  }
}
