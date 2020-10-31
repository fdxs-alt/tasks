class IntelligentObject<T extends Object, U extends keyof T> {
  data: T;

  constructor(inititalValues: T) {
    this.data = new Proxy(inititalValues, {
      get: this.get,
      set: this.onChange,
    });
  }

  private get(target: T, property: U) {
    return target[property];
  }

  private onChange(target: T, property: U, value: T[U]) {
    if (!target.hasOwnProperty(property)) throw Error("Cannot add new keys");
    target[property] = value;
    return true;
  }
}

export default IntelligentObject;

export function IntelObj<T extends Object, U extends keyof T>(
  inititalValues: T
) {
  function onChange(target: T, property: U, value: T[U]) {
    if (!target.hasOwnProperty(property)) throw Error("Cannot add new keys");
    target[property] = value;
    return true;
  }
  function get(target: T, property: U) {
    return target[property];
  }

  return new Proxy(inititalValues, {
    set: onChange,
    get,
  });
}
