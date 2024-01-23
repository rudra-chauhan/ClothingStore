import React, {useEffect, useState} from 'react';
import {View, Text, Image, Dimensions, ScrollView} from 'react-native';
import Colors from '../UTILS/Colors';
import Icons from '../UTILS/Icons';
import {TouchableOpacity} from 'react-native';
import CustomHeadInner from '../COMPONENTS/CustomHeadInner';
import {useDispatch, useSelector} from 'react-redux';
import {
  addedSuccessfully,
  removedSuccessfully,
} from '../SERVICES/redux/BuyCart/action';

const DetailTheScreen = props => {
  const Data123 = props?.route?.params?.data;
  const [move, setmove] = useState();
  const dispatch = useDispatch();
  const cartData = useSelector(res => res.cartReducer);

  const checkdata = () => {
    let tf = false;
    for (let i = 0; i < cartData.cartData.length; i++) {
      if (cartData.cartData[i].id == Data123.id) {
        tf = true;
      }
    }
    setmove(tf);
  };
  useEffect(() => {
    checkdata();
  }, [cartData]);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     checkdata();
  //   }, []),
  // );
  // console.log('CartData items is :', cartData.cartData.length);
  const addData = () => {
    dispatch(addedSuccessfully(Data123));
    setmove(true);
  };
  const removeData = () => {
    dispatch(removedSuccessfully(Data123));
    setmove(false);
  };
  return (
    <>
      <CustomHeadInner {...props} />
      <ScrollView>
        <View style={{backgroundColor: Colors.GreenShade1, marginBottom: '1%'}}>
          <Text
            style={{
              color: Colors.black,
              textAlign: 'center',
              paddingVertical: '2%',
              fontSize: 24,
              fontFamily: 'Library3am-5V3Z',
            }}>
            Layer's Collection
          </Text>
        </View>
        <View>
          <Image
            source={Data123.image}
            style={{
              alignSelf: 'center',
              height: Dimensions.get('screen').height / 2,
              width: Dimensions.get('screen').width / 1.1,
            }}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                color: Colors.black,
                marginTop: '3%',
                marginLeft: '5%',
                fontSize: 24,
              }}>
              Layer's Originals
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end', marginLeft: '35%'}}>
              <Image source={Icons.Fav} style={{height: 30, width: 30}} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: Colors.black,
              marginTop: '3%',
              marginLeft: '5%',
              fontSize: 18,
            }}>
            Buy For - <Text style={{color: Colors.brown}}>{Data123.price}</Text>
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.olive,
              marginHorizontal: '10%',
              marginTop: '5%',
              borderRadius: 5,
            }}
            onPress={() => (!move ? addData() : removeData())}>
            {!move ? (
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: 'AmberyGardenRegular-PKjGd',
                  textAlign: 'center',
                  paddingVertical: '2%',
                  fontSize: 18,
                }}>
                Add to Cart
              </Text>
            ) : (
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: 'AmberyGardenRegular-PKjGd',
                  textAlign: 'center',
                  paddingVertical: '2%',
                  fontSize: 18,
                }}>
                Remove from Cart
              </Text>
            )}
          </TouchableOpacity>
          <View>
            <View style={{borderBottomWidth: 1}}>
              <Text
                style={{
                  fontFamily: 'NewWaltDisneyUi-8YdA',
                  color: Colors.black,
                  marginLeft: '5%',
                  marginTop: '8%',
                  fontSize: 17,
                  color: Colors.gray,
                }}>
                Product Description
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                marginTop: '2%',
                marginHorizontal: '5%',
                color: Colors.darkSilver,
              }}>
              Steer clear of the deadly dream state in style with this new
              T-shirt. Style it with your favourite pajamas or boxers to ace the
              comfy look.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: '2%',
                marginHorizontal: '5%',
                color: Colors.black,
              }}>
              Country of Origin - {''}
              <Text style={{color: Colors.darkSilver}}>India</Text>
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: '2%',
                marginHorizontal: '5%',
                color: Colors.black,
              }}>
              Manufactured By - {''}
              <Text style={{color: Colors.darkSilver}}>
                Layers Shop Pvt. Ltd.
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: '2%',
                marginHorizontal: '5%',
                color: Colors.black,
              }}>
              Packed By - {''}
              <Text style={{color: Colors.darkSilver}}>
                Layers Shop Pvt. Ltd.
              </Text>
            </Text>
            <View style={{borderBottomWidth: 1}}>
              <Text
                style={{
                  fontFamily: 'NewWaltDisneyUi-8YdA',
                  color: Colors.black,
                  marginLeft: '5%',
                  marginTop: '8%',
                  fontSize: 17,
                  color: Colors.gray,
                }}>
                15 DAY RETURNS & EXCHANGE
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                marginTop: '2%',
                marginHorizontal: '5%',
                color: Colors.darkSilver,
              }}>
              Easy returns upto 15 days of delivery. Exchange available on
              select pincodes
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default DetailTheScreen;
