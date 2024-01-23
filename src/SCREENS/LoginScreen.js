import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginSuccessfull} from '../SERVICES/redux/signup/action';
import Colors from '../UTILS/Colors';
import Images from '../UTILS/Images';
import validation from '../UTILS/validation';

const LoginScreen = props => {
  const [Datasign, setSignData] = useState({
    name: '',
    email: '',
    password: '',
  });
  // console.log('dddddd', Datasign);
  const apicall = () => {
    fetch('https://637de4059c2635df8f91f6bd.mockapi.io/datahope/hidden', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Datasign),
    })
      .then(res => {
        console.log('SignUP', res);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const apicall1 = () => {
    fetch('https://637de4059c2635df8f91f6bd.mockapi.io/datahope/hidden', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(val => {
        setapidata(val);
        console.log('data', apidata);
      })
      .catch(e => {
        console.log('err', e);
      });
  };
  const [apidata, setapidata] = useState([]);
  const [Data, setData] = useState({
    Email: '',
    Pass: '',
  });
  const [Error, setError] = useState({
    EmailErr: null,
    PassErr: null,
  });
  const check = () => {
    let thePromise = validation(Data);
    thePromise.then(msg => {
      if (msg.status == 1) {
        props.navigation.navigate('TABS');
        setError(msg.error);
      } else {
        setError(msg.error);
      }
    });
    setError({...Error});
  };

  const [move, setmove] = useState(true);
  const userdata = useSelector(res => res.userReducer);
  const windowheight = Dimensions.get('window').height;
  const dispatch = useDispatch();
  return (
    <>
      <View
        style={{
          backgroundColor: Colors.greenShade,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: Colors.black,
            fontSize: 15,
            fontWeight: '900',
            paddingVertical: '5%',
          }}>
          Log In / Sign up
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <View>
          <Image
            source={Images.Thumbnail}
            style={{
              height: windowheight / 3,
              width: '100%',
            }}
          />
        </View>
        {move ? (
          <View
            style={{
              backgroundColor: Colors.white,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: Colors.gray,
                paddingTop: 30,
                fontSize: 15.5,
              }}>
              Glad to have you Back!
            </Text>
            <TextInput
              placeholder="Email"
              placeholderTextColor={Colors.silver}
              style={styles.TxtInpSty}
              keyboardType={'email-address'}
              onChangeText={text => setData(props => ({...props, Email: text}))}
            />
            {Error.EmailErr != null && (
              <View>
                <Text style={{color: Colors.red, marginLeft: '8%'}}>
                  {Error.EmailErr}
                </Text>
              </View>
            )}
            <TextInput
              placeholder="Password"
              placeholderTextColor={Colors.silver}
              style={styles.TxtInpSty}
              secureTextEntry={true}
              onChangeText={text => setData(props => ({...props, Pass: text}))}
            />
            {Error.PassErr != null && (
              <View>
                <Text style={{color: Colors.red, marginLeft: '8%'}}>
                  {Error.PassErr}
                </Text>
              </View>
            )}
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                marginRight: '5%',
                marginTop: '2%',
              }}>
              <Text
                style={{
                  color: Colors.olive,
                  textDecorationLine: 'underline',
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: Colors.GreenShade1,
                marginHorizontal: '5%',
                marginTop: '4%',
                paddingVertical: 12,
                borderRadius: 10,
              }}
              onPress={() => {
                check();
                apicall1();
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: Colors.white,
                  fontWeight: '700',
                  fontSize: 18,
                }}>
                Login
              </Text>
            </TouchableOpacity>
            {/* <View
              style={{
                flexDirection: 'row',
                width: '100%',
                marginVertical: '5%',
              }}>
              <View style={styles.sepSeg}></View>
              <View style={styles.sepSeg}></View>
            </View> */}
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                marginVertical: '5%',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.5,
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  backgroundColor: Colors.blue,
                  borderRadius: 10,
                  paddingVertical: '3%',
                }}>
                <Text style={{color: Colors.white}}>FACEBOOK</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.5,
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  backgroundColor: Colors.silver,
                  borderRadius: 10,
                  paddingVertical: '3%',
                }}>
                <Text style={{color: Colors.black}}>GOOGLE</Text>
              </TouchableOpacity>
            </View>
            {/* <View
              style={{
                flexDirection: 'row',
                width: '100%',
                marginVertical: '5%',
              }}>
              <View style={styles.sepSeg}></View>
              <View style={styles.sepSeg}></View>
            </View> */}
            <TouchableOpacity
              style={{alignSelf: 'center', marginBottom: 15}}
              onPress={() => setmove(false)}>
              <Text style={{color: Colors.darkSilver, fontSize: 16}}>
                Don't have an Account?{' '}
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    color: Colors.olive,
                  }}>
                  Sign-UP
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{backgroundColor: Colors.white}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: '5%',
              }}>
              {/* <TouchableOpacity
                onPress={() => setmove(true)}
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  padding: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2%',
                  marginLeft: '2%',
                  backgroundColor: Colors.greenShade,
                }}>
                <Image
                  source={Icons.Back1}
                  style={{width: 25, height: 25, tintColor: Colors.black}}
                />
              </TouchableOpacity> */}
              <Text
                style={{
                  color: Colors.gray,
                  fontSize: 15.5,
                }}>
                Join us now to be a part of Layers Family!
              </Text>
            </View>
            <TextInput
              placeholder="Name"
              placeholderTextColor={Colors.silver}
              style={styles.TxtInpSty}
              onChangeText={text => setSignData({...Datasign, name: text})}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={Colors.silver}
              style={styles.TxtInpSty}
              keyboardType={'email-address'}
              onChangeText={text => setSignData({...Datasign, email: text})}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={Colors.silver}
              style={styles.TxtInpSty}
              secureTextEntry={true}
              onChangeText={text => setSignData({...Datasign, password: text})}
            />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={Colors.silver}
              style={styles.TxtInpSty}
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={{
                backgroundColor: Colors.GreenShade1,
                marginHorizontal: '5%',
                marginVertical: '7%',
                paddingVertical: 12,
                borderRadius: 10,
              }}
              onPress={() => {
                setmove(true);
                apicall();
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: Colors.white,
                  fontWeight: '700',
                  fontSize: 18,
                }}>
                Sign-Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignSelf: 'center', marginBottom: '5%'}}
              onPress={() => setmove(true)}>
              <Text style={{color: Colors.darkSilver, fontSize: 16}}>
                Already have an Account?{' '}
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    color: Colors.olive,
                  }}>
                  Login
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  TxtInpSty: {
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: Colors.gray,
    marginHorizontal: '5%',
    marginTop: '7%',
    paddingLeft: 20,
    color: Colors.black,
  },
  sepSeg: {
    borderWidth: 0.5,
    flex: 0.5,
    marginHorizontal: '5%',
    borderColor: Colors.gray,
  },
});
