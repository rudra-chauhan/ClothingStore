import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AuthStack from './authStack';
import CustomDrawer from '../COMPONENTS/CustomDrawer';

const Drawer = createDrawerNavigator();

const Drawers = props => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{drawerType: 'slide'}}>
      <Drawer.Screen
        name="AuthStack"
        component={AuthStack}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default Drawers;
