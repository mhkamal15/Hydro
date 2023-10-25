/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hydrotagline extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "HydroTagline1",
        "./Hydrotagline/costumes/HydroTagline1.svg",
        { x: 196, y: 14.5 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Tagline" },
        this.whenIReceiveTagline
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.effects.ghost = 100;
  }

  *whenIReceiveTagline() {
    yield* this.wait(1);
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    yield* this.wait(2);
    this.broadcast("Start");
  }

  *whenIReceiveStart() {
    yield* this.wait(1);
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
    this.broadcast("Start1");
  }
}
