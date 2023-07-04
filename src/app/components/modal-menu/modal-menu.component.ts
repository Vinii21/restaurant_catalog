import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.component.html',
  styleUrls: ['./modal-menu.component.sass']
})
export class ModalMenuComponent {
  overflow: string = "none"
  @Input() showMenu: boolean = false;
  @Output() closeMenu = new EventEmitter<boolean>()

  closeModalMenu() {
    this.closeMenu.emit(!this.showMenu)
  }
}
