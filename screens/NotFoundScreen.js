import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Image,
  View,
  Text,
} from 'react-native';
import {Dimensions} from 'react-native';

const notFoundScreen = () =>{ 
  return (<View><Text>NotFoundScreen</Text></View>)
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
  },
  
});

export default notFoundScreen;

