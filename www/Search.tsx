import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Loader from './Loader';
let width = Dimensions.get('window').width;

const Search = (props: {
  route: any;
  navigation: {
    goBack: () => void;
    navigate(
      detail: string,
      param2: {
        id: number;
        image: any;
        headling: string;
        price: number;
        priceDr: string;
        authors: string;
        date: any;
        pagecount: number;
      },
    ): void;
  };
}) => {
  const [loader, setLoader] = useState<number | undefined>(undefined);
  const [search, setSearch] = useState<string | 0>(0);
  const [books, setBooks] = useState<Array<number>>([]);

  const searchBtn = () => {
    if (search != 0) {
      setLoader(1);
      axios
        .get(
          'https://www.googleapis.com/books/v1/volumes?q=' +
            search +
            '&filter=paid-ebooks&printType=books&key=AIzaSyB40i8IONEHvjg2MBko51MWqNFuUQHn0Jg',
        )
        .then(async ({data}) => {
          setBooks(data.items);
          setLoader(0);
        })
        .catch((err) => {
          console.log(err);
          setLoader(0);
        });
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      {loader ? <Loader /> : null}
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
            Ara
          </Text>
        </View>
        <View style={cs.headerSag} />
      </View>
      <View style={cs.detail}>
        <View style={cs.searchdiv}>
          <View style={cs.searchdivLeft}>
            <TextInput
              style={cs.input}
              placeholder="Aranacak kelime..."
              placeholderTextColor="#ccc"
              onChangeText={(text) => setSearch(text)}
            />
          </View>
          <View style={cs.searchdivRight}>
            <TouchableOpacity onPress={() => searchBtn()} style={cs.searchBtn}>
              <Text style={{color: '#000'}}>Ara</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={cs.booksDivPage}>
            {books.length > 0
              ? books.map((item: any) => {
                  return (
                    <View key={item.id} style={cs.booksDiv}>
                      <TouchableOpacity
                        onPress={() =>
                          props.navigation.navigate('Detail', {
                            id: item.id,
                            image: item.volumeInfo.imageLinks.thumbnail,
                            headling: item.volumeInfo.title,
                            price: item.saleInfo.listPrice.amount,
                            priceDr: item.saleInfo.listPrice.currencyCode,
                            authors: item.volumeInfo.authors,
                            date: item.volumeInfo.publishedDate,
                            pagecount: item.volumeInfo.pageCount,
                          })
                        }
                        style={cs.booksDivBtn}>
                        <Image
                          source={{uri: item.volumeInfo.imageLinks.thumbnail}}
                          style={cs.image}
                          resizeMode="contain"
                        />
                        <Text style={cs.headling} numberOfLines={1}>
                          {item.volumeInfo.title}
                        </Text>
                        <Text style={cs.headling} numberOfLines={1}>
                          {item.volumeInfo.authors}
                        </Text>
                        <Text style={cs.headling} numberOfLines={1}>
                          {item.volumeInfo.publishedDate}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })
              : null}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const cs = StyleSheet.create({
  searchBtn: {
    height: 42,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  booksDivPage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    paddingTop: 20,
    paddingBottom: 100,
  },
  booksDiv: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 2 - 40,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 170,
  },
  headling: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  booksDivBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchdiv: {
    width: width,
    flexDirection: 'row',
    height: 50,
    marginTop: 15,
  },
  searchdivLeft: {
    width: width - 90,
    height: 50,
    justifyContent: 'center',
  },
  searchdivRight: {
    width: 90,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 50,
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
    color: '#959595',
    backgroundColor: '#FFF',
    paddingLeft: 10,
    height: 42,
    paddingBottom: 0,
    borderWidth: 0.5,
    marginLeft: 15,
    marginRight: 15,
    borderColor: '#aeaeae',
    borderRadius: 5,
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

export default Search;
