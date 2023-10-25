/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Agree2disagree3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("EmailP", "./Agree2disagree3/costumes/EmailP.svg", {
        x: 135.5,
        y: 28.5
      }),
      new Costume("EmailF", "./Agree2disagree3/costumes/EmailF.svg", {
        x: 136,
        y: 28.5
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenbackdropswitchesto() {
    while (true) {
      if (this.stage.costume.name === "backdrop2") {
        if (this.toNumber(this.stage.vars.agree) === 1) {
          this.visible = true;
          for (let i = 0; i < 10; i++) {
            this.effects.ghost -= 10;
            yield;
          }
        } else {
          this.visible = false;
        }
      }
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
    this.costume = "EmailP";
    this.effects.ghost = 100;
  }

  *whenthisspriteclicked() {
    yield* this.askAndWait("");
    this.costume = "EmailF";
    yield* this.wait(2);
    this.stage.vars.email = this.answer;
    this.stage.vars.emails.push(this.stage.vars.email);
    this.stage.costume = "backdrop3";
  }

  *whenbackdropswitchesto3() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }
}
