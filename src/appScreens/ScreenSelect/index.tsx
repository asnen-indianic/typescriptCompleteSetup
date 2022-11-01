import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../../redux/actions/appAction';
import Colors from '../../resources/colors';

const ScreenSelect = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => dispatch(logoutAction())}
        style={styles.logTouch}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logTouch: {marginTop: 80, marginLeft: 20},
  logout: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.bgColor,
  },
  navView: {
    backgroundColor: Colors.Gray90,
    marginTop: 20,
  },
  navTouch: {
    borderRadius: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
