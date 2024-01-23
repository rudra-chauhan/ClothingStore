import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from '../UTILS/Screens';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

const AuthStack = props => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Screens.Splash} />
      <Stack.Screen name="START" component={Screens.Start} />
      <Stack.Screen name="TABS" component={Tabs} />
      <Stack.Screen name="HotDeals" component={Screens.HotDeals} />
      <Stack.Screen name="Clearance" component={Screens.Clearance} />
      <Stack.Screen name="Customization" component={Screens.Customization} />
      <Stack.Screen name="Display" component={Screens.Display} />
      <Stack.Screen name="Detail" component={Screens.Detail} />
      <Stack.Screen name="Cart" component={Screens.Cart} />
      {/* <Stack.Screen
        name="Login"
        component={Screens.Login}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
