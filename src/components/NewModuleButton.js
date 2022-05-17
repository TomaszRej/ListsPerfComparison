import React from 'react';
import {NativeModules, Button} from 'react-native';

const {ListModule} = NativeModules;

const NewModuleButton = () => {
  const onPress = () => {
    // console.warn(CalendarModule);
    // ListModule.createCalendarEvent('testName123', 'testLocation123');
    ListModule.showView();
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default NewModuleButton;
