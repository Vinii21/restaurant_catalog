import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fork',
  templateUrl: './fork.component.html',
  styleUrls: ['./fork.component.sass']
})
export class ForkComponent {
  @Input() svgColors: string = "#ffffff";
}
