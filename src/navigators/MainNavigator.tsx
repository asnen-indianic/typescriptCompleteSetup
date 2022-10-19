import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC, useEffect, useState} from 'react';
import {isReadyRef, navigationRef} from '../../NavigationService';
import {checkUser} from '../networking/apiAction';
import Screens from '../resources/constants';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  const [user, setUser] = useState<any>([]);
  useEffect(() => {
    checkUser().then(res => {
      console.log('res iss ', res);
      setUser(res);
    });
  }, []);

  return (
    <NavigationContainer
      onReady={() => (isReadyRef.current = true)}
      ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user.length > 0 ? (
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
