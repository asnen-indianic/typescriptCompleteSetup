import React, {FC} from 'react';
import {View} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
let db = SQLite.openDatabase({name: 'TestDatabase.db'});
SQLite.enablePromise(true);

interface numbers {
  resolve: any;
}

export const CreateTable = async (_tableName: string, _params: string) => {
  console.log('params ', _tableName, _params);
  return new Promise<numbers | void>(async resolve => {
    try {
      (await db)
        .transaction(txn => {
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS ${_tableName}(${_params})`,
            [],
            function (tx, res) {
              console.log('tx and res ', tx, res);
              resolve();
            },
          );
        })
        .then(result => {
          console.log('tx and res ', result);

          resolve();
        });
    } catch (e) {
      console.log('error is = ', e);
      resolve();
    }
  });
};
