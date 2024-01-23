import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import Colors from '../UTILS/Colors';
import {ListofDataW} from '../ASSESTS/Wdata';
import {useFocusEffect} from '@react-navigation/native';

const CustomWomanTab = props => {
  const [Active, setActive] = useState({id: 1});
  // useEffect(() => {
  //   navigateFunc();
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      navigateFunc();
    }, []),
  );

  const navigateFunc = (index = 0) => {
    props.navigation.navigate('CategoriesW', {
      data: ListofDataW[index],
    });
  };

  return (
    <View
      style={{
        backgroundColor: Colors.greenShade,
        position: 'absolute',
        width: '40%',
        height: '100%',
        paddingTop: '8%',
      }}>
      <FlatList
        data={ListofDataW}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={[
                styles.BtnSty,
                {
                  width: '100%',
                  backgroundColor: item.id == Active.id ? Colors.white : null,
                },
              ]}
              onPress={() => {
                setActive(item);
                navigateFunc(index);
              }}>
              <Text
                style={{
                  color:
                    item.id == Active.id ? Colors.GreenShade1 : Colors.black,
                  textAlign: 'center',
                  fontWeight: '500',
                }}>
                {item.Name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CustomWomanTab;

const styles = StyleSheet.create({
  BtnSty: {
    paddingVertical: 10,
    alignSelf: 'center',
  },
});
