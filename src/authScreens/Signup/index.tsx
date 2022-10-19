import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, Alert, StatusBar} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, CustomInput} from '../../components';
import Images from '../../resources/images';
import Colors from '../../resources/colors';
import {CreateTable} from '../../../Database';
import {insertSignupData} from '../../networking/apiAction';
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
interface Props {
  navigation: any;
}
interface paramsSignup {
  name: string;
  email: string;
  password: string;
}

const Signup = ({navigation}: Props) => {
  useEffect(() => {
    CreateTable(
      'signupTable',
      `name VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255)`,
    );
    CreateTable(
      'loginTable',
      `email VARCHAR(255),
        password VARCHAR(255)`,
    );
  });
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRepassword] = useState('');

  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const passRef = React.useRef();
  const rePassRef = React.useRef();

  const validation = () => {
    if (!name) {
      Alert.alert('Alert', 'Enter you name');
      return false;
    }
    if (!email) {
      Alert.alert('Alert', 'Enter you email-address');
      return false;
    } else if (!reg.test(email)) {
      Alert.alert('Alert', 'Enter a valid email-address');
    } else if (!password) {
      Alert.alert('Alert', 'Enter you password');
      return false;
    } else if (!rePassword) {
      Alert.alert('Alert', 'Re-Enter your password');
      return false;
    } else if (password.length < 6 || rePassword.length < 6) {
      Alert.alert('Alert', 'Password should be minimum 6 characters');
      return false;
    } else if (password !== rePassword) {
      Alert.alert('Alert', 'Password should be same');
      return false;
    } else return true;
  };
  const buttonShow = (typeParam: any) => {
    return (
      <View style={{marginTop: 0}}>
        <Button
          buttonStyle={{
            backgroundColor: Colors.white,
            borderWidth: 1,
            borderColor: Colors.bgColor,
          }}
          onPress={() => {
            if (typeParam == 'Login') {
              navigation.navigate('Login');
            } else {
              console.log('google login');
            }
          }}
          label={typeParam}
          labelStyle={{fontSize: 18, color: Colors.bgColor, fontWeight: 'bold'}}
        />
      </View>
    );
  };
  const signup = async () => {
    var data;
    data = {
      name,
      email,
      password,
    };
    if (!!validation()) {
      const vars = await insertSignupData(data);
      console.log('varisss ', vars);
      if (!!vars) {
        Alert.alert('', 'This email address is already exist in the database');
      } else {
        console.log('safe mode we can insert more data');
      }
    }
  };
  const signupView = (typeParam: any) => {
    return (
      <View style={{marginTop: 10}}>
        <StatusBar backgroundColor={Colors.bgColor} />
        <Button
          buttonStyle={{backgroundColor: '#00FA9A'}}
          onPress={() => {
            signup();
          }}
          label={typeParam}
          labelStyle={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}
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
            onSubmitEditing={() => {
              emailRef?.current?.focus();
            }}
            title={'Name'}
            img={Images.user}
            value={name}
            placeholder="Your Name"
            placeholderTextColor="gray"
            onChangeText={name => {
              setName(name);
            }}
          />
          <CustomInput
            inputRef={emailRef}
            onSubmitEditing={() => {
              passRef.current?.focus();
            }}
            title={'Email'}
            img={Images.email}
            value={email}
            placeholder="Your Email"
            placeholderTextColor="gray"
            onChangeText={email => {
              setEmail(email);
            }}
          />
          <CustomInput
            inputRef={passRef}
            onSubmitEditing={() => {
              rePassRef?.current?.focus();
            }}
            secureTextEntry={true}
            title={'Password'}
            img={Images.password}
            value={password}
            placeholder="Your Password"
            placeholderTextColor="gray"
            onChangeText={password => {
              setPassword(password);
            }}
          />
          <CustomInput
            inputRef={rePassRef}
            onSubmitEditing={() => {
              signup();
            }}
            secureTextEntry={true}
            title={'Password'}
            img={Images.password}
            value={rePassword}
            placeholder="re-enter password"
            placeholderTextColor="gray"
            onChangeText={Repassword => {
              setRepassword(Repassword);
            }}
          />
          {signupView('Signup')}
          {buttonShow('Login')}
          {buttonShow('Google Login')}
          {/* {buttonShow('Login')} */}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Signup;

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
