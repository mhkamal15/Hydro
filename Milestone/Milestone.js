/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Milestone extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("25", "./Milestone/costumes/25.svg", {
        x: 107.89901104750177,
        y: 12.897856703800585
      }),
      new Costume("50", "./Milestone/costumes/50.svg", {
        x: 118.53037115234376,
        y: 12.898014149475102
      }),
      new Costume("100", "./Milestone/costumes/100.svg", {
        x: 135.95054664062502,
        y: 12.898014149475102
      }),
      new Costume("2", "./Milestone/costumes/2.svg", {
        x: 131.744745,
        y: 12.898014149475102
      })
    ];

    this.sounds = [new Sound("pop", "./Milestone/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    while (!(!(this.stage.costumeNumber === 3) || this.mouse.down)) {
      if (this.compare(this.stage.vars.waterpe, 25) > 0) {
        this.costume = 25;
        this.visible = true;
        for (let i = 0; i < 10; i++) {
          this.effects.ghost -= 10;
          yield;
        }
        yield* this.wait(3);
        for (let i = 0; i < 10; i++) {
          this.effects.ghost += 10;
          yield;
        }
        this.visible = false;
      } else {
        if (this.compare(this.stage.vars.waterpe, 50) > 0) {
          this.costume = 50;
          this.visible = true;
          for (let i = 0; i < 10; i++) {
            this.effects.ghost -= 10;
            yield;
          }
          yield* this.wait(3);
          for (let i = 0; i < 10; i++) {
            this.effects.ghost += 10;
            yield;
          }
          this.visible = false;
        } else {
          if (this.compare(this.stage.vars.waterpe, 100) > 0) {
            this.stage.vars.fulldaycount++;
            this.costume = 100;
            this.visible = true;
            for (let i = 0; i < 10; i++) {
              this.effects.ghost -= 10;
              yield;
            }
            yield* this.wait(3);
            for (let i = 0; i < 10; i++) {
              this.effects.ghost += 10;
              yield;
            }
            this.visible = false;
            while (true) {
              this.visible = true;
              this.costume = 2;
              this.goto(-100, 160);
              yield;
            }
          }
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

  *whenbackdropswitchesto3() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }
}
