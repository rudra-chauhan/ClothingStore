import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screens from '../UTILS/Screens';
import CustomTopHome from '../COMPONENTS/CustomTopHome';

const TopTab = createBottomTabNavigator();

const TopTabs = () => {
  return (
    <TopTab.Navigator tabBar={props => <CustomTopHome {...props} />}>
      <TopTab.Screen
        name="Men"
        component={Screens.Men}
        options={{headerShown: false}}
      />
      <TopTab.Screen
        name="Women"
        component={Screens.Women}
        options={{headerShown: false}}
      />
      <TopTab.Screen
        name="Accessories"
        component={Screens.Accessories}
        options={{headerShown: false}}
      />
    </TopTab.Navigator>
  );
};

export default TopTabs;
