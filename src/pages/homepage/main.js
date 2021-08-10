import * as React from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'

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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{"Home"}</Text>
      <Button title={"goto TextInput"} onPress={toMyInput}/>
    </View>
  );
}