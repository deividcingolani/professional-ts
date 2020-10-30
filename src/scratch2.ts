/* eslint-disable @typescript-eslint/no-unused-vars  */
class Foo {
  #name: string;

  constructor(rawName?: string) {
    this.#name = rawName ?? '(no name)';
  }

  log() {
    console.log(this.#name);
    const a = 2;
    const b = 2;
    if (a === b) console.log('is 2 ');
  }
}

export * as foo from './data/channels';
