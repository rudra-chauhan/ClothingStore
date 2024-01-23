import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import Colors from '../UTILS/Colors';
import Icons from '../UTILS/Icons';
import Images from '../UTILS/Images';

const StartScreen = props => {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: Colors.white}}>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={{alignSelf: 'center', marginLeft: 10}}
          onPress={() => props.navigation.openDrawer()}>
          <Image source={Icons.Menu} style={{height: 32, width: 32}} />
        </TouchableOpacity>
        <View style={{marginLeft: 10, alignSelf: 'center'}}>
          <Image source={Icons.Logo1} style={styles.headerLogo} />
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.black,
          flexDirection: 'row',
        }}>
        <View style={{flex: 0.5, width: '50%'}}>
          <Image
            source={Images.Tagline}
            style={{width: '100%', height: 100, resizeMode: 'stretch'}}
          />
        </View>
        <View style={{flex: 0.5, width: '50%'}}>
          <Image
            source={Images.Coupon}
            style={{height: 100, resizeMode: 'stretch', width: '100%'}}
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => props.navigation.navigate('TABS')}>
          <Image source={Images.Man} style={{height: '100%', width: '100%'}} />
          <Text style={styles.ManText}>SHOP MEN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => props.navigation.navigate('TABS')}>
          <Image
            source={Images.Woman}
            style={{height: '100%', width: '100%'}}
          />
          <Text style={styles.WomanText}>SHOP WOMEN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.bottomText}>Easy and{'\n'}Secure Payments</Text>
        <Text style={styles.bottomText}>COD{'\n'}Available</Text>
        <Text style={styles.bottomText}>Eligible for{'\n'}Free Shipping</Text>
      </View>
    </ScrollView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: Colors.GreenShade1,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  headerLogo: {
    tintColor: Colors.black,
    resizeMode: 'cover',
    width: 120,
    height: 50,
  },
  bottomText: {
    color: Colors.white,
    borderColor: Colors.lime,
    borderWidth: 0.5,
    padding: 5,
  },
  bottomView: {
    backgroundColor: Colors.black,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  ManText: {
    position: 'absolute',
    backgroundColor: Colors.black,
    padding: 5,
    fontSize: 16,
    color: Colors.white,
    fontWeight: '500',
    marginLeft: 40,
    top: '20%',
  },
  WomanText: {
    position: 'absolute',
    backgroundColor: Colors.black,
    padding: 5,
    fontSize: 16,
    color: Colors.white,
    fontWeight: '500',
    top: '20%',
    left: '60%',
  },
});
