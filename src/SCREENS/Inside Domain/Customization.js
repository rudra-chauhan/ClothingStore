import React from 'react';
import {View, Text} from 'react-native';
import Colors from '../../UTILS/Colors';
import CustomHeadInner from '../../COMPONENTS/CustomHeadInner';

const Customization = props => {
  return (
    <View>
      <CustomHeadInner {...props} />
      <Text style={{color: Colors.black}}>Customization</Text>
    </View>
  );
};

export default Customization;
