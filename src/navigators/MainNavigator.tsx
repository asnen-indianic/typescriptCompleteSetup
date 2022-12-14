import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {isReadyRef, navigationRef} from '../../NavigationService';
import Screens from '../resources/constants';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  const user = useSelector(state => state.authReducer?.user);
  console.log('is change user value', user);

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
