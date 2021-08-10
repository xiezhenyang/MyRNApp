import React, { useState } from 'react';
import {
  Text,
  View,
  Platform,
  TextInput,
  StyleSheet,
  SectionList,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

function MyInput(props) {
  console.log("platform version:", Platform.Version);

  let _renderItem = ({ item }) => {
    return <Text style={styles.item}>{item}</Text>;
  }

  let _renderSectionHeader = ({ section }) => {
    return <Text style={styles.sectionHeader}>{section.title}</Text>;
  }

  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
          { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
        ]}
        renderItem={_renderItem}
        renderSectionHeader={_renderSectionHeader}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default MyInput;