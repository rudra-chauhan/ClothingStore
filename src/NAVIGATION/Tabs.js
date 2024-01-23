import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screens from '../UTILS/Screens';
import {useSelector} from 'react-redux';
import Colors from '../UTILS/Colors';
import {Image, View, Text} from 'react-native';

import Icons from '../UTILS/Icons';

const Tab = createBottomTabNavigator();

const Tabs = props => {
  const userData = useSelector(res => res.userReducer);
  return (
    <Tab.Navigator
      initialRouteName="HOME"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          flex: 0.09,
          backgroundColor: Colors.white,
        },
      }}>
      {/* tabBar={props => <CustomTabBar {...props} />} */}
      <Tab.Screen
        name="HOME"
        component={Screens.Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={Icons.Home}
                style={{
                  width: 28,
                  height: 28,
                  resizeMode: 'contain',
                  tintColor: focused ? Colors.green : Colors.black,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.green : Colors.black,
                  fontSize: 10,
                  fontWeight: 'bold',
                }}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CATEGORIES"
        component={Screens.Categories}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={Icons.Categories}
                style={{
                  width: 28,
                  height: 28,
                  resizeMode: 'contain',
                  tintColor: focused ? Colors.green : Colors.black,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.green : Colors.black,
                  fontSize: 10,
                  fontWeight: 'bold',
                }}>
                CATEGORIES
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="EXPLORE"
        component={Screens.Explore}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={Icons.Explore}
                style={{
                  width: 28,
                  height: 28,
                  resizeMode: 'contain',
                  tintColor: focused ? Colors.green : Colors.black,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.green : Colors.black,
                  fontSize: 10,
                  fontWeight: 'bold',
                }}>
                EXPLORE
              </Text>
            </View>
          ),
        }}
      />
      {userData.islogin ? (
        <Tab.Screen
          name="PROFILE"
          component={Screens.Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={Icons.Profile}
                  style={{
                    width: 28,
                    height: 28,
                    resizeMode: 'contain',
                    tintColor: focused ? Colors.green : Colors.black,
                  }}
                />
                <Text
                  style={{
                    color: focused ? Colors.green : Colors.black,
                    fontSize: 10,
                    fontWeight: 'bold',
                  }}>
                  PROFILE
                </Text>
              </View>
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="Login"
          component={Screens.Login}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={Icons.Login}
                  style={{
                    width: 28,
                    height: 28,
                    resizeMode: 'contain',
                    tintColor: focused ? Colors.green : Colors.black,
                  }}
                />
                <Text
                  style={{
                    color: focused ? Colors.green : Colors.black,
                    fontSize: 10,
                    fontWeight: 'bold',
                  }}>
                  LOGIN
                </Text>
              </View>
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default Tabs;
