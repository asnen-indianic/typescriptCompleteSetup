import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {navigate} from '../../../NavigationService';
import Colors from '../../resources/colors';
import Screens from '../../resources/constants';

const selectNavigation = (screenName: any) => {
  navigate(screenName, {});
};
const logout = () => {
  return (
    <TouchableOpacity
      onPress={() => console.log('logoutttt')}
      style={styles.logTouch}>
      <Text style={styles.logout}>Logout</Text>
    </TouchableOpacity>
  );
};
const cardView = (key: any, screenName: any) => {
  return (
    <View style={styles.navView}>
      <TouchableOpacity
        onPress={() => {
          selectNavigation(screenName);
        }}
        style={styles.navTouch}>
        <Text style={styles.touchTitle}>{key}</Text>
      </TouchableOpacity>
    </View>
  );
};

const ScreenSelect = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.Gray90} />
      {logout()}
      {cardView('Add To Cart Feature', Screens.ProductsList)}
      {/* {cardView('Firebase Remote', Screens.FBConfig)}
      {cardView('Add post on firebase database', Screens.AddPost)}
      {cardView('Chat', Screens.Chat)} */}
    </View>
  );
};
export default ScreenSelect;
const styles = StyleSheet.create({
  touchTitle: {
    marginVertical: 10,
    marginLeft: 10,
    color: Colors.bgColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.Gray90,
  },
  logTouch: {marginTop: 80, marginLeft: 20},
  logout: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.bgColor,
  },
  navView: {
    backgroundColor: Colors.Gray90,
    // flex: 1,
    marginTop: 20,
  },
  navTouch: {
    borderRadius: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
