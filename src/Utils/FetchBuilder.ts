type TMethod = "GET" | "POST" | "PUT" | "DELETE";
type TPolicy =
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";

type TMode = "cors" | "no-cors" | "same-origin";
type TCridentails = "same-origin" | "include" | "omit";
type TRedirect = "follow" | "manual" | "error";
interface IFetchBuilderOption {
  method: TMethod;
  cridentials: TCridentails;
  mode: TMode;
  headers: Headers;
  redirect: TRedirect;
  referrerPolicy: TPolicy;
}

class FetchBuilder {
  options: IFetchBuilderOption = {} as IFetchBuilderOption;
  url: string;

  constructor() {
    this.url = "";
    this.options = {
      cridentials: "include",
      method: "GET",
      mode: "cors",
      redirect: "follow",
      headers: new Headers(),
      referrerPolicy: "no-referrer",
    };
  }

  host(host: string) {
    this.url = host;
    return this;
  }

  cridentials(c: TCridentails) {
    this.options.cridentials = c;
    return this;
  }

  route(route: string) {
    this.url = this.url.concat(route);
    return this;
  }

  method(m: TMethod) {
    this.options.method = m;
    return this;
  }

  mode(m: TMode) {
    this.options.mode = m;
    return this;
  }

  policy(p: TPolicy) {
    this.options.referrerPolicy = p;
    return this;
  }

  redirect(r: TRedirect) {
    this.options.redirect = r;
    return this;
  }

  param(key: string, value: string) {
    this.url = this.url.concat(`${key}/${value}`);
    return this;
  }

  headers(headers: [{ name: string; value: string }]) {
    headers.forEach((header) =>
      this.options.headers.append(header.name, header.value)
    );

    return this;
  }

  build() {
    return new Promise(async (res, rej) => {
      try {
        const data = await fetch(this.url, this.options);
        return res(data.json());
      } catch (error) {
        rej(error);
      }
    });
  }
}
export default FetchBuilder;
