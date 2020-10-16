class EventEmmiter {
  private _events: any;

  constructor() {
    this._events = {};
  }

  on(name: string, listener: Function) {
    if (!this._events[name]) {
      this._events[name] = [];
    }

    this._events[name].push(listener);
  }

  emit(name: string, data?: any) {
    if (!this._events[name]) {
      throw new Error(`Can't emit an event. Event "${name}" doesn't exits.`);
    }

    const fireCallbacks = (callback: CallableFunction) => {
      if (data) {
        callback(data);
      } else {
        callback();
      }
    };

    this._events[name].forEach(fireCallbacks);
  }

  remove(name: string, listenerToRemove: Function) {
    if (!this._events[name]) {
      throw new Error(`Can't remove an event. Event "${name}" doesn't exits.`);
    }

    this._events[name] = this._events[name].filter(
      (listener: Function) => listener !== listenerToRemove
    );
  }
}
export default EventEmmiter;
