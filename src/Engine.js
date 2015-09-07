import GamePad from "./GamePad"

export default class Engine {

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.gamepad = new GamePad();

    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);

    document.body.appendChild(canvas);
    document.body.style.backgroundColor = "#000";
    document.body.style.align = "center";
    canvas.style.marginLeft = "auto";
    canvas.style.marginRight = "auto";
    canvas.style.display = "block";

    this.canvas = canvas;
    this.ctx = ctx;
    this.updater = this.update.bind(this);
    this.lastTime = performance.now();
  }

  update(timestamp) {
    requestAnimationFrame(this.updater);
    this.timestamp = timestamp;
    this.state.update(timestamp);
    this.lastTime = timestamp;
  }

  start() {
    requestAnimationFrame(this.updater);
  }

  setState(stateId) {
    this.state = this.gameStates[stateId];
    this.state.init();
  }

}