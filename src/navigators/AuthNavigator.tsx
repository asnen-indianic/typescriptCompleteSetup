import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from '../resources/constants';
import Home from '../appScreens/Home';
import Login from '../authScreens/Login';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Screens.Login}>
      <Stack.Screen name={Screens.Login} component={Login} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
