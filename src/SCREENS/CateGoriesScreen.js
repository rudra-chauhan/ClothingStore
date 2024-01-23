import React from 'react';
import {View} from 'react-native';
import Colors from '../UTILS/Colors';
import CustomHead from '../COMPONENTS/CustomHead';
import MaterialTabs from '../NAVIGATION/MaterialTabs';

const CateGoriesScreen = props => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <CustomHead {...props} />
      <MaterialTabs />
    </View>
  );
};

export default CateGoriesScreen;
