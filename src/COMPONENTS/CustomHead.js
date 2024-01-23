import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import Icons from '../UTILS/Icons';
import Colors from '../UTILS/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {Logout} from '../SERVICES/redux/signup/action';

const CustomHead = props => {
  const cartData = useSelector(res => res.cartReducer);
  const dispatch = useDispatch();
  return (
    <View style={styles.headerView}>
      <View style={{flex: 0.5, flexDirection: 'row'}}>
        <TouchableOpacity
          style={{alignSelf: 'center', marginLeft: 10}}
          onPress={() => props.navigation.openDrawer()}>
          <Image source={Icons.Menu} style={{height: 25, width: 25}} />
        </TouchableOpacity>
        <View style={{marginLeft: 10, alignSelf: 'center'}}>
          <Image source={Icons.Logo1} style={styles.headerLogo} />
        </View>
      </View>
      <View style={{flex: 0.5, flexDirection: 'row', marginRight: '-30%'}}>
        {/* <TouchableOpacity style={{alignSelf: 'center', marginLeft: 18}}>
          <Image source={Icons.Search} style={styles.IconsSty} />
        </TouchableOpacity> */}
        <TouchableOpacity style={{alignSelf: 'center', marginLeft: 12}}>
          <Image source={Icons.Notification} style={styles.IconsSty} />
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf: 'center', marginLeft: 12}}>
          <Image source={Icons.Fav} style={styles.IconsSty} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignSelf: 'center', marginLeft: 12}}
          onPress={() => {
            props.navigation.navigate('Cart');
          }}>
          <Image source={Icons.Bag} style={styles.IconsSty} />
          {cartData.cartData.length == 0 ? null : (
            <Text
              style={{
                color: Colors.white,
                position: 'absolute',
                backgroundColor: Colors.black,
                alignSelf: 'flex-end',
                paddingHorizontal: 4,
                borderRadius: 10,
                bottom: '3%',
              }}>
              {cartData.cartData.length}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHead;

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: Colors.GreenShade1,
    flexDirection: 'row',
    paddingVertical: 10,
    width: '100%',
  },
  headerLogo: {
    tintColor: Colors.black,
    height: 40,
    width: 100,
    resizeMode: 'cover',
    left: '70%',
  },
  IconsSty: {
    height: 25,
    width: 25,
    tintColor: Colors.black,
  },
});
