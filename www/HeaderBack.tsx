import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
let status = StatusBar.currentHeight;

const HeaderBack = (props) => {
  return (
    <View style={cs.header}>
      <StatusBar
        backgroundColor="#1A376D"
        barStyle="light-content"
        translucent={true}
      />
      <View style={cs.headerSol}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            source={require('./images/back.png')}
            style={{width: 20}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={cs.headerOrta}>
        <Image
          source={require('./images/asdasd.png')}
          style={{width: 40}}
          resizeMode="contain"
        />
      </View>
      <View style={cs.headerSag} />
    </View>
  );
};

const cs = StyleSheet.create({
  pdfAlanSol: {
    width: 60,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdfAlanOrta: {
    width: width - 175,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdfBtn: {
    width: 60,
    height: 34,
    backgroundColor: '#1A376D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  pdfAlanSag: {
    width: 115,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdfAlan: {
    height: 70,
    flexDirection: 'row',
    width: width,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    marginTop: 22,
    borderBottomWidth: 0.5,
    backgroundColor: '#1A376D',
    borderBottomColor: '#1A376D',
  },
  menu: {
    width: 20,
    height: 20,
  },
  headerSol: {
    width: 60,
    justifyContent: 'center',
    height: 50,
    alignItems: 'center',
  },
  headerOrta: {
    width: width - 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSag: {
    width: 60,
    justifyContent: 'center',
    paddingRight: 10,
    alignItems: 'flex-end',
  },
  logo: {
    width: width / 2.5,
  },
  input: {
    fontSize: 14,
    paddingTop: 0,
    marginTop: 0,
    color: '#959595',
    backgroundColor: '#FFF',
    paddingLeft: 10,
    height: 42,
    paddingBottom: 0,
    borderWidth: 0.5,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    borderColor: '#aeaeae',
    borderRadius: 10,
  },
  input2: {
    fontSize: 14,
    paddingTop: 0,
    marginTop: 0,
    color: '#959595',
    backgroundColor: '#FFF',
    paddingLeft: 10,
    paddingBottom: 0,
    borderWidth: 0.5,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    borderColor: '#aeaeae',
    borderRadius: 10,
  },
  btn: {
    width: width - 30,
    marginLeft: 15,
    height: 46,
    backgroundColor: '#69C4CC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default HeaderBack;
