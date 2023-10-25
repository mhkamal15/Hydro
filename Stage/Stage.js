/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 303.303305,
        y: 213.96396499999997
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: -192.66833000000003,
        y: 197.84021
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", {
        x: 303.30328499999996,
        y: 213.963935
      }),
      new Costume("backdrop4", "./Stage/costumes/backdrop4.svg", {
        x: 224.859895,
        y: 197.84021
      }),
      new Costume("backdrop5", "./Stage/costumes/backdrop5.svg", {
        x: 303.30330499999997,
        y: 213.96394500000002
      }),
      new Costume("backdrop6", "./Stage/costumes/backdrop6.svg", {
        x: 303.30329500000005,
        y: 213.963925
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.agree = 1;
    this.vars.email = 0;
    this.vars.water = 1;
    this.vars.amountdrunkw = 16;
    this.vars.waterpe = 12.8;
    this.vars.soda = 0;
    this.vars.coffee = 1;
    this.vars.customoz = 0;
    this.vars.week = 55;
    this.vars.drunkweek = 0;
    this.vars.avgounc = 0;
    this.vars.weeklistcount = 0;
    this.vars.fulldaycount = 0;
    this.vars.users = [];
    this.vars.emails = [
      "malekkamal885@gmail.com",
      "mALL",
      "mm",
      "m",
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "malekkamal885@gmail.com",
      0,
      0,
      "m",
      0,
      0,
      0,
      0,
      0,
      "malekkamal885@gmail.com",
      "malekkamal885@gmail.com",
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    this.vars.weeks = [];

    this.watchers.water = new Watcher({
      label: "Water",
      style: "large",
      visible: true,
      value: () => this.vars.water,
      x: 439,
      y: 31
    });
    this.watchers.amountdrunkw = new Watcher({
      label: "AmountDrunkW",
      style: "large",
      visible: true,
      value: () => this.vars.amountdrunkw,
      x: 369,
      y: -119
    });
    this.watchers.waterpe = new Watcher({
      label: "WaterPe",
      style: "large",
      visible: true,
      value: () => this.vars.waterpe,
      x: 503,
      y: -120
    });
    this.watchers.soda = new Watcher({
      label: "Soda",
      style: "large",
      visible: true,
      value: () => this.vars.soda,
      x: 439,
      y: -16
    });
    this.watchers.coffee = new Watcher({
      label: "Coffee",
      style: "large",
      visible: true,
      value: () => this.vars.coffee,
      x: 439,
      y: -62
    });
    this.watchers.drunkweek = new Watcher({
      label: "DrunkWeek",
      style: "large",
      visible: false,
      value: () => this.vars.drunkweek,
      x: 458,
      y: 56
    });
    this.watchers.avgounc = new Watcher({
      label: "AvgOunc",
      style: "large",
      visible: false,
      value: () => this.vars.avgounc,
      x: 458,
      y: 31
    });
    this.watchers.fulldaycount = new Watcher({
      label: "FullDayCount",
      style: "large",
      visible: false,
      value: () => this.vars.fulldaycount,
      x: 520,
      y: -4
    });
  }

  *whenGreenFlagClicked() {
    this.costume = "backdrop1";
  }
}
