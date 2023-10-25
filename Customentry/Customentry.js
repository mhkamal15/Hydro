/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Customentry extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("istockphoto", "./Customentry/costumes/istockphoto.svg", {
        x: 106.5,
        y: 106
      }),
      new Costume("istockphoto1", "./Customentry/costumes/istockphoto1.svg", {
        x: 113.31851063563602,
        y: 271.3442744205264
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
        this.costume = "istockphoto1";
      } else {
        this.effects.brightness = 0;
        this.costume = "istockphoto";
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
    yield* this.askAndWait("How many ounces are in your custom drink?");
    this.stage.vars.customoz = this.answer;
  }

  *whenbackdropswitchesto3() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }
}
