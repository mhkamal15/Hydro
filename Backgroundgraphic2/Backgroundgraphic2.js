/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Backgroundgraphic2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("wata1", "./Backgroundgraphic2/costumes/wata1.png", {
        x: 350,
        y: 200
      }),
      new Costume("wata2", "./Backgroundgraphic2/costumes/wata2.png", {
        x: 350,
        y: 200
      }),
      new Costume("wata3", "./Backgroundgraphic2/costumes/wata3.png", {
        x: 350,
        y: 200
      }),
      new Costume("wata4", "./Backgroundgraphic2/costumes/wata4.png", {
        x: 350,
        y: 200
      }),
      new Costume("wata5", "./Backgroundgraphic2/costumes/wata5.png", {
        x: 350,
        y: 200
      }),
      new Costume("wata6", "./Backgroundgraphic2/costumes/wata6.png", {
        x: 350,
        y: 200
      }),
      new Costume("wata7", "./Backgroundgraphic2/costumes/wata7.png", {
        x: 350,
        y: 200
      }),
      new Costume("wata8", "./Backgroundgraphic2/costumes/wata8.png", {
        x: 350,
        y: 200
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start1" },
        this.whenIReceiveStart1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.costume = "wata1";
    this.effects.ghost = 100;
    this.moveBehind();
  }

  *whenIReceiveStart1() {
    yield* this.wait(1);
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    while (true) {
      yield* this.wait(0.5);
      this.costumeNumber++;
      yield;
    }
  }

  *whenbackdropswitchesto() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    this.effects.ghost = 100;
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

  *whenbackdropswitchesto4() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }
}
