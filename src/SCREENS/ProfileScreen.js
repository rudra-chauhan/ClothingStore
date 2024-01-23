import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Colors from '../UTILS/Colors';
import CustomHead from '../COMPONENTS/CustomHead';
import Icons from '../UTILS/Icons';

const ProfileScreen = props => {
  const profileData = [
    {
      Data: 'My Orders',
      Icon: Icons.Next,
      AltText: 'View, modify and track orders',
    },
    {
      Data: 'My Payments',
      Icon: Icons.Next,
      AltText: 'View and modify payment methods',
    },
    {
      Data: 'My Wallet',
      Icon: Icons.Next,
      AltText: 'Bewakoof Wallet History and redeemed gift cards',
    },
    {
      Data: 'My Addresses',
      Icon: Icons.Next,
      AltText: 'Edit, add or remove addresses',
    },
    {
      Data: 'My Profile',
      Icon: Icons.Next,
      AltText: 'Edit personal info, change password',
    },
    {
      Data: 'Refer and Earn',
      Icon: Icons.Next,
      AltText: 'Invite your friends and earn rewards',
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <CustomHead {...props} />
      <FlatList
        data={profileData}
        renderItem={Item => {
          return (
            <TouchableOpacity
              style={{
                marginHorizontal: 25,
                marginTop: 15,
                borderBottomWidth: 0.4,
                paddingBottom: 18,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: 20,
                    fontWeight: '400',
                  }}>
                  {Item.item.Data}
                </Text>
                <Image
                  source={Item.item.Icon}
                  style={{
                    height: 15,
                    width: 15,
                    resizeMode: 'contain',
                    opacity: 0.4,
                    marginLeft: 10,
                  }}
                />
              </View>
              <Text
                style={{
                  color: Colors.black,
                  opacity: 0.4,
                  fontSize: 12,
                  marginTop: 4,
                }}>
                {Item.item.AltText}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ProfileScreen;
