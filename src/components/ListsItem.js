import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ListsItem = ({item}) => (
  <View style={styles.mealContainer}>
    <Image
      style={styles.logo}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
    />
    <View style={styles.meal}>
      <Text>{item.title}</Text>
    </View>
    <View style={styles.meal}>
      <Text>{item.name}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },

  mealContainer: {},
  meal: {
    padding: 20,
    backgroundColor: 'gray',
  },
});

export default ListsItem;
