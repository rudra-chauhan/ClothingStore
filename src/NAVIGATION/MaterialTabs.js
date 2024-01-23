import React from 'react';
import Screens from '../UTILS/Screens';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Colors from '../UTILS/Colors';

const Tab = createMaterialTopTabNavigator();

const MaterialTabs = () => {
  return (
    <Tab.Navigator
      id="Material"
      screenOptions={{
        swipeEnabled: false,
        tabBarIndicatorStyle: {backgroundColor: Colors.white},
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.black,
        tabBarStyle: {
          backgroundColor: Colors.GreenShade1,
        },
      }}>
      <Tab.Screen name="Man" component={Screens.Man} />
      <Tab.Screen name="Woman" component={Screens.Woman} />
      {/* <Tab.Screen name="Accessories-All" component={Screens.Accessory} /> */}
    </Tab.Navigator>
  );
};

export default MaterialTabs;
