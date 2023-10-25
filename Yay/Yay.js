/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Yay extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Yay", "./Yay/costumes/Yay.svg", { x: 100, y: 100 }),
      new Costume("Yay2", "./Yay/costumes/Yay2.png", { x: 200, y: 200 }),
      new Costume("Yay3", "./Yay/costumes/Yay3.png", { x: 200, y: 200 }),
      new Costume("Yay4", "./Yay/costumes/Yay4.png", { x: 200, y: 200 }),
      new Costume("Yay5", "./Yay/costumes/Yay5.png", { x: 200, y: 200 }),
      new Costume("Yay6", "./Yay/costumes/Yay6.png", { x: 200, y: 200 }),
      new Costume("Yay7", "./Yay/costumes/Yay7.png", { x: 200, y: 200 }),
      new Costume("Yay8", "./Yay/costumes/Yay8.png", { x: 200, y: 200 }),
      new Costume("Yay9", "./Yay/costumes/Yay9.png", { x: 200, y: 200 }),
      new Costume("Yay10", "./Yay/costumes/Yay10.png", { x: 200, y: 200 }),
      new Costume("Yay11", "./Yay/costumes/Yay11.png", { x: 200, y: 200 }),
      new Costume("Yay12", "./Yay/costumes/Yay12.png", { x: 200, y: 200 }),
      new Costume("Yay13", "./Yay/costumes/Yay13.png", { x: 200, y: 200 }),
      new Costume("Yay14", "./Yay/costumes/Yay14.png", { x: 200, y: 200 }),
      new Costume("Yay15", "./Yay/costumes/Yay15.png", { x: 200, y: 200 }),
      new Costume("Yay16", "./Yay/costumes/Yay16.png", { x: 200, y: 200 }),
      new Costume("Yay17", "./Yay/costumes/Yay17.png", { x: 200, y: 200 }),
      new Costume("Yay18", "./Yay/costumes/Yay18.png", { x: 200, y: 200 }),
      new Costume("Yay19", "./Yay/costumes/Yay19.png", { x: 200, y: 200 }),
      new Costume("Yay20", "./Yay/costumes/Yay20.png", { x: 200, y: 200 }),
      new Costume("Yay21", "./Yay/costumes/Yay21.png", { x: 200, y: 200 }),
      new Costume("Yay22", "./Yay/costumes/Yay22.png", { x: 200, y: 200 }),
      new Costume("Yay23", "./Yay/costumes/Yay23.png", { x: 200, y: 200 }),
      new Costume("Yay24", "./Yay/costumes/Yay24.png", { x: 200, y: 200 }),
      new Costume("Yay25", "./Yay/costumes/Yay25.png", { x: 200, y: 200 }),
      new Costume("Yay26", "./Yay/costumes/Yay26.png", { x: 200, y: 200 }),
      new Costume("Yay27", "./Yay/costumes/Yay27.png", { x: 200, y: 200 }),
      new Costume("Yay28", "./Yay/costumes/Yay28.png", { x: 200, y: 200 }),
      new Costume("Yay29", "./Yay/costumes/Yay29.png", { x: 200, y: 200 }),
      new Costume("Yay30", "./Yay/costumes/Yay30.png", { x: 200, y: 200 }),
      new Costume("Yay31", "./Yay/costumes/Yay31.png", { x: 200, y: 200 }),
      new Costume("Yay32", "./Yay/costumes/Yay32.png", { x: 200, y: 200 }),
      new Costume("Yay33", "./Yay/costumes/Yay33.png", { x: 200, y: 200 }),
      new Costume("Yay34", "./Yay/costumes/Yay34.png", { x: 200, y: 200 }),
      new Costume("Yay35", "./Yay/costumes/Yay35.png", { x: 200, y: 200 }),
      new Costume("Yay36", "./Yay/costumes/Yay36.png", { x: 200, y: 200 }),
      new Costume("Yay37", "./Yay/costumes/Yay37.png", { x: 200, y: 200 }),
      new Costume("Yay38", "./Yay/costumes/Yay38.png", { x: 200, y: 200 }),
      new Costume("Yay39", "./Yay/costumes/Yay39.png", { x: 200, y: 200 }),
      new Costume("Yay40", "./Yay/costumes/Yay40.png", { x: 200, y: 200 }),
      new Costume("Yay41", "./Yay/costumes/Yay41.png", { x: 200, y: 200 }),
      new Costume("Yay42", "./Yay/costumes/Yay42.png", { x: 200, y: 200 }),
      new Costume("Yay43", "./Yay/costumes/Yay43.png", { x: 200, y: 200 }),
      new Costume("Yay44", "./Yay/costumes/Yay44.png", { x: 200, y: 200 }),
      new Costume("Yay45", "./Yay/costumes/Yay45.png", { x: 200, y: 200 }),
      new Costume("Yay46", "./Yay/costumes/Yay46.png", { x: 200, y: 200 }),
      new Costume("Yay47", "./Yay/costumes/Yay47.png", { x: 200, y: 200 }),
      new Costume("Yay48", "./Yay/costumes/Yay48.png", { x: 200, y: 200 }),
      new Costume("Yay49", "./Yay/costumes/Yay49.png", { x: 200, y: 200 }),
      new Costume("Yay50", "./Yay/costumes/Yay50.png", { x: 200, y: 200 }),
      new Costume("Yay51", "./Yay/costumes/Yay51.png", { x: 200, y: 200 }),
      new Costume("Yay52", "./Yay/costumes/Yay52.png", { x: 200, y: 200 }),
      new Costume("Yay53", "./Yay/costumes/Yay53.png", { x: 200, y: 200 }),
      new Costume("Yay54", "./Yay/costumes/Yay54.png", { x: 200, y: 200 }),
      new Costume("Yay55", "./Yay/costumes/Yay55.png", { x: 200, y: 200 }),
      new Costume("Yay56", "./Yay/costumes/Yay56.png", { x: 200, y: 200 }),
      new Costume("Yay57", "./Yay/costumes/Yay57.png", { x: 200, y: 200 }),
      new Costume("Yay58", "./Yay/costumes/Yay58.png", { x: 200, y: 200 }),
      new Costume("Yay59", "./Yay/costumes/Yay59.png", { x: 200, y: 200 }),
      new Costume("Yay60", "./Yay/costumes/Yay60.png", { x: 200, y: 200 }),
      new Costume("Yay61", "./Yay/costumes/Yay61.png", { x: 200, y: 200 }),
      new Costume("Yay62", "./Yay/costumes/Yay62.png", { x: 200, y: 200 }),
      new Costume("Yay63", "./Yay/costumes/Yay63.png", { x: 200, y: 200 }),
      new Costume("Yay64", "./Yay/costumes/Yay64.png", { x: 200, y: 200 }),
      new Costume("Yay65", "./Yay/costumes/Yay65.png", { x: 200, y: 200 }),
      new Costume("Yay66", "./Yay/costumes/Yay66.png", { x: 200, y: 200 }),
      new Costume("Yay67", "./Yay/costumes/Yay67.png", { x: 200, y: 200 }),
      new Costume("Yay68", "./Yay/costumes/Yay68.png", { x: 200, y: 200 }),
      new Costume("Yay69", "./Yay/costumes/Yay69.png", { x: 200, y: 200 }),
      new Costume("Yay70", "./Yay/costumes/Yay70.png", { x: 200, y: 200 }),
      new Costume("Yay71", "./Yay/costumes/Yay71.png", { x: 200, y: 200 }),
      new Costume("Yay72", "./Yay/costumes/Yay72.png", { x: 200, y: 200 }),
      new Costume("Yay73", "./Yay/costumes/Yay73.png", { x: 200, y: 200 }),
      new Costume("Yay74", "./Yay/costumes/Yay74.png", { x: 200, y: 200 }),
      new Costume("Yay75", "./Yay/costumes/Yay75.png", { x: 200, y: 200 }),
      new Costume("Yay76", "./Yay/costumes/Yay76.png", { x: 200, y: 200 }),
      new Costume("Yay77", "./Yay/costumes/Yay77.png", { x: 200, y: 200 }),
      new Costume("Yay78", "./Yay/costumes/Yay78.png", { x: 200, y: 200 }),
      new Costume("Yay79", "./Yay/costumes/Yay79.png", { x: 200, y: 200 }),
      new Costume("Yay80", "./Yay/costumes/Yay80.png", { x: 200, y: 200 }),
      new Costume("Yay81", "./Yay/costumes/Yay81.png", { x: 200, y: 200 }),
      new Costume("Yay82", "./Yay/costumes/Yay82.png", { x: 200, y: 200 }),
      new Costume("Yay83", "./Yay/costumes/Yay83.png", { x: 200, y: 200 }),
      new Costume("Yay84", "./Yay/costumes/Yay84.png", { x: 200, y: 200 }),
      new Costume("Yay85", "./Yay/costumes/Yay85.png", { x: 200, y: 200 }),
      new Costume("Yay86", "./Yay/costumes/Yay86.png", { x: 200, y: 200 }),
      new Costume("Yay87", "./Yay/costumes/Yay87.png", { x: 200, y: 200 }),
      new Costume("Yay88", "./Yay/costumes/Yay88.png", { x: 200, y: 200 }),
      new Costume("Yay89", "./Yay/costumes/Yay89.png", { x: 200, y: 200 }),
      new Costume("Yay90", "./Yay/costumes/Yay90.png", { x: 200, y: 200 }),
      new Costume("Yay91", "./Yay/costumes/Yay91.png", { x: 200, y: 200 }),
      new Costume("Yay92", "./Yay/costumes/Yay92.png", { x: 200, y: 200 }),
      new Costume("Yay93", "./Yay/costumes/Yay93.png", { x: 200, y: 200 }),
      new Costume("Yay94", "./Yay/costumes/Yay94.png", { x: 200, y: 200 }),
      new Costume("Yay95", "./Yay/costumes/Yay95.png", { x: 200, y: 200 }),
      new Costume("Yay96", "./Yay/costumes/Yay96.png", { x: 200, y: 200 }),
      new Costume("Yay97", "./Yay/costumes/Yay97.png", { x: 200, y: 200 }),
      new Costume("Yay98", "./Yay/costumes/Yay98.png", { x: 200, y: 200 }),
      new Costume("Yay99", "./Yay/costumes/Yay99.png", { x: 200, y: 200 }),
      new Costume("Yay100", "./Yay/costumes/Yay100.png", { x: 200, y: 200 }),
      new Costume("Yay101", "./Yay/costumes/Yay101.png", { x: 200, y: 200 }),
      new Costume("Yay102", "./Yay/costumes/Yay102.png", { x: 200, y: 200 }),
      new Costume("Yay103", "./Yay/costumes/Yay103.png", { x: 200, y: 200 }),
      new Costume("Yay104", "./Yay/costumes/Yay104.png", { x: 200, y: 200 }),
      new Costume("Yay105", "./Yay/costumes/Yay105.png", { x: 200, y: 200 }),
      new Costume("Yay106", "./Yay/costumes/Yay106.png", { x: 200, y: 200 }),
      new Costume("Yay107", "./Yay/costumes/Yay107.png", { x: 200, y: 200 }),
      new Costume("Yay108", "./Yay/costumes/Yay108.png", { x: 200, y: 200 }),
      new Costume("Yay109", "./Yay/costumes/Yay109.png", { x: 200, y: 200 }),
      new Costume("Yay110", "./Yay/costumes/Yay110.png", { x: 200, y: 200 }),
      new Costume("Yay111", "./Yay/costumes/Yay111.png", { x: 200, y: 200 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenbackdropswitchesto() {
    yield* this.wait(1);
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    while (true) {
      this.costumeNumber++;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.costume = "Yay";
    this.visible = false;
    this.effects.ghost = 100;
    this.stage.vars.agree = 0;
    this.costume = "No";
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
