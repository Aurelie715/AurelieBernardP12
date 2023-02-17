import Data from "./Data";
export default class UserPerformance {
  constructor(data) {
    this._userId = data.userId;
    this._kind = data.kind;
    this._data = data.data.map((element) => new Data(element));
  }

  get userId() {
    return this._userId;
  }

  get kind() {
    return this._kind;
  }

  get data() {
    return this._data;
  }
}
