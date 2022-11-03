import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Colors from '../../resources/colors';
import {Button, CustomInput} from '../../components';
import Images from '../../resources/images';
import {CreateTable} from '../../../Database';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../../redux/actions/authAction';
import {addEditDeleteTodo} from '../../redux/reducers/todos';
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

interface Props {
  navigation: any;
}

const Login = ({navigation}: Props) => {
  // const dispatch = useDispatch();
  const dispatch: any = useDispatch();

  const {todos} = useSelector(state => state.todos);
  // const {testing} = useSelector(state => state.todos);

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

  const [todo, setTodo] = useState('');

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
      console.log('cccccc');
      const loginData = {
        email,
        password,
      };
      dispatch(loginAction(loginData));
      // console.log('login for thiss ');
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
            title={'Add a Todo'}
            img={Images.user}
            returnKeyType={'done'}
            value={todo}
            placeholder="Your todo here"
            placeholderTextColor="gray"
            onChangeText={todo => {
              setTodo(todo);
            }}
            onSubmitEditing={() => {
              login();
            }}
          />
          {/* <CustomInput
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
          /> */}
          {/* {loginShow('Login')}
          {signupShow('Signup')} */}
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 60,
              marginTop: 30,
              marginHorizontal: 20,
              backgroundColor: 'red',
            }}
            onPress={() => {
              if (!!todo) {
                dispatch(addEditDeleteTodo(todo));
                setTodo('');
              } else {
                Alert.alert('Please add todo');
              }

              console.log('Click onpress');
            }}>
            <Text>Add Todo</Text>
          </TouchableOpacity>
          <Text style={{marginLeft: 20, marginTop: 20}}>
            Here our reducer todo : {todos}
          </Text>
          <Text style={{marginLeft: 20, marginTop: 20}}>
            {/* Here is testing todo : {testing} */}
          </Text>
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
    backgroundColor: Colors.Gray90,
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
