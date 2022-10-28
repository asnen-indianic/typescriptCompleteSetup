import React, {FC, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {User} from '../../../interfaces';
import {navigate} from '../../../NavigationService';
import CustomButton from '../../components/CustomButton';
import {getUserData} from '../../networking/apiAction';
import {logout} from '../../redux/actions/appAction';
import {DataList} from './DataList';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#e5e5e5',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          console.log('clickinggg');
          dispatch(logout());
        }}>
        <Text>Home Page</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
