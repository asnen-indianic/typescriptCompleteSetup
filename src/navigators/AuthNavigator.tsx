import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from '../resources/constants';
import Login from '../authScreens/Login';
import Signup from '../authScreens/Signup';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Screens.Login}>
      <Stack.Screen name={Screens.Login} component={Login} />
      <Stack.Screen name={Screens.Signup} component={Signup} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
