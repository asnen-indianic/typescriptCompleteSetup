import Api from './api';

export const getUserData = callback => {
  console.log('yes ite');
  Api.userData().then(response => {
    console.log('callback is ', response);
    callback(response);
  });
};
