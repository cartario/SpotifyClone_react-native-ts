import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeApp from '../screens/Welcome';
import TestPage from '../screens/Test';
import HomeScreen from '../screens/HomeScreen';
import TabHomeNavigator from './TabHomeNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        name="Home"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Welcome"
        component={WelcomeApp}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="information" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Test"
        component={TestPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="shield-checkmark-outline" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
