import {createNavigationContainerRef} from '@react-navigation/native';
import React from 'react';

export const navigationRef = createNavigationContainerRef();
export const isReadyRef = React.createRef();

export function navigate(name: any, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
