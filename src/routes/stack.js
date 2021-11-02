import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Chat from '../screens/chat';
import {ModalImage} from '../components/ModalImage';

import {
  SharedElement,
  createSharedElementStackNavigator,
} from 'react-navigation-shared-element';

const {Navigator, Screen} = createSharedElementStackNavigator();

export function Stack() {
  return (
    <Navigator
      screenOptions={{
        headerMode: 'none',
      }}>
      <Screen name="Chat" component={Chat} />

      <Screen
        name="ModalImage"
        component={ModalImage}
        sharedElements={route => {
          return [route.params.image];
        }}
      />
    </Navigator>
  );
}
