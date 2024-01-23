import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Logout} from '../SERVICES/redux/signup/action';
import Colors from '../UTILS/Colors';

const CustomDrawer = props => {
  const dispatch = useDispatch();
  const userData = useSelector(res => res.userReducer);
  const listData = [
    {
      name: 'Men',
      component: (navigation = () => {
        props.navigation.navigate('AuthStack', {
          screen: 'TABS',
          params: {screen: 'CATEGORIES', params: {screen: 'Man'}},
        });
      }),
    },
    {
      name: 'Women',
      component: (navigation = () => {
        props.navigation.navigate('AuthStack', {
          screen: 'TABS',
          params: {screen: 'CATEGORIES', params: {screen: 'Woman'}},
        });
      }),
    },
    {
      name: 'HotDeals',
      component: (navigation = () => {
        props.navigation.navigate('AuthStack', {screen: 'HotDeals'});
      }),
    },
    {
      name: 'Clearance',
      component: (navigation = () => {
        props.navigation.navigate('AuthStack', {screen: 'Clearance'});
      }),
    },
    {
      name: 'Customization',
      component: (navigation = () => {
        props.navigation.navigate('AuthStack', {screen: 'Customization'});
      }),
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {!userData.islogin ? (
          <View
            style={{
              borderBottomWidth: 0.7,
              paddingLeft: '7%',
              paddingTop: '5%',
              backgroundColor: Colors.greenShade,
            }}>
            <Text
              style={{color: Colors.black, fontSize: 20, fontWeight: 'bold'}}>
              Welcome Guest
            </Text>
            <TouchableOpacity
              style={{marginVertical: 7, paddingBottom: 5}}
              onPress={() =>
                props.navigation.navigate('AuthStack', {
                  screen: 'TABS',
                  params: {screen: 'Login'},
                })
              }>
              <Text style={{color: Colors.gray, fontSize: 17}}>
                Login/Sign-Up
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity></TouchableOpacity>
        )}
      </View>
      <View>
        <Text
          style={{
            color: Colors.green,
            fontWeight: '700',
            marginTop: '12%',
            paddingLeft: '7%',
            fontSize: 14,
          }}>
          SHOP IN
        </Text>
        <FlatList
          data={listData}
          renderItem={item => {
            return (
              <TouchableOpacity
                style={{marginTop: '12%', paddingLeft: '7%'}}
                onPress={item.item.component}>
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  {item.item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        <Text
          style={{
            color: Colors.green,
            fontWeight: '700',
            marginTop: '12%',
            paddingLeft: '7%',
            fontSize: 14,
          }}>
          ENGAGE
        </Text>
        <TouchableOpacity style={{marginTop: '12%', paddingLeft: '7%'}}>
          <Text style={{color: Colors.black, fontSize: 14, fontWeight: 'bold'}}>
            Refer and Earn
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: '12%', paddingLeft: '7%', marginBottom: '7%'}}>
          <Text style={{color: Colors.black, fontSize: 14, fontWeight: 'bold'}}>
            Tribe Membership
          </Text>
        </TouchableOpacity>
        <View style={{backgroundColor: Colors.silver}}>
          <Text
            style={{
              color: Colors.green,
              fontWeight: '700',
              marginTop: '7%',
              paddingLeft: '7%',
              fontSize: 14,
            }}>
            CONTACT US
          </Text>
          <TouchableOpacity style={{marginTop: '12%', paddingLeft: '7%'}}>
            <Text
              style={{color: Colors.white, fontSize: 14, fontWeight: 'bold'}}>
              Help & Support
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: '12%', paddingLeft: '7%', marginBottom: '7%'}}>
            <Text
              style={{color: Colors.white, fontSize: 14, fontWeight: 'bold'}}>
              Feedback & Suggestions
            </Text>
          </TouchableOpacity>

          {userData.islogin ? (
            <TouchableOpacity
              style={{
                paddingLeft: '7%',
                marginTop: '2%',
                backgroundColor: Colors.greenShade,
                marginHorizontal: '3%',
                borderRadius: 5,
                paddingVertical: 8,
                marginBottom: '7%',
              }}
              onPress={() => dispatch(Logout())}>
              <Text
                style={{color: Colors.black, fontSize: 15, fontWeight: '500'}}>
                Log Out
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomDrawer;
