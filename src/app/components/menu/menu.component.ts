import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  //variable que se envia al componente hijo categories
  showModal: boolean = true;
  svgColors: string = "#ffffff"
  //variable que se emite para mostrar el modal de promociones
  PromotionModal: boolean = true
  //Output para mostrar el modal de promociones
  @Output() showPromotionModal = new EventEmitter<boolean>();

  toggleColorSvg(value: boolean) {
    if(value) {
      this.svgColors = "#ffffff"
    } else {
      this.svgColors = "#f99899"
    }
  }
  //Método que cambia el valor de la variable que se envia a categories y el color
  toggleModal() {
    this.showModal = !this.showModal;
    this.toggleColorSvg(this.showModal)
  }
  //Método que emite al padre para mostrar el modal de promociones
  togglePromotionModal() {
    this.showPromotionModal.emit(this.PromotionModal)
  }
}
