import React from 'react';
import {View, Text} from 'react-native';
import type {Node} from 'react-native';
import styles from './styles';

export default ({children, title}): Node => {
  return (
    <View>
      <Text style={styles.root}>Hello2</Text>
    </View>
  );
};
