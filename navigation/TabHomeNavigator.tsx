import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeApp from '../screens/Welcome';
import AlbumScreen from '../screens/AlbumScreen';
import TestPage from '../screens/Test';
import HomeScreen from '../screens/HomeScreen';

const TabHome = createNativeStackNavigator();

const TabHomeNavigator = () => {
  return (
    <TabHome.Navigator>
      <TabHome.Screen name="HomeScreen" component={HomeScreen} />
      <TabHome.Screen name="AlbumScreen" component={AlbumScreen} />
      <TabHome.Screen name="Test" component={TestPage} />
    </TabHome.Navigator>
  );
};

export default TabHomeNavigator;
