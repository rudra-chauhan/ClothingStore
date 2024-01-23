import React, {useState} from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import Icons from '../UTILS/Icons';
import Colors from '../UTILS/Colors';
import {useSelector} from 'react-redux';

// props.navigation.navigate('TABS', {screen: 'HOME'})

const CustomHeadInner = props => {
  const cartData = useSelector(res => res.cartReducer);
  const [active, setactive] = useState(false);

  return (
    <View style={styles.headerView}>
      <TouchableOpacity
        style={{alignSelf: 'center', marginLeft: 10}}
        onPress={() => {
          props.navigation.goBack();
          setactive(false);
        }}>
        <Image source={Icons.Back} style={{height: 25, width: 25}} />
      </TouchableOpacity>
      <View style={{marginLeft: 10, alignSelf: 'center'}}>
        <Image source={Icons.Logo1} style={styles.headerLogo} />
      </View>
      {/* <TouchableOpacity style={{alignSelf: 'center', marginLeft: 52}}>
        <Image source={Icons.Search} style={styles.IconsSty} />
      </TouchableOpacity> */}
      <View style={{flexDirection: 'row', right: '-35%'}}>
        <TouchableOpacity style={{alignSelf: 'center', marginLeft: 12}}>
          <Image source={Icons.Fav} style={styles.IconsSty} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnSty1}
          onPress={() => {
            props.navigation.navigate('Cart');
            setactive(true);
          }}>
          <Image
            source={cartData.cartData.length == 0 ? Icons.Bag : Icons.FillBag}
            style={styles.IconsSty}
          />
          {cartData.cartData.length == 0 ? null : (
            <Text
              style={{
                color: Colors.black,
                position: 'absolute',
                backgroundColor: Colors.white,
                alignSelf: 'flex-end',
                paddingHorizontal: 4,
                borderRadius: 10,
                top: '4%',
                right: '1%',
                fontSize: 10,
              }}>
              {cartData.cartData.length}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeadInner;

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: Colors.greenShade,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  headerLogo: {
    tintColor: Colors.black,
    resizeMode: 'cover',
    height: 40,
    width: 100,
  },
  IconsSty: {
    height: 25,
    width: 25,
    tintColor: Colors.black,
  },
  btnSty1: {
    alignSelf: 'center',
    marginLeft: 12,
  },
  btnsty2: {
    alignSelf: 'center',
    marginLeft: 12,
    backgroundColor: Colors.GreenShade1,
    borderRadius: 10,
    padding: 4,
  },
});
