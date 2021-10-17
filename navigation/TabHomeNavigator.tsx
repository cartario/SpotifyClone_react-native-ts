import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeApp from '../screens/Welcome';
import TestPage from '../screens/Test';
import HomeScreen from '../screens/HomeScreen';

const TabHome = createNativeStackNavigator();

const TabHomeNavigator = () => {
  return (
    <TabHome.Navigator>
      <TabHome.Screen name="HomeScreen" component={HomeScreen} />
      <TabHome.Screen name="Welcome" component={WelcomeApp} />
      <TabHome.Screen name="Test" component={TestPage} />
    </TabHome.Navigator>
  );
};

export default TabHomeNavigator;
