import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, Alert, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Colors from '../../resources/colors';
import {Button, CustomInput} from '../../components';
import Images from '../../resources/images';
import {CreateTable} from '../../../Database';
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

interface Props {
  navigation: any;
}

const Login = ({navigation}: Props) => {
  useEffect(() => {
    CreateTable(
      'loginTable',
      `email VARCHAR(255),
        password VARCHAR(255)`,
    );
  });
  const forEmail = React.useRef<any>();
  const forPass = React.useRef<any>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validation = () => {
    if (!email) {
      Alert.alert('Alert', 'Enter you email-address');
      return false;
    } else if (!reg.test(email)) {
      Alert.alert('Alert', 'Enter a valid email-address');
    } else if (!password) {
      Alert.alert('Alert', 'Enter you password');
      return false;
    } else if (password.length < 6) {
      Alert.alert('Alert', 'Password should be minimum 6 characters');
    } else return true;
  };
  const login = () => {
    if (!!validation()) {
      console.log('login for thiss ');
    }
  };
  const loginShow = (typeParam: any) => {
    return (
      <View style={{marginTop: 75}}>
        <Button
          buttonStyle={{backgroundColor: '#00FA9A'}}
          onPress={() => {
            login();
          }}
          label={typeParam}
          labelStyle={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}
        />
      </View>
    );
  };

  const signupShow = (typeParam: any) => {
    return (
      <View style={{marginTop: 10}}>
        <Button
          buttonStyle={{
            backgroundColor: Colors.white,
            borderWidth: 1,
            borderColor: Colors.bgColor,
          }}
          onPress={() => {
            navigation.navigate('Signup');
          }}
          label={typeParam}
          labelStyle={{fontSize: 18, color: Colors.bgColor, fontWeight: 'bold'}}
        />
      </View>
    );
  };

  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome!</Text>
        <View style={styles.radiousView}>
          <CustomInput
            autoFocus={true}
            title={'Email'}
            inputRef={forEmail}
            keyboardType={'email-address'}
            onSubmitEditing={() => {
              console.log('done from ej'), forPass.current.focus();
            }}
            img={Images.email}
            value={email}
            placeholder="Your Email"
            placeholderTextColor="gray"
            returnKeyType="next"
            onChangeText={email => {
              setEmail(email);
            }}
          />
          <CustomInput
            title={'Password'}
            secureTextEntry={true}
            inputRef={forPass}
            img={Images.user}
            returnKeyType={'done'}
            value={password}
            placeholder="Your Password"
            placeholderTextColor="gray"
            onChangeText={password => {
              setPassword(password);
            }}
            onSubmitEditing={() => {
              login();
            }}
          />
          {loginShow('Login')}
          {signupShow('Signup')}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  textShow: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
    height: 120,
    width: 200,
    alignSelf: 'center',
    marginTop: 60,
    backgroundColor: Colors.darkwhite,
  },
  radiousView: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  heading: {color: Colors.gray, fontWeight: 'bold', fontSize: 18},
  welcome: {
    padding: 20,
    marginTop: 100,
    fontSize: 24,
    color: Colors.white,
    fontWeight: 'bold',
  },
  dontA: {alignSelf: 'center', marginTop: 10, color: Colors.gray},
  container: {flex: 1, backgroundColor: Colors.bgColor},
});
