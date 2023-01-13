import Data from "./Data";
export default class userPerformance {
  constructor(data) {
    this._userId = data.userId;
    this._1 = data.kind["1"];
    this._2 = data.kind["2"];
    this._3 = data.kind["3"];
    this._4 = data.kind["4"];
    this._5 = data.kind["5"];
    this._6 = data.kind["6"];
    this._data = data.data.map((element) => new Data(element));
  }

  get userId() {
    return this._userId;
  }

  get kind1() {
    return this._1;
  }

  get kind2() {
    return this._2;
  }

  get kind3() {
    return this._3;
  }

  get kind4() {
    return this._4;
  }

  get kind5() {
    return this._5;
  }

  get kind6() {
    return this._6;
  }

  get data() {
    return this._data;
  }
}
