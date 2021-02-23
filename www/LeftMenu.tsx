import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
let status = StatusBar.currentHeight;
const LeftMenu = (props: {
  navigation: {
    navigate: (arg0: string | undefined) => void;
  };
}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#2F98BA'}}>
      <View style={{flex: 1, backgroundColor: '#2F98BA'}}>
        <View style={cs.menuler}>
          <View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Search')}
              style={cs.menuKutu}>
              <View style={cs.menuKutuSol}>
                <Image
                  source={require('./images/search.png')}
                  style={{width: 28, height: 28,}}
                  resizeMode="contain"
                />
              </View>
              <View style={cs.menuKutuSag}>
                <Text style={{fontSize: 12, color: '#FFF'}}>Ara</Text>
              </View>
              <View style={cs.menuKutuSag2}>
                <Image
                  source={require('./images/right.png')}
                  style={{width: 18, height: 18}}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Favorites')}
              style={cs.menuKutu}>
              <View style={cs.menuKutuSol}>
                <Image
                  source={require('./images/heart.png')}
                  style={{width: 24, height: 24}}
                  resizeMode="contain"
                />
              </View>
              <View style={cs.menuKutuSag}>
                <Text style={{fontSize: 12, color: '#FFF'}}>Favorilerim</Text>
              </View>
              <View style={cs.menuKutuSag2}>
                <Image
                  source={require('./images/right.png')}
                  style={{width: 18, height: 18}}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const cs = StyleSheet.create({
  solBilgilerResim: {
    width: 70,
    height: 60,
    marginLeft: 10,
  },
  solBilgilerYazi: {
    height: 60,
    justifyContent: 'center',
  },
  solBilgiler: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#FFF',
    paddingBottom: 10,
  },
  menuKutu: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#aaa',
    paddingBottom: 5,
    paddingTop: 5,
  },
  sosyalkutu: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginLeft: 7,
    marginRight: 7,
  },
  sosyalmedyalar: {
    height: 100,
    position: 'absolute',
    bottom: 24,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  menuler: {
    marginTop: status,
    paddingTop: 10,
    height: height,
  },
  menuKutuSol: {
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuKutuSag: {
    width: width - 190,
    height: 40,
    justifyContent: 'center',
  },
  menuKutuSag2: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LeftMenu;
