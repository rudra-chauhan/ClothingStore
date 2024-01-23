import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomWomanTab from '../../NAVIGATION/CustomWomanTab';
import CategoriesAll from './Man Screens/CategoriesAll';

const WomanTab = createBottomTabNavigator();

const Woman = props => {
  return (
    <WomanTab.Navigator tabBar={props => <CustomWomanTab {...props} />}>
      <WomanTab.Screen
        name="CategoriesW"
        component={CategoriesAll}
        options={{headerShown: false}}
      />
    </WomanTab.Navigator>
  );
};

export default Woman;
