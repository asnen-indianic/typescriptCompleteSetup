import React from 'react';

var _navigator;
export const setTopLevelNavigator = (navigationRef: any) => {
  _navigator = navigationRef;
};
export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export const navigate = (name: any, params: any) => {
  navigationRef?.current?.navigate(name, params);
};
