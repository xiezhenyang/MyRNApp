import * as React from 'react'
import {
  View,
  Text,
  NativeModules,
  Button,
  NativeEventEmitter,
} from 'react-native'

const myCalendar = NativeModules.MyCalendarModule;
const eventEmitter = new NativeEventEmitter(myCalendar);

export default function Main(props) {
  let { navigation } = props;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "My",
    });
  }, [navigation]);

  React.useEffect(() => {
    const cBack = (res) => {
      console.log(res);
    }

    const subscription = eventEmitter.addListener(
      "SendEvent",
      cBack
    );

    return () => {
      subscription.remove();
    }
  }, []);

  const addEvent = () => {
    myCalendar.addEvent(
      'Birthday Party',
      {
        location: '4 Privet Drive, Surrey',
        time: new Date().valueOf(),
        name: "阳哥",
      }
    );

    console.log(myCalendar.firstDayOfTheWeek);
  }

  const findEvent = () => {
    myCalendar.findEvents((error, result) => {
      if(error) {
        console.error(error);
      } else {
        console.log(result);
      }
    })
  }

  const findEventWithPromise = async() => {
    try {
      const result = await myCalendar.findEventsWithResolver();

      console.log(result);
    } catch (e) {
      console.error(e);
    }
    
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{"My"}</Text>
      <Button title={"add event"} onPress={addEvent} />
      <Button title={"add with promise"} onPress={findEventWithPromise} />
    </View>
  );
}