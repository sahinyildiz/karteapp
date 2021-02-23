import React from 'react';
import {View, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Loader = () => {
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: 'rgba(0, 0, 0 ,0.7)',
        zIndex: 9999,
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LottieView
        style={{width: width / 4.5, height: height / 4.5}}
        source={require('./images/loader.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loader
