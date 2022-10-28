import {LOGIN_ACTION} from '../types';

import SQLite from 'react-native-sqlite-storage';
import {Alert} from 'react-native';
import strings from '../../resources/strings';
let db = SQLite.openDatabase({name: 'TestDatabase.db'});

export const checkLoginTable = async () => {
  return new Promise(async (resolve, reject) => {
    (await db).transaction(tx => {
      tx.executeSql(`select * from loginTable`, [], async (tx, result) => {
        var temp = [];
        for (let i = 0; i < result.rows.length; i++) {
          temp.push(result.rows.item(i));
        }
        resolve(temp);
        console.log('loginTable response ', temp);
      });
    });
  });
};

export const signupDatas = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      (await db)
        .transaction(tx => {
          tx.executeSql(`select * from signupTable`, [], async (tx, result) => {
            var temp = [];
            for (let i = 0; i < result.rows.length; i++) {
              temp.push(result.rows.item(i));
            }
            resolve(temp);
            console.log('tempiinginggg ', temp);
          });
        })
        .catch(www => {
          console.log('wwwrrrrrisss', www);
        });
    } catch (e: any) {
      Alert.alert('sign up error ', e);
      console.log('errorrrr e', e);
    }
  });
};
export const loginAction =
  (params: {email: string; password: string}) => async (dispatch: any) => {
    console.log('calling params', params);
    return new Promise(async () => {
      try {
        (await db)
          .transaction(tx => {
            tx.executeSql(
              `select * from signupTable`,
              [],
              async (tx, result) => {
                var temp = [];
                for (let i = 0; i < result.rows.length; i++) {
                  temp.push(result.rows.item(i));
                }
                const signs = await signupDatas();
                console.log('caling mathod ', signs);
                const somes = signs.some((item: {email: string}) => {
                  return item.email === params.email;
                });
                if (!!somes) {
                  const somes = signs.some((item: {password: string}) => {
                    return item.password === params.password;
                  });
                  console.log('some pass is ', somes);
                  dispatch(loginInsertTable(params));
                  dispatch({
                    type: LOGIN_ACTION,
                    payload: params,
                  });
                } else {
                  Alert.alert(strings.notRegister);
                }
                console.log('somes email is ', somes);
              },
            );
          })
          .catch(errorr => {
            Alert.alert(strings.notRegister);
            console.log('errorrrrrrisss', errorr);
          });
      } catch (e) {
        console.log('error not find table', e);
      }
    });
  };

export const signupInsertTable =
  (params: {name: string; email: string; password: string}) =>
  async (dispatch: any) => {
    return new Promise<void>(async resolve => {
      (await db).transaction(tx => {
        tx.executeSql(
          `insert into signupTable (name,email,password) VALUES(?,?,?)`,
          [params.name, params.email, params.password],
          async (tx, result) => {
            var temp = [];
            for (let i = 0; i < result.rows.length; i++) {
              temp.push(result.rows.item(i));
            }
            dispatch({
              type: LOGIN_ACTION,
              payload: params,
            });
            console.log('login insert table is ', temp);
            resolve();
          },
        );
      });
    });
  };

export const loginInsertTable =
  (params: {name: string; email: string; password: string}) =>
  async dispatch => {
    console.log('parsms to be ', params);

    return new Promise<void>(async resolve => {
      (await db).transaction(tx => {
        tx.executeSql(
          `insert into loginTable (email,password) VALUES(?,?)`,
          [params.email, params.password],
          async (tx, result) => {
            var temp = [];
            for (let i = 0; i < result.rows.length; i++) {
              temp.push(result.rows.item(i));
            }
            console.log('login insedrt is ', temp);
            dispatch({
              type: LOGIN_ACTION,
              payload: params,
            });

            console.log('login insert table is ', temp);
            resolve();
          },
        );
      });
    });
  };

export const signupAction =
  (params: {name: string; email: string; password: string}) =>
  async (dispatch: any) => {
    console.log('er2323ror to findingg ', params);
    const signs = await signupDatas();
    console.log('s212121ignupadction resposne ', signs);
    if (signs?.length > 0) {
      const somes = signs.some((item: {email: string}) => {
        return item.email === params.email;
      });
      console.log('somgsss is ', somes);
      if (!!somes) {
        Alert.alert('', 'This account is already registerd.');
      } else {
        dispatch(loginInsertTable(params));
        dispatch(signupInsertTable(params));
        dispatch({
          type: LOGIN_ACTION,
          payload: params,
        });
      }
      console.log('somes email is ', somes);
    } else {
      console.log('else casseing is ', params);
      dispatch(loginInsertTable(params));
      dispatch(signupInsertTable(params));
    }
  };
