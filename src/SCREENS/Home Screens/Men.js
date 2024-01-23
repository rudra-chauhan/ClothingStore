import React from 'react';
import {View, Text} from 'react-native';
import Colors from '../../UTILS/Colors';

const Men = props => {
  return (
    <View style={{marginTop: 100}}>
      <Text
        style={{
          fontSize: 20,
          color: Colors.black,
          fontFamily: 'NewWaltDisneyUi-8YdA',
        }}>
        Men
      </Text>
    </View>
  );
};

export default Men;
