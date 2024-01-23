import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Colors from '../../UTILS/Colors';
import Images from '../../UTILS/Images';
import Icons from '../../UTILS/Icons';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('START');
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: Colors.black}}>
      <Image
        source={Icons.Logo1}
        style={{
          height: '100%',
          width: '100%',
          resizeMode: 'contain',
          tintColor: Colors.lime,
        }}
      />
    </View>
  );
};

export default SplashScreen;
