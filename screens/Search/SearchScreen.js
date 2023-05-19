import { EvilIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Pressable,
  Image,
} from 'react-native';

import { Colors } from '../../utils/constants';

export default function SearchScreen() {
  const Menu = [
    {
      id: '1',
      text: 'Healty',
    },
    {
      id: '2',
      text: 'Politics',
    },
    {
      id: '3',
      text: 'Art',
    },
    {
      id: '4',
      text: 'Food',
    },
    {
      id: '5',
      text: 'Topic',
    },
  ];
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route);
  const Detail = (item) => {
    navigation.navigate('Detail', {
      item,
    });
  };
  const [searchQuery, setsearchQuery] = useState('');
  const [activeIndex, setactiveIndex] = useState(0);
  const [news, setNews] = useState('');
  const [healty, setHealty] = useState([]);
  const [healtyFilter, sethealtyFilter] = useState([]);

  const [politic, setPolitic] = useState('');
  const [politicsFilter, setPoliticsFilter] = useState([]);
  const [art, setArt] = useState('');
  const [artFilter, setArtFilter] = useState([]);
  const [food, setFood] = useState([]);
  const [foodFilter, setFoodFilter] = useState([]);
  const [topic, setTopic] = useState('');
  const [topicFilter, setTopicFilter] = useState([]);

  const handleSearch = (text) => {
    if (activeIndex === 0) {
      const newData = healty.filter(({ name }) => {
        const itemData = `${name.toUpperCase()}`;
        const textData = text.trim().toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      sethealtyFilter(newData);
    }
    if (activeIndex === 1) {
      const newData = politic.filter(({ name }) => {
        const itemData = `${name.toUpperCase()}`;
        const textData = text.trim().toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setPoliticsFilter(newData);
    }
    if (activeIndex === 2) {
      const newData = art.filter(({ name }) => {
        const itemData = `${name.toUpperCase()}`;
        const textData = text.trim().toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setArtFilter(newData);
    }
    if (activeIndex === 3) {
      const newData = food.filter(({ name }) => {
        const itemData = `${name.toUpperCase()}`;
        const textData = text.trim().toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFoodFilter(newData);
    }
    if (activeIndex === 4) {
      const newData = topic.filter(({ name }) => {
        const itemData = `${name.toUpperCase()}`;
        const textData = text.trim().toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setTopicFilter(newData);
    }
  };
  const healtyData = async () => {
    fetch('https://645a2e3595624ceb21fa2172.mockapi.io/newsData/users')
      .then((res) => res.json())
      .then((data) => {
        setHealty(data);
        sethealtyFilter(data);
      })
      .catch((error) => {
        console.log('Bir hata oluştu : ', error);
        setHealty();
      });
  };

  useEffect(() => {
    newsaData();
    healtyData();
    politicData();
    artData();
    foodData();
    topicData();
  }, []);

  const newsaData = async () => {
    fetch('https://645a2e3595624ceb21fa2172.mockapi.io/newsData/users')
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((error) => {
        console.log('Bir hata oluştu : ', error);
        setNews();
      });
  };

  const politicData = async () => {
    fetch('https://645a2e3595624ceb21fa2172.mockapi.io/newsData/users')
      .then((res) => res.json())
      .then((data) => {
        setPolitic(data);
        setPoliticsFilter(data);
      })
      .catch((error) => {
        console.log('Bir hata oluştu : ', error);
        setPolitic();
      });
  };
  const artData = async () => {
    fetch('https://645a2e3595624ceb21fa2172.mockapi.io/newsData/users')
      .then((res) => res.json())
      .then((data) => {
        setArtFilter(data);
        setArt(data);
      })
      .catch((error) => {
        console.log('Bir hata oluştu : ', error);
        setArt();
      });
  };
  const foodData = async () => {
    fetch('https://645a2e3595624ceb21fa2172.mockapi.io/newsData/users')
      .then((res) => res.json())
      .then((data) => {
        setFoodFilter(data);
        setFood(data);
      })
      .catch((error) => {
        console.log('Bir hata oluştu : ', error);
        setFood();
      });
  };
  const topicData = async () => {
    fetch('https://645a2e3595624ceb21fa2172.mockapi.io/newsData/users')
      .then((res) => res.json())
      .then((data) => {
        setTopicFilter(data);
        setTopic(data);
      })
      .catch((error) => {
        console.log('Bir hata oluştu : ', error);
        setTopic();
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.texts_Container}>
        <Text style={styles.discover_Text}>Discover</Text>
        <Text style={styles.text}>News from all over world</Text>
      </View>
      <View style={styles.InputContainer}>
        <View style={styles.search_Container}>
          <EvilIcons name="search" size={35} color="#73777B" />
        </View>
        <View style={{ flex: 1, height: '100%' }}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="black"
            selectionColor="black"
            keyboardType="default"
            style={styles.Input}
            clearButtonMode="always"
            onChangeText={(e) => {
              setsearchQuery(e);
              handleSearch(e);
            }}
            value={searchQuery}
          />
        </View>
        <View style={styles.filter_Container}>
          <AntDesign name="filter" size={30} color="#73777B" />
        </View>
      </View>
      <FlatList
        horizontal
        data={Menu}
        style={{ maxHeight: 50 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              style={{
                borderBottomWidth: index === activeIndex ? 1 : 0,
                borderBottomColor: 'black',
                height: 50,
                padding: 8,
                marginHorizontal: 10,
              }}
              onPress={() => setactiveIndex(index)}>
              <Pressable onPress={() => setactiveIndex(index)}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '700',
                    color: index === activeIndex ? 'black' : '#D8D8D8',
                  }}>
                  {item.text}
                </Text>
              </Pressable>
            </Pressable>
          );
        }}
      />
      <View style={{ flex: 1, marginTop: 10, marginLeft: 10 }}>
        {activeIndex === 0 && (
          <FlatList
            data={healtyFilter}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Pressable onPress={() => Detail(item)}>
                  <View style={styles.Item_Container}>
                    <Image style={styles.Image} source={{ uri: item.avatar }} />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.createdAt}>{item.createdAt}</Text>
                    </View>
                  </View>
                </Pressable>
              );
            }}
          />
        )}
        {activeIndex === 1 && (
          <FlatList
            data={politicsFilter}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Pressable onPress={() => Detail(item)}>
                  <View style={styles.Item_Container}>
                    <Image style={styles.Image} source={{ uri: item.avatar }} />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.createdAt}>{item.createdAt}</Text>
                    </View>
                  </View>
                </Pressable>
              );
            }}
          />
        )}
        {activeIndex === 2 && (
          <FlatList
            data={artFilter}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Pressable onPress={() => Detail(item)}>
                  <View style={styles.Item_Container}>
                    <Image style={styles.Image} source={{ uri: item.avatar }} />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.createdAt}>{item.createdAt}</Text>
                    </View>
                  </View>
                </Pressable>
              );
            }}
          />
        )}
        {activeIndex === 3 && (
          <FlatList
            data={foodFilter}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Pressable onPress={() => Detail(item)}>
                  <View style={styles.Item_Container}>
                    <Image style={styles.Image} source={{ uri: item.avatar }} />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.createdAt}>{item.createdAt}</Text>
                    </View>
                  </View>
                </Pressable>
              );
            }}
          />
        )}
        {activeIndex === 4 && (
          <FlatList
            data={topicFilter}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Pressable onPress={() => Detail(item)}>
                  <View style={styles.Item_Container}>
                    <Image style={styles.Image} source={{ uri: item.avatar }} />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.createdAt}>{item.createdAt}</Text>
                    </View>
                  </View>
                </Pressable>
              );
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary1,
  },
  InputContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    backgroundColor: Colors.primary3,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  Input: {
    backgroundColor: Colors.primary3,
    borderRadius: 10,
    opacity: 0.2,
    fontSize: 20,
    height: 55,
    paddingLeft: 10,
  },
  texts_Container: {
    paddingHorizontal: 5,
    marginHorizontal: 20,
    marginTop: '50%',
  },
  search_Container: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filter_Container: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discover_Text: {
    fontWeight: '900',
    fontSize: 25,
  },
  search: {
    fontSize: 17,
    opacity: 0.3,
  },
  text: {
    opacity: 0.4,
    marginTop: 10,
    fontSize: 18,
  },
  Item_Container: {
    flexDirection: 'row',
    margin: 5,
    padding: 5,
  },
  Image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  name: {
    fontWeight: '800',
    fontSize: 17,
    marginTop: 5,
  },
  createdAt: {
    marginTop: 33,
    fontSize: 15,
    opacity: 0.5,
  },
});
