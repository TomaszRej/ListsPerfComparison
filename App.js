import React from 'react';
import FlatListScreen from './src/screens/FlatListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import BigListScreen from './src/screens/BigListScreen';
import RecyclerViewScreen from './src/screens/RecyclerViewScreen';
import ScrollViewScreen from './src/screens/ScrollViewScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FlatList" component={FlatListScreen} />
        <Stack.Screen name="BigList" component={BigListScreen} />
        <Stack.Screen name="RecyclerView" component={RecyclerViewScreen} />
        <Stack.Screen name="ScrollView" component={ScrollViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
