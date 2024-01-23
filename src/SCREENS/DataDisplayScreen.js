import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Colors from '../UTILS/Colors';
import {ListofOptions} from '../ASSESTS/data';
import {ListofOptionsW} from '../ASSESTS/Wdata';
import CustomHeadInner from '../COMPONENTS/CustomHeadInner';

const Display = props => {
  const DataFetch = props?.route?.params?.data;
  console.log(DataFetch);
  //   if(DataFetch.type == 'Man'){
  //     let Dataa = ListofOptions
  //   }
  //   else{
  //     let Dataa = ListofOptionsW
  //   }
  return (
    <>
      <CustomHeadInner {...props} />
      <Text
        style={{
          color: Colors.white,
          backgroundColor: Colors.silver,
          paddingVertical: 10,
          fontSize: 18,
          textAlign: 'center',
        }}>
        {DataFetch.name}
      </Text>
      <View style={{flex: 1, backgroundColor: Colors.white}}>
        <FlatList
          data={
            DataFetch?.type == 'Man'
              ? ListofOptions[DataFetch.id - 1].data
              : ListofOptionsW[DataFetch.id - 1].data
          }
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: Dimensions.get('screen').width / 2,
                  paddingTop: 10,
                }}>
                <TouchableOpacity
                  style={{alignSelf: 'center'}}
                  onPress={() =>
                    props.navigation.navigate('Detail', {data: item})
                  }>
                  <View style={{borderWidth: 1}}>
                    <Image
                      source={item.image}
                      style={{height: 150, width: 150}}
                    />
                  </View>
                  <Text style={{color: Colors.black}}>{item.price}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          numColumns={2}
        />
      </View>
    </>
  );
};
export default Display;
