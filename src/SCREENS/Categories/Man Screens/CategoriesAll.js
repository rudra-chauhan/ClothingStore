import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Colors from '../../../UTILS/Colors';

const CategoriesAll = props => {
  const dataAll = props?.route?.params?.data;
  console.log(dataAll);

  return (
    <>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 0.4}}></View>
        <View
          style={{
            flex: 0.6,
            backgroundColor: Colors.white,
            alignItems: 'center',
          }}>
          {/* <Text style={{color: Colors.darkBlue}}>{dataAll?.Name}</Text> */}
          <FlatList
            data={dataAll?.data}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: '2%',
                    marginTop: '7%',
                  }}
                  onPress={() =>
                    props.navigation.navigate('Display', {data: item})
                  }>
                  <View
                    style={{
                      borderWidth: 1.5,
                      borderColor: Colors.black,
                      padding: 2,
                    }}>
                    <Image
                      source={item.photo}
                      style={{
                        height: 100,
                        width: 87,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      color: Colors.black,
                      fontSize: 11,
                      marginTop: '4%',
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
            numColumns={2}
          />
        </View>
      </View>
    </>
  );
};

export default CategoriesAll;
