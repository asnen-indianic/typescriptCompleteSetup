import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {isReadyRef, navigationRef} from '../../NavigationService';
import Screens from '../resources/constants';
import AppNavigator from './AppNavigator';
const Stack = createNativeStackNavigator();
const MainNavigator: FC = () => {
  return (
    <NavigationContainer
      onReady={() => (isReadyRef.current = true)}
      ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={AppNavigator} name={Screens.AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
