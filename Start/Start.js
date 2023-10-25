/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Start extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Start1B", "./Start/costumes/Start1B.svg", {
        x: 168.5,
        y: 66.5
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start1" },
        this.whenIReceiveStart1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenIReceiveStart1() {
    yield* this.wait(1);
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    while (true) {
      if (this.touching("mouse")) {
        this.effects.brightness = 10;
      } else {
        this.effects.brightness = 0;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.effects.ghost = 100;
  }

  *whenthisspriteclicked() {
    if (!(/* no username */ "" === "Valor-15")) {
      if (this.arrayIncludes(this.stage.vars.users, /* no username */ "")) {
        this.stage.costume = "backdrop3";
      } else {
        this.stage.vars.users.push(/* no username */ "");
        this.stage.costume = "backdrop2";
      }
    } else {
      this.stage.costume = "backdrop2";
    }
  }

  *whenbackdropswitchesto() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }

  *whenbackdropswitchesto3() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }
}
