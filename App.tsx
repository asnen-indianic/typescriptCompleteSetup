import React, {FC, useEffect, useState} from 'react';
import axiosConfigure from './src/networking/axiosConfigure';
import SplashScreen from './src/SplashScreen';
import store from './src/redux/reducers/index';
import {Provider} from 'react-redux';
const App: FC = () => {
  useEffect(() => {
    console.log('helo there');
    axiosConfigure();
  }, []);
  return (
    <Provider store={store}>
      <SplashScreen />
    </Provider>
  );
};
export default App;
