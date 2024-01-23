import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Drawers from './drawer';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import Colors from '../UTILS/Colors';

const Route = props => {
  return (
    <>
      <StatusBar
        backgroundColor={Colors.GreenShade1}
        barStyle={'dark-content'}
      />
      <NavigationContainer>
        <Drawers />
      </NavigationContainer>
    </>
  );
};

export default Route;
