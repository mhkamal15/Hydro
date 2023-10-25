/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Back extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("back", "./Back/costumes/back.svg", {
        x: 44.66571723723726,
        y: 44.66571723723726
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
      } else {
        this.effects.brightness = 0;
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
    this.stage.costume = "backdrop1";
    this.broadcast("Start1");
  }

  *whenbackdropswitchesto3() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    this.visible = true;
  }

  *whenbackdropswitchesto4() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    this.visible = true;
  }

  *whenbackdropswitchesto5() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    this.visible = true;
  }
}
