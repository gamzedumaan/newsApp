import React from 'react';
import { StyleSheet, Text, Pressable, Image } from 'react-native';

import { Fonts } from '../utils/constants';

export default function NewsCard({ onPress, tabTitle, title, newsDate, auther, imageurl }) {
  return (
    <>
      <Pressable style={{ marginLeft: 10 }} onPress={onPress}>
        <Text style={styles.tabTitle}>{tabTitle}</Text>
        <Image
          style={{ height: 170, width: '100%', borderRadius: 20 }}
          source={{ uri: imageurl }}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.newsDate}>{newsDate}</Text>
        <Text style={styles.auther}>{auther}</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  tabTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: Fonts.h2,
    paddingBottom: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: Fonts.h2,
    paddingTop: 10,
  },
  newsDate: {
    fontSize: 15,
    color: Fonts.h2,
    opacity: 0.2,
  },
  auther: {
    fontSize: 15,
    color: Fonts.h2,
    opacity: 0.2,
  },
});
