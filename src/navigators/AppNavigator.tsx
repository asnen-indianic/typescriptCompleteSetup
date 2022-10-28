import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from '../resources/constants';
// import Home from '../appScreens/Home';
import ScreenSelect from '../appScreens/ScreenSelect';
import ProductsList from '../appScreens/ProductsList';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Screens.ScreenSelect}>
      <Stack.Screen name={Screens.ScreenSelect} component={ScreenSelect} />
      <Stack.Screen name={Screens.ProductsList} component={ProductsList} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
