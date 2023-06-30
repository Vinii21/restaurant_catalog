import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  svg = "../../assets/svg/colocho2.svg"
  btn = false

  activeInfoButton() {
    this.btn = !this.btn
  }
}
