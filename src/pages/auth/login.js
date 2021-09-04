import * as React from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'
import app from '../../App';

export default function Login(props) {
  let { navigation } = props;

  let toHome = () => {
    app.emit("showsucc", "hahaha"); //此处发送事件时已经取消监听
    navigation.navigate("Home");
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{"Login"}</Text>
      <Button
        title="Go to Home"
        onPress={toHome}
      />
    </View>
  );
}