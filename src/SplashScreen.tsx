import React, {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import MainNavigator from './navigators/MainNavigator';

const SplashScreen: FC = () => {
  const [isShowSplash, setIsShowSplash] = useState<Boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
  }, [isShowSplash]);
  const showSplash = () => {
    return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <Text>Splash Screen</Text>
      </View>
    );
  };
  return !!isShowSplash ? showSplash() : <MainNavigator />;
};
export default SplashScreen;
