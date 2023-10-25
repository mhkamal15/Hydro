import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Hydrologo from "./Hydrologo/Hydrologo.js";
import Hydrotagline from "./Hydrotagline/Hydrotagline.js";
import Hydromainmenu from "./Hydromainmenu/Hydromainmenu.js";
import Start from "./Start/Start.js";
import About from "./About/About.js";
import Credits from "./Credits/Credits.js";
import Backgroundgraphic from "./Backgroundgraphic/Backgroundgraphic.js";
import Backgroundgraphic2 from "./Backgroundgraphic2/Backgroundgraphic2.js";
import Backgroundgraphic3 from "./Backgroundgraphic3/Backgroundgraphic3.js";
import Infobox1 from "./Infobox1/Infobox1.js";
import Yay from "./Yay/Yay.js";
import Infobox1heading from "./Infobox1heading/Infobox1heading.js";
import Agree2disagree from "./Agree2disagree/Agree2disagree.js";
import Agree2disagree2 from "./Agree2disagree2/Agree2disagree2.js";
import Agree2disagree3 from "./Agree2disagree3/Agree2disagree3.js";
import Heading from "./Heading/Heading.js";
import Addwater from "./Addwater/Addwater.js";
import Watericon from "./Watericon/Watericon.js";
import Milestone from "./Milestone/Milestone.js";
import Sodaicon from "./Sodaicon/Sodaicon.js";
import Addsoda from "./Addsoda/Addsoda.js";
import Coffeeicon from "./Coffeeicon/Coffeeicon.js";
import Addcoffee from "./Addcoffee/Addcoffee.js";
import Customentry from "./Customentry/Customentry.js";
import Stats from "./Stats/Stats.js";
import Back from "./Back/Back.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Hydrologo: new Hydrologo({
    x: 0,
    y: 25,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Hydrotagline: new Hydrotagline({
    x: -2,
    y: -47,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 5
  }),
  Hydromainmenu: new Hydromainmenu({
    x: 0,
    y: 82,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 6
  }),
  Start: new Start({
    x: 0,
    y: 2,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 45,
    visible: false,
    layerOrder: 7
  }),
  About: new About({
    x: 0,
    y: -63,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 45,
    visible: false,
    layerOrder: 8
  }),
  Credits: new Credits({
    x: 0,
    y: -128,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 45,
    visible: false,
    layerOrder: 9
  }),
  Backgroundgraphic: new Backgroundgraphic({
    x: 0,
    y: -80.00359847715782,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Backgroundgraphic2: new Backgroundgraphic2({
    x: -350,
    y: -100,
    direction: 75,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Backgroundgraphic3: new Backgroundgraphic3({
    x: 350,
    y: -80,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Infobox1: new Infobox1({
    x: -77.00240967517007,
    y: 2.001349428934187,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 10
  }),
  Yay: new Yay({
    x: 144.00563863989797,
    y: 131.00430532088527,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 62,
    size: 30,
    visible: false,
    layerOrder: 12
  }),
  Infobox1heading: new Infobox1heading({
    x: -56.99990361299322,
    y: 124.00523706943507,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 150,
    visible: false,
    layerOrder: 11
  }),
  Agree2disagree: new Agree2disagree({
    x: -210.00479525358844,
    y: -117.00459448422828,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  Agree2disagree2: new Agree2disagree2({
    x: -26.026002662155207,
    y: -117.30311607115694,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  Agree2disagree3: new Agree2disagree3({
    x: -130.03917774272114,
    y: -155.57769788912537,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 70,
    visible: false,
    layerOrder: 25
  }),
  Heading: new Heading({
    x: -10.000240967517005,
    y: 94.00044980964473,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 16
  }),
  Addwater: new Addwater({
    x: 54.001180740833334,
    y: 20.000867490029112,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 21
  }),
  Watericon: new Watericon({
    x: -82.99992770974488,
    y: 20.0018634970996,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 25,
    visible: true,
    layerOrder: 17
  }),
  Milestone: new Milestone({
    x: -100,
    y: 160,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 15
  }),
  Sodaicon: new Sodaicon({
    x: -81.60887057026416,
    y: -35.38021114345346,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 25,
    visible: true,
    layerOrder: 23
  }),
  Addsoda: new Addsoda({
    x: 54,
    y: -30,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 20
  }),
  Coffeeicon: new Coffeeicon({
    x: -66.23061597857665,
    y: -77,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 22
  }),
  Addcoffee: new Addcoffee({
    x: 54,
    y: -80,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 19
  }),
  Customentry: new Customentry({
    x: -216.7298349366472,
    y: -87.69148310404152,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 12,
    visible: true,
    layerOrder: 24
  }),
  Stats: new Stats({
    x: -175,
    y: -88,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 12,
    visible: true,
    layerOrder: 26
  }),
  Back: new Back({
    x: 210,
    y: 148,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 18
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
