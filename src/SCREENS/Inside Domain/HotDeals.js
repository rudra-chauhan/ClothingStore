import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomHeadInner from '../../COMPONENTS/CustomHeadInner';

const HotDeals = props => {
  return (
    <>
      <CustomHeadInner {...props} />
      <ScrollView>
        <View>
          <Text>HotDeals</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default HotDeals;
