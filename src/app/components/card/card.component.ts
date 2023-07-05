import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  showModal: boolean = true
  @Output() showMenuModal = new EventEmitter<boolean>();

  toggleShowModalMenu() {
    this.showMenuModal.emit(this.showModal)
  }
}
