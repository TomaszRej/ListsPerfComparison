import React from 'react';
import {FlatList, StyleSheet, SafeAreaView} from 'react-native';
import ListsItem from '../components/ListsItem';
import {DATA, ITEM_HEIGHT} from '../data/data';

const FlatListScreen = () => {
  const renderItem = ({item}) => <ListsItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FlatListScreen;
