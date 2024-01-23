import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomHeadInner from '../../COMPONENTS/CustomHeadInner';

const Clearance = props => {
  return (
    <>
      <CustomHeadInner {...props} />
      <ScrollView>
        <View>
          <Text>Clearance</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Clearance;
