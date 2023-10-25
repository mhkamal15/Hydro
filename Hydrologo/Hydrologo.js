/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hydrologo extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("HydroLogo1", "./Hydrologo/costumes/HydroLogo1.svg", {
        x: 146,
        y: 53.5
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.effects.ghost = 100;
    yield* this.wait(1);
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    this.broadcast("Tagline");
  }

  *whenIReceiveStart() {
    yield* this.wait(1);
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }
}
