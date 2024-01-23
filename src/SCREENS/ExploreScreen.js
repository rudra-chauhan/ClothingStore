import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Colors from '../UTILS/Colors';
import CustomHead from '../COMPONENTS/CustomHead';
import Images from '../UTILS/Images';
import Icons from '../UTILS/Icons';

const ExploreScreen = props => {
  const List = [
    [
      {id: 0, name: 'Man', photo: Images.Man},
      {id: 1, name: 'Woman', photo: Images.Woman},
    ],
    [
      {id: 0, name: 'Woman', photo: Images.Woman},
      {id: 1, name: 'Man', photo: Images.Man},
    ],
    [
      {id: 0, name: 'Live Now!', photo: Images.Diwali},
      {id: 1, name: 'Man', photo: Images.Man},
    ],
    [
      {id: 0, name: 'Here', photo: Images.Tagline},
      {id: 1, name: 'Man', photo: Images.Man},
    ],
    [
      {id: 0, name: 'Here', photo: Images.Tagline},
      {id: 1, name: 'Man', photo: Images.Man},
    ],
    [
      {id: 0, name: 'Here', photo: Images.Tagline},
      {id: 1, name: 'Man', photo: Images.Man},
    ],
    [
      {id: 0, name: 'Here', photo: Images.Tagline},
      {id: 1, name: 'Live Now!', photo: Images.Diwali},
    ],
  ];

  return (
    <>
      <CustomHead {...props} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: Colors.white,
        }}>
        <Text style={styles.EngageText}>Engage</Text>
        <TouchableOpacity style={styles.btnView}>
          <View>
            <Image source={Images.Tribe} style={styles.btninnerImg} />
          </View>
          <Text style={styles.innerText1}>Tribe Membership</Text>
          <Text style={styles.innerText2}>JOIN NOW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnView}>
          <View>
            <Image
              source={Icons.Refer}
              style={[
                styles.btninnerImg,
                {backgroundColor: Colors.OrangeShade, borderRadius: 8},
              ]}
            />
          </View>
          <Text style={styles.innerText1}>Refer and Earn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnView}>
          <View>
            <Image source={Icons.Custom} style={styles.btninnerImg} />
          </View>
          <Text style={styles.innerText1}>Customize your own T-shirt!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnView, {borderBottomWidth: 0}]}>
          <View>
            <Image
              source={Icons.Vote}
              style={[
                styles.btninnerImg,
                {backgroundColor: Colors.cyan, borderRadius: 5},
              ]}
            />
          </View>
          <Text style={styles.innerText1}>Vote for Designs</Text>
        </TouchableOpacity>
        <Text style={[styles.EngageText]}>Popular Curations</Text>
        <View style={{marginTop: 15, marginHorizontal: 10, marginBottom: 100}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={List}
            renderItem={jam => {
              return (
                <View style={{marginLeft: 10}}>
                  <TouchableOpacity>
                    <Image source={jam.item[0].photo} style={styles.imageSty} />
                    <Text style={{color: Colors.black, alignSelf: 'center'}}>
                      {jam.item[0].name}
                    </Text>
                  </TouchableOpacity>
                  {jam.item[1] && (
                    <TouchableOpacity style={{marginTop: 10}}>
                      <Image
                        source={jam.item[1].photo}
                        style={styles.imageSty}
                      />
                      <Text style={{color: Colors.black, alignSelf: 'center'}}>
                        {jam.item[1].name}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            }}
            horizontal
          />
        </View>
      </ScrollView>
    </>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  EngageText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: '3%',
    marginLeft: '6%',
  },
  btnView: {
    marginTop: '6%',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    paddingBottom: 15,
    marginHorizontal: '4%',
  },
  btninnerImg: {
    height: 44,
    width: 44,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  innerText1: {
    color: Colors.black,
    alignSelf: 'center',
    marginLeft: '3%',
    fontSize: 16,
    fontWeight: '500',
  },
  innerText2: {
    color: Colors.red,
    marginLeft: 15,
    alignSelf: 'center',
    fontWeight: '500',
    textDecorationLine: 'underline',
    fontSize: 17,
  },
  imageSty: {
    height: 100,
    width: 100,
    borderRadius: 50,
    resizeMode: 'contain',
  },
});
