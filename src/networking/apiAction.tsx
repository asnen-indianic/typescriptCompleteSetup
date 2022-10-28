import Api from './api';
import SQLite from 'react-native-sqlite-storage';
let db = SQLite.openDatabase({name: 'TestDatabase.db'});
// SQLite.enablePromise(true);
import {signups} from '../../interfaces';

export const getUserData = (callback: (arg0: any) => void) => {
  console.log('yes ite');
  Api.userData().then(response => {
    console.log('callback is ', response);
    callback(response);
  });
};
// export const checkUser = async () => {
//   return new Promise(async (resolve, reject) => {
//     (await db).transaction(tx => {
//       tx.executeSql(`select * from loginTable`, [], async (ts, result) => {
//         var temp = [];
//         for (let i = 0; i < result.rows.length; i++) {
//           temp.push(result.rows.item(i));
//         }
//         console.log('temp is logintable ', temp);
//         resolve(temp);
//       });
//     });
//   });
// };
// export const insertSignupData = (signups: signups) => {
//   return new Promise(async (resolve, reject) => {
//     (await db).transaction(tx => {
//       tx.executeSql(`select * from signupTable`, [], async (tx, result) => {
//         var tem = [];
//         for (let i = 0; i < result.rows.length; i++) {
//           tem.push(result.rows.item(i));
//         }
//         var temps: boolean[] = [];
//         tem.map((item: {email: string}) => {
//           if (item.email == signups.email) {
//             temps.push(true);
//           } else {
//             temps.push(false);
//           }
//         });
//         if (temps.includes(true)) {
//           resolve(true);
//         } else {
//           tx.executeSql(
//             `INSERT INTO signupTable (name,email,password) VALUES (?,?,?)`,
//             [signups.name, signups?.email, signups?.password],
//             (tx, results) => {
//               var temp = [];
//               for (let i = 0; i < results.rows.length; i++) {
//                 temp.push(results.rows.item(i));
//               }
//             },
//           );
//           tx.executeSql(
//             `INSERT INTO loginTable (email,password) VALUES (?,?)`,
//             [signups.email, signups.password],
//             (_tx, results) => {
//               console.log('sdfsdfsd', results);
//             },
//           ),
//             resolve(false);
//         }
//       });
//     });
//   });
// };

// tx.executeSql(
//   `INSERT INTO signupTable (name,email,password) VALUES (?,?,?)`,
//   [signups.name, signups?.email, signups?.password],
//   (tx, results) => {
//     var temp = [];
//     for (let i = 0; i < results.rows.length; i++) {
//       temp.push(results.rows.item(i));
//     }
//     console.log('temp data is ', temp);
//   },
// );

// export const insertUserName = (va: string, callback: (arg0: any[]) => void) => {
//   console.log('va is now ', va);
//   return new Promise(async (resolve, reject) => {
//     (await db)
//       .transaction(tx => {
//         tx.executeSql(
//           `INSERT INTO Login_Table (userName) VALUES (?)`,
//           [va],
//           (tx, results) => {
//             console.log('results is now ', results);
//             resolve([]);
//             tx.executeSql(`SELECT * FROM Login_Table`, [], (tx, results) => {
//               var temp = [];
//               for (let i = 0; i < results.rows.length; i++) {
//                 temp.push(results.rows.item(i));
//               }
//               console.log('resul of ', temp);
//               callback(temp);
//             });
//           },
//         );
//       })
//       .catch(e => {
//         console.log('error is ', e);
//       });
//   });
// };
