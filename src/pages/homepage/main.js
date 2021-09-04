import * as React from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'

import myPick from '../../services/pickimage';

export default function Main(props) {
  let { navigation } = props;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Home",
    });
  }, [navigation]);

  let toMyInput = () => {
    navigation.navigate("MyInput");
  }

  const onPickImage = () => {
    myPick.pickImage().then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.warn(err);
    });
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{"Home"}</Text>
      <Button title={"goto TextInput"} onPress={toMyInput}/>
      <Button title={"pick image"} onPress={onPickImage}/>
    </View>
  );
}