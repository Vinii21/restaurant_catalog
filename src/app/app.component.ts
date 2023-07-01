import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'catalogo_restaurants_app';
  showPromotion = false

  showPromotionModal(showPromotionModal: boolean) {
    this.showPromotion = showPromotionModal
  }
}
