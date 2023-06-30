import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-modal-promotions',
  templateUrl: './modal-promotions.component.html',
  styleUrls: ['./modal-promotions.component.sass']
})
export class ModalPromotionsComponent implements AfterViewInit{
   swiper: Swiper | undefined;

   ngAfterViewInit() {
    this.swiper = new Swiper(".swiper-container",{
      // Opciones de configuración de Swiper
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 100,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
      },
    })
   }
}
