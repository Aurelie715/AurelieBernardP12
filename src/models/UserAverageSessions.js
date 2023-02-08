import Session from "./Session";

export default class UserAverageSessions {
  constructor(data) {
    this._userId = data.userId;
    this._sessions = data.sessions.map((element) => new Session(element));
  }

  get userId() {
    return this._userId;
  }

  get sessions() {
    return this._sessions;
  }
}
