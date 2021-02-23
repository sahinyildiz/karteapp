import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
let width = Dimensions.get('window').width;
let status = StatusBar.currentHeight;

const Header = (props: {navigation: {openDrawer: (arg0: any) => void}}) => {
  return (
    <View style={cs.header}>
      <StatusBar
        backgroundColor="#2F98BA"
        barStyle="light-content"
        translucent={true}
      />
      <View style={cs.headerSol}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer('Menu')}>
          <Image
            source={require('./images/menu.png')}
            style={{width: 24}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={cs.headerOrta}>
        <Text style={{color: '#fff', fontSize: 16}}>TEST</Text>
      </View>
      <View style={cs.headerSag} />
    </View>
  );
};

const cs = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    marginTop: status,
    borderBottomWidth: 0.5,
    backgroundColor: '#2F98BA',
    borderBottomColor: '#2F98BA',
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
});

export default Header;
