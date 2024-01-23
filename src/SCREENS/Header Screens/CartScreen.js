import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import CustomHeadInner from '../../COMPONENTS/CustomHeadInner';
import {useSelector} from 'react-redux';
import Colors from '../../UTILS/Colors';
import {FlatList} from 'react-native-gesture-handler';

const CartScreen = props => {
  const cartData = useSelector(res => res.cartReducer);
  const [found, setfound] = useState(false);
  const [amount, setamount] = useState(0);
  console.log('CArt in cartscreen : ', cartData);
  checkdata = () => {
    if (cartData.isempty == true) {
      setfound(false);
    } else {
      setfound(true);
    }
  };
  Calculate = () => {
    let amount = cartData.cartData.reduce((total, item) => {
      console.log('Price is : ', item.price);
      return total + item.price;
    }, 0);
    setamount(amount);
  };
  useEffect(() => {
    checkdata();
    Calculate();
  }, [cartData]);

  return (
    <>
      <CustomHeadInner {...props} />
      {found == false ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.white,
          }}>
          <Text
            style={{
              color: Colors.black,
              fontSize: 20,
              fontFamily: 'Library3am-5V3Z',
            }}>
            The Cart is Currently Empty !!
          </Text>
        </View>
      ) : (
        <>
          <View
            style={{
              alignContent: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.darkSilver,
            }}>
            <Text
              style={{
                color: Colors.white,
                fontFamily: 'AmberyGardenRegular-PKjGd',
                textAlign: 'center',
                fontSize: 25,
              }}>
              My Cart
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: '3%',
            }}>
            <Text
              style={{
                color: Colors.olive,
                fontSize: 15,
                fontWeight: '600',
                textDecorationLine: 'underline',
              }}>
              Product
            </Text>
            <Text
              style={{
                color: Colors.olive,
                fontSize: 15,
                fontWeight: '600',
                textDecorationLine: 'underline',
              }}>
              Quantity
            </Text>
            <Text
              style={{
                color: Colors.olive,
                fontSize: 15,
                fontWeight: '600',
                textDecorationLine: 'underline',
              }}>
              Price
            </Text>
          </View>
          <FlatList
            data={cartData.cartData}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginTop: '5%',
                    paddingHorizontal: '5%',
                    marginHorizontal: '2%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    padding: '5%',
                  }}>
                  <View>
                    <Image
                      source={item.image}
                      style={{height: 50, width: 50}}
                    />
                  </View>
                  <Text
                    style={{
                      color: Colors.black,
                      marginHorizontal: '10%',
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}>
                    Layer's Originals {'   '}x{'   '} 1
                  </Text>
                  <Text style={{color: Colors.brown, fontWeight: 'bold'}}>
                    {item.price}
                  </Text>
                </View>
              );
            }}
          />
          <View>
            <View>
              <Text>Total Payable Amount : </Text>
              <Text>{amount}</Text>
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default CartScreen;
