import { NativeEventEmitter, NativeModules } from "react-native"

const _eventTask = [];
const ToastExample = NativeModules.ToastExample;
const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample);

class MyToast {

  show(message: string, duration = ToastExample.SHORT | ToastExample.LONG) {
    ToastExample.show(message, duration);
  }

  showWithCback(message: string, duration = ToastExample.SHORT | ToastExample.LONG, errCback: Function, succCback: Function) {
    ToastExample.showWithCback(message, duration, errCback, succCback);
  }

  addListener(evt: string, func: Function) {
    const listener = eventEmitter.addListener(evt, func);
    _eventTask.push(listener);

    return listener;
  }

  removeListener(listener: EmitterSubscription) {
    const index = _eventTask.indexOf(listener);

    if(index >= 0) {
      _eventTask.splice(index, 1);
      listener.remove();
    }
  }

}

const myToast = new MyToast();

export default myToast;
export {
  ToastExample,
  myToast,
}

