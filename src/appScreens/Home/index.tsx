import React, {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {User} from '../../../interfaces';
import CustomButton from '../../components/CustomButton';
import {getUserData} from '../../networking/apiAction';
import {DataList} from './DataList';
const Home = () => {
  useEffect(() => {}, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#e5e5e5',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home Page</Text>
    </View>
  );
};
export default Home;
