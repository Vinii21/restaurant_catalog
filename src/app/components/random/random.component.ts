import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.sass']
})
export class RandomComponent {
  @Input() svgColors: string = "#ffffff";
}
