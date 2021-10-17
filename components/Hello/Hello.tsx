import React from 'react';
import {View, Text} from 'react-native';
import type {Node} from 'react-native';
import styles from './styles';

const Hello = ({children, title}): Node => {
  return (
    <View>
      <Text style={styles.root}>Hello</Text>
    </View>
  );
};

export default Hello;
