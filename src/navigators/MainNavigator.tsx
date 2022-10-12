import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import {isReadyRef, navigationRef} from '../../NavigationService';
import Screens from '../resources/constants';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
const Stack = createNativeStackNavigator();
const MainNavigator: FC = () => {
  const [user, setUser] = useState('');
  return (
    <NavigationContainer
      onReady={() => (isReadyRef.current = true)}
      ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!!user ? (
          <Stack.Screen component={AppNavigator} name={Screens.AppNavigator} />
        ) : (
          <Stack.Screen
            component={AuthNavigator}
            name={Screens.AuthNavigator}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
