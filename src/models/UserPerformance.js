import Data from "./Data";
export default class UserPerformance {
  constructor(data) {
    this._userId = data.userId;
    this._kind = data.kind;
    // this._energy = data.kind["2"];
    // this._endurance = data.kind["3"];
    // this._strength = data.kind["4"];
    // this._speed = data.kind["5"];
    // this._intensity = data.kind["6"];
    this._data = data.data.map((element) => new Data(element));
  }

  get userId() {
    return this._userId;
  }

  get kind() {
    return this._kind;
  }

  // get energy() {
  //   return this._energy;
  // }

  // get endurance() {
  //   return this._endurance;
  // }

  // get strength() {
  //   return this._strength;
  // }

  // get speed() {
  //   return this._speed;
  // }

  // get intensity() {
  //   return this._intensity;
  // }

  get data() {
    return this._data;
  }
}
