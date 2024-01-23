import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoriesAll from './Man Screens/CategoriesAll';
import CustomManTab from '../../NAVIGATION/CustomManTab';

const ManTab = createBottomTabNavigator();

const Man = props => {
  return (
    <ManTab.Navigator tabBar={props => <CustomManTab {...props} />}>
      <ManTab.Screen
        name="CategoriesAll"
        component={CategoriesAll}
        options={{headerShown: false}}
      />
      {/* <ManTab.Screen
        name="Bottomwear"
        component={ManCategories.Bottomwear}
        options={{headerShown: false}}
      />
      <ManTab.Screen
        name="Winterwear"
        component={ManCategories.Winterwear}
        options={{headerShown: false}}
      />
      <ManTab.Screen
        name="Accessories"
        component={ManCategories.Accessories}
        options={{headerShown: false}}
      />
      <ManTab.Screen
        name="PlusSize"
        component={ManCategories.PlusSize}
        options={{headerShown: false}}
      />
      <ManTab.Screen
        name="Footwear"
        component={ManCategories.Footwear}
        options={{headerShown: false}}
      />
      <ManTab.Screen
        name="IndianWear"
        component={ManCategories.IndianWear}
        options={{headerShown: false}}
      />
      <ManTab.Screen
        name="SportsActivewear"
        component={ManCategories.SportsActivewear}
        options={{headerShown: false}}
      />
      <ManTab.Screen
        name="InnerwearLounge"
        component={ManCategories.InnerwearLounge}
        options={{headerShown: false}}
      />
      <ManTab.Screen
        name="PersonalCare"
        component={ManCategories.PersonalCare}
        options={{headerShown: false}}
      />
      <ManTab.Screen
        name="Specials"
        component={ManCategories.Specials}
        options={{headerShown: false}}
      /> */}
    </ManTab.Navigator>
  );
};

export default Man;
