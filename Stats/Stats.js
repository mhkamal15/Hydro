/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stats extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("istockphoto2", "./Stats/costumes/istockphoto2.svg", {
        x: 112.5,
        y: 103.5
      }),
      new Costume("istockphoto12", "./Stats/costumes/istockphoto12.svg", {
        x: 113.318510635636,
        y: 271.34429227544587
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
    this.visible = false;
    while (true) {
      if (this.touching("mouse")) {
        this.effects.brightness = 10;
        this.costume = "istockphoto12";
      } else {
        this.effects.brightness = 0;
        this.costume = "istockphoto2";
      }
      yield;
    }
  }

  *whenbackdropswitchesto() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    this.visible = true;
  }

  *whenbackdropswitchesto2() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.stage.costume = "backdrop6";
  }

  *whenbackdropswitchesto3() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }
}
