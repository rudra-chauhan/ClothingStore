import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../UTILS/Colors';
import Icons from '../UTILS/Icons';

const CustomTabBar = props => {
  const userData = useSelector(res => res.userReducer);
  const [Active, setActive] = useState({
    Home: true,
    Categories: false,
    Explore: false,
    Profile: false,
  });

  return (
    <View style={styles.ViewSty}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('HOME'),
            setActive({
              Home: true,
              Categories: false,
              Explore: false,
              Profile: false,
            });
        }}>
        <Image
          source={Icons.Home}
          style={Active.Home ? styles.ActiveSty : styles.NormalSty}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('CATEGORIES');
          setActive({
            Home: false,
            Categories: true,
            Explore: false,
            Profile: false,
          });
        }}>
        <Image
          source={Icons.Categories}
          style={Active.Categories ? styles.ActiveSty : styles.NormalSty}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('EXPLORE'),
            setActive({
              Home: false,
              Categories: false,
              Explore: true,
              Profile: false,
            });
        }}>
        <Image
          source={Icons.Explore}
          style={Active.Explore ? styles.ActiveSty : styles.NormalSty}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (userData.islogin) {
            props.navigation.navigate('PROFILE');
          } else {
            props.navigation.navigate('Login');
          }
          setActive({
            Home: false,
            Categories: false,
            Explore: false,
            Profile: true,
          });
        }}>
        <Image
          source={Icons.Profile}
          style={Active.Profile ? styles.ActiveSty : styles.NormalSty}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  ViewSty: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Colors.white,
    paddingVertical: 20,
  },
  NormalSty: {
    height: 25,
    width: 25,
    tintColor: Colors.black,
  },
  ActiveSty: {
    height: 25,
    width: 25,
    tintColor: Colors.OrangeShade,
  },
});
