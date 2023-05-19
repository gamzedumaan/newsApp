import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, Share,Alert } from 'react-native';

import { Fonts } from '../../utils/constants';

export default function LearnMoreScreen({ route }) {
  console.log(route.params.item.name);
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <>
      <Image style={{ width: '100%', height: '50%' }} source={{ uri: route.params.item.avatar }} />
      <Pressable style={{ position: 'absolute', top: '5%', left: '5%', width: '100%' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={27} color="white" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              width: '85%',
            }}>
            <FontAwesome5
              onPress={() => onShare()}
              style={{ right: 10 }}
              name="share"
              size={22}
              color="white"
            />
          </View>
        </View>
      </Pressable>
      <ScrollView>
        <View style={{ width: '95%', alignSelf: 'center', marginTop: 20 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <View>
              <View style={{ height: 40, width: 4, backgroundColor: '#FF8C32' }} />
            </View>
            <Text style={{ fontSize: 20, fontWeight: '800', left: 15 }}>Learn More</Text>
          </View>
          <Text style={styles.description_Text}>{route.params.item.description}</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  description_Text: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 2,
    color: Fonts.h3,
    opacity: 0.7,
  },
});
