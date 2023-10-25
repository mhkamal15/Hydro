/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Agree2disagree extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("No", "./Agree2disagree/costumes/No.svg", {
        x: 13.499999999999972,
        y: 13
      }),
      new Costume("Yes", "./Agree2disagree/costumes/Yes.svg", {
        x: 17.5,
        y: 17.5
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenbackdropswitchesto() {
    yield* this.wait(5);
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
  }

  *whenbackdropswitchesto2() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.effects.ghost = 100;
    this.stage.vars.agree = 0;
    this.costume = "No";
  }

  *whenthisspriteclicked() {
    if (this.toNumber(this.stage.vars.agree) === 1) {
      this.costume = "No";
      this.stage.vars.agree = 0;
    } else {
      if (this.toNumber(this.stage.vars.agree) === 0) {
        this.costume = "Yes";
        this.stage.vars.agree = 1;
      }
    }
  }

  *whenbackdropswitchesto3() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }
}
