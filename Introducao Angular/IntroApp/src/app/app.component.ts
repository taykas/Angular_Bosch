import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IntroApp';
  count = 0;
  label = "";

  foiClicado = () => {
    this.count++;
  }

  foiMudado = () => {
    this.label = textIn
  }
}
