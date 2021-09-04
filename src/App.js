import React from 'react'
import {
  NativeEventEmitter
} from 'react-native'

class App {
  constructor() {
    this.init();
  }

  init() {
    this.eventEmitter = new NativeEventEmitter();
  }

  addListener(evt: string, func: Function) {
    const listener = this.eventEmitter.addListener(evt, func);
    return listener;
  }

  removeListener(listener: EmitterSubscription) {
    this.eventEmitter.removeSubscription(listener);
  }

  emit(evt: string, ...args: any[]) {
    this.eventEmitter.emit(evt, ...args);
  }
}

const app = new App();

export default app;