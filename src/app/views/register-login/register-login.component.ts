import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations"

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.sass'],
  animations: [
    trigger("moveFormRegister", [
      state("1", style({
        transform: "translateX(0) rotate(7deg)",
        zIndex: "-1"
      })),
      state("2", style({
        transform: "translateX(0)",
        zIndex: "100"
      })),
      transition("1 => 2", [
        animate('.1s', style({ transform: 'translateX(110%)' })),
        animate(".1s", style({zIndex: "100"})),
        animate('.1s', style({ transform: 'translateX(0)' })),
      ]),
      transition("2 => 1", [
        animate('.1s', style({ transform: 'translateX(-110%)' })),
        animate(".1s", style({zIndex: "100"})),
        animate('.1s', style({ transform: 'translateX(0)' })),
        animate(".1s", style({transform: "rotate(7deg)"})),
      ])
    ]),
    trigger("moveFormLogin", [
      state("1", style({
        transform: "translateX(0)",
        zIndex: "100"
      })),
      state("2", style({
        transform: "translateX(0) rotate(7deg)",
        zIndex: "-1"
      })),
      transition("1 => 2", [
        animate(".1s", style({transform: "rotate(7deg)"})),
        animate(".1s", style({zIndex: -1})),
      ]),
      transition("2 => 1", [
        animate(".1s", style({transform: "rotate(0deg)"})),
        animate(".1s", style({zIndex: -1})),
      ])
    ])
  ]
})
export class RegisterLoginComponent {
  activeForm = 1;
  typeInput: string = "password"

  moveForm(formNumber: number) {
    this.activeForm = formNumber
  };

  showPassword() {
    this.typeInput = "text"
    setTimeout(()=>{
      this.typeInput = "password";
    },3000)
  };
}
