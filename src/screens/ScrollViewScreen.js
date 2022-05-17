import React from 'react';
import ListsItem from '../components/ListsItem';
import {ScrollView} from 'react-native';
import {DATA} from '../data/data';

const ScrollViewScreen = () => {
  const renderItem = ({item}) => <ListsItem item={item} />;

  return (
    <ScrollView>
      {DATA.map(item => {
        return renderItem({item});
      })}
    </ScrollView>
  );
};

export default ScrollViewScreen;
