import * as React from 'react'
import {
  View,
  Text,
  Button,
  UIManager,
} from 'react-native'

import app from '../../App'
import myToast, { ToastExample } from '../../services/toastexample';

export default function Main(props) {
  let { navigation } = props;
  let toastValue = "";

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "My",
    });
  }, [navigation]);

  React.useEffect(() => {
    UIManager.measureLayout(
      100, 100,
      (msg) => {
        console.log(msg);
      },
      (x, y, width, height) => {
        console.log(x + ":" + y + ":" + width + ":" + height);
      }
    );

    const cBack = (res) => {
      console.log("listener callback", res.showsucc);
      toastValue = res?.showsucc || res;
    }

    const listener = app.addListener("showsucc", cBack);

    //做一些清除操作
    return function clear() {
      console.log("removeListener");
      app.removeListener(listener);
    }

  }, []);

  show = () => {
    app.emit("showsucc", "阳");
    myToast.show(toastValue);
  }

  showWithCback = () => {
    const errCback = (msg) => {
      console.warn(msg);
    }

    const succCback = (res) => {
      console.log(res);
    }

    myToast.showWithCback("Welcome!", ToastExample.SHORT, errCback, succCback);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{"My"}</Text>

      <View style={{marginBottom: 10}}>
        <Button title={"showWithCback"} onPress={showWithCback}/>
      </View>

      <Button title={"show"} onPress={show} />
    </View>
  );
}