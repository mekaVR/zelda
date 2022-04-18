// RootNavigation.js

import {
  createNavigationContainerRef,
  ParamListBase,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: Record<string, any>) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}

export function navigationToScreen(
  navigation: NativeStackNavigationProp<ParamListBase>,
  stack: string,
  screen?: string,
  params?: any,
) {
  navigation.navigate(stack, {
    screen,
    params,
  } as never);
}
