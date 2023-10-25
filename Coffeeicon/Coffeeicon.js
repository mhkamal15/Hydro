/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Coffeeicon extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("coffeeicon198", "./Coffeeicon/costumes/coffeeicon198.svg", {
        x: 204,
        y: 37.5
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CoffeeAnime" },
        this.whenIReceiveCoffeeanime
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
    this.visible = false;
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

  *whenIReceiveCoffeeanime() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    yield* this.wait(1);
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
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
