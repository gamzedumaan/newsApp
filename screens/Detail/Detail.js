import { Ionicons, Octicons, Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Pressable,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

import NewsCard from '../../components/NewsCard';
import { Colors } from '../../utils/constants';

export default function Detail() {
  const [news, setNews] = useState();

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
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route);
  return (
    <>
      <View>
        <ImageBackground style={styles.item_Image} source={{ uri: route.params.item.avatar }} />
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', top: '10%', left: '5%' }}>
          <Ionicons name="arrow-back" size={27} color={Colors.primary4} />
        </Pressable>
        <View style={{ marginTop: '90%', marginHorizontal: 20 }}>
          <Text style={styles.name_Text}>{route.params.item.name}</Text>
          <Text style={styles.createdAt_Text}>{route.params.item.createdAt}</Text>
        </View>
      </View>
      <View style={styles.bottom_Menu}>
        <View style={styles.radius_Menu}>
          <View style={styles.menu_Border}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Image
                style={{ height: 17, width: 17, borderRadius: 20, top: 5 }}
                source={require('./../../assets/images/me.jpg')}
              />
              <Text style={styles.menu_Text}>Sidney W.</Text>
            </View>
          </View>
          <View style={styles.menu_Border2}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Octicons style={{ top: 5 }} name="stopwatch" size={17} color="black" />
              <Text style={styles.menu_Text}>2. h</Text>
            </View>
          </View>
          <View style={styles.menu_Border2}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Feather style={{ top: 5 }} name="eye" size={17} color="black" />
              <Text style={styles.menu_Text}>376</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={{ marginHorizontal: 10, marginTop: 20 }}>
            <Text style={styles.title_Text}>Sidney Williamson</Text>
            <Text style={styles.Text}>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <FlatList
              data={news}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <NewsCard tabTitle={item.name} imageurl={item.avatar} newsDate={item.createdAt} />
                );
              }}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  item_Image: {
    flex: 1,
    height: 500,
    width: '100%',
  },
  name_Text: {
    fontSize: 20,
    color: 'white',
    fontWeight: '800',
  },
  createdAt_Text: {
    fontSize: 16,
    color: 'white',
    fontWeight: '200',
    marginTop: 10,
  },
  bottom_Menu: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: Dimensions.get('window').height / 2.4,
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  radius_Menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  menu_Text: {
    textAlign: 'center',
    top: 5,
  },
  menu_Border: {
    height: 30,
    width: '26%',
    borderRadius: 20,
    backgroundColor: Colors.primary3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 4,
  },
  menu_Border2: {
    height: 30,
    width: '20%',
    backgroundColor: Colors.primary3,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 4,
  },
  title_Text: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '800',
    top: 10,
  },
  Text: {
    textAlign: 'left',
    top: 20,
    opacity: 0.4,
    fontSize: 16,
  },
});
