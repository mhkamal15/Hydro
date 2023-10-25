/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Heading extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Heading111", "./Heading/costumes/Heading111.svg", {
        x: 195.75656201171873,
        y: 32.51565853118893
      })
    ];

    this.sounds = [new Sound("pop", "./Heading/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
    this.visible = false;
    this.stage.watchers.water.visible = false;
    this.stage.watchers.amountdrunkw.visible = false;
    this.stage.watchers.waterpe.visible = false;
    this.stage.watchers.soda.visible = false;
    this.stage.watchers.coffee.visible = false;
    this.stage.vars.soda = 0;
    this.stage.vars.coffee = 0;
    this.stage.vars.amountdrunkw = 0;
    this.stage.vars.water = 0;
    this.stage.vars.waterpe = 0;
    this.stage.vars.fulldaycount = 0;
    this.stage.vars.customoz = 0;
    while (true) {
      this.stage.vars.amountdrunkw =
        this.toNumber(this.stage.vars.water) * 8 +
        this.toNumber(this.stage.vars.soda) * 12 +
        this.toNumber(this.stage.vars.coffee) * 8 +
        this.toNumber(this.stage.vars.customoz);
      this.stage.vars.waterpe =
        (this.toNumber(this.stage.vars.amountdrunkw) / 125) * 100;
      yield;
    }
  }

  *whenbackdropswitchesto() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    this.visible = true;
    this.stage.watchers.water.visible = true;
    this.stage.watchers.waterpe.visible = true;
    this.stage.watchers.amountdrunkw.visible = true;
    this.stage.watchers.coffee.visible = true;
    this.stage.watchers.soda.visible = true;
    this.stage.watchers.drunkweek.visible = false;
    this.stage.watchers.avgounc.visible = false;
    this.stage.watchers.fulldaycount.visible = false;
  }

  *whenbackdropswitchesto2() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
    this.stage.watchers.water.visible = false;
    this.stage.watchers.amountdrunkw.visible = false;
    this.stage.watchers.waterpe.visible = false;
    this.stage.watchers.coffee.visible = false;
    this.stage.watchers.soda.visible = false;
    while (true) {
      yield* this.wait(1);
      this.stage.vars.week++;
      if (this.toNumber(this.stage.vars.week) === 604800) {
        this.stage.vars.drunkweek = this.stage.vars.amountdrunkw;
        this.stage.vars.weeks.push(this.stage.vars.drunkweek);
        this.stage.vars.weeklistcount++;
        this.stage.vars.week = 0;
      }
      this.stage.vars.avgounc =
        this.toNumber(
          this.itemOf(this.stage.vars.weeks, this.stage.vars.weeklistcount - 1)
        ) / this.stage.vars.weeks.length;
      yield;
    }
  }

  *whenbackdropswitchesto3() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
    this.stage.watchers.water.visible = false;
    this.stage.watchers.amountdrunkw.visible = false;
    this.stage.watchers.waterpe.visible = false;
    this.stage.watchers.coffee.visible = false;
    this.stage.watchers.soda.visible = false;
    this.stage.watchers.drunkweek.visible = true;
    this.stage.watchers.avgounc.visible = true;
    this.stage.watchers.fulldaycount.visible = true;
  }
}
