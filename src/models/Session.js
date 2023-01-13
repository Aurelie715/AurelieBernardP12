export default class Session {
  constructor(data) {
    this._day = data.day;
    this._sessionLength = data.sessionLentgh;
  }

  get day() {
    return this._day;
  }

  get sessionLentgh() {
    return this._sessionLentgh;
  }
}
