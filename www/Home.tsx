import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import Header from './Header';
let width = Dimensions.get('window').width;
import Loader from './Loader';
const Home = (props: {
  navigation: {
    openDrawer: (arg0: string) => void;
    navigate(
      productList: string,
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
  const [loader, setLoader] = useState<number>(0);
  const [books, setBooks] = useState<Array<number>>([]);
  const booksLists = () => {
    setLoader(1);
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=kid&filter=paid-ebooks&printType=books&key=AIzaSyB40i8IONEHvjg2MBko51MWqNFuUQHn0Jg',
      )
      .then(async ({data}) => {
        setBooks(data.items);
        setLoader(0);
      })
      .catch((err) => {
        console.log(err);
        setLoader(0);
      });
  };
  useEffect(() => {
    booksLists();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      {loader ? <Loader /> : null}
      <Header navigation={props.navigation} />
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
                          price: item.saleInfo.listPrice.amount
                            ? item.saleInfo.listPrice.amount
                            : 0,
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
  );
};

const cs = StyleSheet.create({
  booksDivPage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
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
});

export default Home;
