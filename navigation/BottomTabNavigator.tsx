import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeApp from '../screens/Welcome';
import TestPage from '../screens/Test';
import TabHomeNavigator from './TabHomeNavigator';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const BottomTab = createBottomTabNavigator();

const screens = {
  home: {
    component: TabHomeNavigator,
    icon: ({color, size}) => (
      <IoniconsIcon name="home" color={color} size={size} />
    ),
  },
  search: {
    component: WelcomeApp,
    icon: ({color, size}) => (
      <IoniconsIcon name="search" color={color} size={size} />
    ),
  },
  library: {
    component: TestPage,
    icon: ({color, size}) => (
      <MaterialIcons name="my-library-music" color={color} size={size} />
    ),
  },
  premium: {
    component: TestPage,
    icon: ({color, size}) => (
      <FontAwesome5Icon name="spotify" color={color} size={size} />
    ),
  },
};

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      {Object.keys(screens).map(key => {
        const {name, component, icon} = screens[key];
        return (
          <BottomTab.Screen
            name={name || key}
            component={component}
            options={{
              tabBarIcon: icon,
            }}
          />
        );
      })}
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
