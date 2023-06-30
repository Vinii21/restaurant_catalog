import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  showModal = true;
  svgColors = "#ffffff"

  toggleColorSvg(value: boolean) {
    if(value) {
      this.svgColors = "#ffffff"
    } else {
      this.svgColors = "#f99899"
    }
  }

  toggleModal() {
    this.showModal = !this.showModal;
    this.toggleColorSvg(this.showModal)
  }
}
