import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Colors from '../UTILS/Colors';
import Images from '../UTILS/Images';
import Screens from '../UTILS/Screens';

const CustomTopHome = props => {
  const screensList = [
    {
      Name: 'HotDeals',
      Photo: Images.Tagline,
      GoTo: Screens.HotDeals,
    },
    {
      Name: 'Men',
      Photo: Images.Man,
      GoTo: Screens.Men,
    },
    {
      Name: 'Women',
      Photo: Images.Woman,
      GoTo: Screens.Women,
    },
    {
      Name: 'Accessories',
      Photo: Images.Tagline,
      GoTo: Screens.Accessories,
    },
    {
      Name: 'Clearance',
      Photo: Images.Diwali,
      GoTo: Screens.Clearance,
    },
    {
      Name: 'Customization',
      Photo: Images.Tribe,
      GoTo: Screens.Customization,
    },
  ];

  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: Colors.greenShade,
        height: 100,
      }}>
      <FlatList
        data={screensList}
        showsHorizontalScrollIndicator={false}
        renderItem={item => {
          return (
            <TouchableOpacity
              style={styles.bttnSty}
              onPress={() => props.navigation.navigate(item.item.GoTo)}>
              <View>
                <Image source={item.item.Photo} style={styles.imageSty} />
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  color: Colors.black,
                  marginTop: 3,
                  fontWeight: 'bold',
                }}>
                {item.item.Name}
              </Text>
            </TouchableOpacity>
          );
        }}
        horizontal
      />
    </View>
  );
};

export default CustomTopHome;

const styles = StyleSheet.create({
  bttnSty: {
    marginVertical: 12,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSty: {
    height: 63,
    width: 63,
    borderRadius: 20,
    borderWidth: 1,
    resizeMode: 'contain',
    borderColor: Colors.black,
  },
});
