import { Feather, Foundation } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';

import Detail from './screens/Detail/Detail';
import HomeScreen from './screens/Home/HomeScreen';
import SearchScreen from './screens/Search/SearchScreen';
import LearnMoreScreen from './screens/Home/LearnMoreScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const Area = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name='LearnMoreScreen' component={LearnMoreScreen}/>
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, title: '' }}>
        <Tab.Screen
          name="HomeScreen"
          component={Area}
          options={{ tabBarIcon: () => <Foundation name="home" size={24} color="black" /> }}
        />
        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ tabBarIcon: () => <Feather name="search" size={24} color="black" /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
