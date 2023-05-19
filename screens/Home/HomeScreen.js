import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

import NewsCard from '../../components/NewsCard';
import { Colors, Fonts } from '../../utils/constants';

export default function HomeScreen() {
  const [news, setNews] = useState([]);

  const navigation = useNavigation();
  const newsData = async () => {
    fetch('https://645a2e3595624ceb21fa2172.mockapi.io/newsData/users')
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((error) => {
        console.log('Bir hata oluştu : ', error);
        setNews();
      });
  };
  useEffect(() => {
    newsData();
  }, []);
  const filterItem = news?.find((s) => s.id === '29');
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image style={styles.Image} source={require('../../assets/images/backround.jpg')} />
        <View style={styles.texts_Container}>
          <View>
            <View style={styles.transparanTitle} />
            <Text style={styles.background_Text}>News off the day</Text>
          </View>
          <Text style={styles.background_Text2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('LearnMoreScreen', {
                item: filterItem,
              })
            }
            style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text style={styles.learnText}>Learn More</Text>
            <AntDesign style={{ left: 10 }} name="arrowright" size={27} color="#454545" />
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={news}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <NewsCard tabTitle={item.name} imageurl={item.avatar} newsDate={item.createdAt} />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary1,
  },
  Image: {
    height: '60%',
    width: '100%',
    borderRadius: 20,
  },
  transparanTitle: {
    height: 35,
    width: '45%',
    backgroundColor: '#454545',
    opacity: 0.2,
    borderRadius: 20,
  },
  background_Text: {
    color: Fonts.h1,
    position: 'absolute',
    top: 7.5,
    left: '5%',
    fontSize: 17,
  },
  background_Text2: {
    fontSize: 25,
    color: '#454545',
    fontWeight: '800',
  },
  learnText: {
    color: '#454545',
    fontSize: 20,
    fontWeight: 'bold',
  },
  texts_Container: {
    position: 'absolute',
    marginTop: '70%',
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
});
