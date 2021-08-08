import * as React from 'react'
import {
  View,
  Text,
} from 'react-native'

export default function Main(props) {
  let { navigation } = props;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Home",
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{"Home"}</Text>
    </View>
  );
}