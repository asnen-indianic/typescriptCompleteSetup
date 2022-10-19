import React, {FC, useEffect, useState} from 'react';
import axiosConfigure from './src/networking/axiosConfigure';
import SplashScreen from './src/SplashScreen';
const App: FC = () => {
  useEffect(() => {
    console.log('helo there');
    axiosConfigure();
  }, []);
  return <SplashScreen />;
};
export default App;
