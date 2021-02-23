import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
let width = Dimensions.get('window').width;
import AsyncStorage from '@react-native-community/async-storage';

const Detail = (props: {route: any; navigation: {goBack: () => void}}) => {
  const favoribtn = async () => {
    let oldList: string | null = await AsyncStorage.getItem('books');
    let tempList = [];
    if (oldList) {
      tempList = JSON.parse(oldList);
    } else {
      tempList = [];
    }
    for (let index = 0; index < tempList.length; ++index) {
      if (tempList[index].id == props.route.params.id) {
        Alert.alert(
          'Kartega',
          'Favorilerinize başarıyla eklendi.',
          [{text: 'Tamam', onPress: () => props.navigation.goBack()}],
          {cancelable: false},
        );
      }
    }

    tempList.push({
      id: props.route.params.id,
      headling: props.route.params.headling,
      image: props.route.params.image,
      price: props.route.params.price,
      priceDr: props.route.params.priceDr,
      authors: props.route.params.authors,
      date: props.route.params.date,
      pagecount: props.route.params.pagecount,
    });
    setItemArray(tempList);
  };
  const setItemArray = async (books: string | null) => {
    AsyncStorage.setItem('books', JSON.stringify(books))
      .then(() => {
        Alert.alert(
          'Kartega',
          'Favorilerinize başarıyla eklendi.',
          [{text: 'Tamam', onPress: () => props.navigation.goBack()}],
          {cancelable: false},
        );
      })
      .catch(() => {
        console.log('eklenmedi.');
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View style={cs.header}>
        <StatusBar
          backgroundColor="#2F98BA"
          barStyle="light-content"
          translucent={true}
        />
        <View style={cs.headerSol}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              source={require('./images/back.png')}
              style={{width: 26}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={cs.headerOrta}>
          <Text style={{fontSize: 18, color: '#FFF', fontWeight: 'bold'}}>
            Detail
          </Text>
        </View>
        <View style={cs.headerSag} />
      </View>
      <View style={cs.detail}>
        <Image
          source={{uri: props.route.params.image}}
          style={cs.image}
          resizeMode="contain"
        />
        <Text style={cs.heacd}>{props.route.params.headling}</Text>
        <Text style={cs.heacd}>
          {props.route.params.price + ' ' + props.route.params.priceDr}
        </Text>
        <Text style={cs.heacd}>{props.route.params.authors}</Text>
        <Text style={cs.heacd}>{props.route.params.date}</Text>
        <Text style={cs.heacd}>
          Page Count:
          {props.route.params.pagecount ? props.route.params.pagecount : 'Null'}
        </Text>
        <View style={cs.BtnDivs}>
          <TouchableOpacity onPress={() => favoribtn()} style={cs.favoribtn}>
            <Text style={{fontSize: 16, color: '#000'}}>Favorime Ekle</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const cs = StyleSheet.create({
  favoribtn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  BtnDivs: {
    backgroundColor: '#fff',
    marginTop: 20,
  },
  detail: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    marginTop: 22,
    borderBottomWidth: 0.5,
    backgroundColor: '#2F98BA',
    borderBottomColor: '#2F98BA',
  },
  heacd: {
    fontSize: 16,
    color: '#fff',
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 200,
    marginTop: 20,
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

export default Detail;
