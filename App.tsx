import React, {FC, useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {getUserData} from './src/networking/apiAction';
import axiosConfigure from './src/networking/axiosConfigure';
import SplashScreen from './src/SplashScreen';
import {User} from './interfaces';
const App: FC = () => {
  useEffect(() => {
    axiosConfigure();
    getUserData((callback: []) => {
      console.log('resposne', callback);
    });
  }, []);
  return <SplashScreen />;
};
export default App;
