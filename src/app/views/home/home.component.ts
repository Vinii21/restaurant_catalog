import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  showPromotion = false

  showPromotionModal(showPromotionModal: boolean) {
    this.showPromotion = showPromotionModal
  }
}
