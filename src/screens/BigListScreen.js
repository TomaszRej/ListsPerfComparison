import React from 'react';
import BigList from 'react-native-big-list';
import {DATA, ITEM_HEIGHT} from '../data/data';
import ListsItem from '../components/ListsItem';
import {StyleSheet} from 'react-native';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';

const BigListScreen = () => {
  const renderItem = ({item}) => <ListsItem item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <BigList data={DATA} renderItem={renderItem} itemHeight={ITEM_HEIGHT} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BigListScreen;
