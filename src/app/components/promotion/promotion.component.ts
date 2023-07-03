import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.sass']
})
export class PromotionComponent {
  @Input() svgColors: string = "#ffffff"
}
