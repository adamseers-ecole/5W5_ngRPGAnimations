import { Component } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import { shakeX } from 'ng-animate';
import { pulse } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("death", [
      transition(
        ":increment",
        useAnimation(shakeX, { params: { timing: 0.5 } })
      ),
    ]),
    trigger('attack', [
      transition(':increment', [
        useAnimation(pulse, {params: { timing: 0.3, scale: 4.5 } }),
        //useAnimation( /* Code de la deuxième animation */ ),
      ]),
    ]),
  ],
})
export class AppComponent {
  slimeIsPresent = false;
  ng_death = 0
  ng_attack = 0
  css_hit = false

  constructor() {
  }

  spawn() {
    this.slimeIsPresent = true;
    // TODO Animation angular avec forwards
    this.showSlime()
  }

  death(){
    this.slimeIsPresent = false;
    // TODO Animation angular avec forwards
    this.hideSlime()
    // TODO 2e animation angular en même temps
    this.ng_death++
  }

  attack(){
    // TODO Jouer une animation et augmenter l'intensité du mouvement avec scale
    // TODO Jouer une autre animation avant
    this.ng_attack++
  }

  hit(){
    // TODO Utilisé Animista pour faire une animation différente avec css (wobble)
    var element = document.getElementById("slimeyId");
    this.css_hit = true
    setTimeout(() => {
      this.css_hit = false
    }, 1000);
  }

  showSlime(){
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeOut");
    element?.classList.add("fadeIn");
  }
  hideSlime(){
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeIn");
    element?.classList.add("fadeOut");
  }
}
