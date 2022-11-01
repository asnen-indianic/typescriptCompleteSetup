import {LOGIN_ACTION} from '../types';
import {checkLoginTable} from './authAction';
import SQLite from 'react-native-sqlite-storage';

let db = SQLite.openDatabase({name: 'TestDatabase.db'});

export const appStartAction = () => async (dispatch: any) => {
  const signs = await checkLoginTable();
  console.log('caling mathod ', signs);
  if (signs?.length > 0) {
    dispatch({
      type: LOGIN_ACTION,
      payload: signs[0],
    });
  }
};
export const logoutAction = () => async dispatch => {
  console.log('logout...');
  return new Promise(async (resolve, reject) => {
    (await db).transaction(tx => {
      tx.executeSql(`delete from loginTable`, [], async (tx, result) => {
        console.log('login delelete succes', result);
        dispatch({
          type: LOGIN_ACTION,
          payload: null,
        });
      });
    });
  });
};
