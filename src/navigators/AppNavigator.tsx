import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from '../resources/constants';
import Home from '../appScreens/Home';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Screens.Home}>
      <Stack.Screen name={Screens.Home} component={Home} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
