import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SectionList, StatusBar} from 'react-native';

const Item = ({item}) => {
  const {navigate} = useNavigation();

  const handleOnPress = () => {
    navigate(item.link);
  };

  return (
    <View style={styles.item}>
      <Button title={item.label} onPress={handleOnPress} />
    </View>
  );
};

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={SECTION_LIST_DATA}
      renderItem={({item}) => <Item item={item} />}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    marginVertical: 8,
  },
});

export default HomeScreen;

const SECTION_LIST_DATA = [
  {
    data: [
      {label: 'Flat List', link: 'FlatList'},
      {
        label: 'AndroidsRecyclerView',
        link: 'RecyclerView',
      },
      {
        label: 'Big List ',
        link: 'BigList',
      },
      {
        label: 'Scroll View ',
        link: 'ScrollView',
      },
    ],
  },
];
