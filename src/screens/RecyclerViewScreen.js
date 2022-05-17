import React, {useEffect} from 'react';
import {NativeModules, View} from 'react-native';

const {ListModule} = NativeModules;

const RecyclerViewScreen = () => {
  useEffect(() => {
    ListModule.showView();
  }, []);

  return <View />;
};

export default RecyclerViewScreen;
