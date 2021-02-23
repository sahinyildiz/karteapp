import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, View, Text, Image} from 'react-native';
import {StackActions, StackActionType} from '@react-navigation/native';

const Splash = (props: {
  navigation: {dispatch: (arg0: StackActionType) => void};
}) => {
  const getAsync = async () => {
    try {
      setTimeout(function () {
        props.navigation.dispatch(StackActions.replace('MenuStart'));
      }, 2000);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAsync();
  });
  return (
    <View style={styles.backgr}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <Image
        source={require('./images/logose.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  backgr: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

export default Splash;
