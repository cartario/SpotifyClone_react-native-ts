import React from 'react';
import {View, Text, Image} from 'react-native';
import type {Node} from 'react-native';
import styles from './styles';
import {AlbumProps} from '../../types';

export default ({albumUrl, artistHeadline}: AlbumProps): Node => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.poster}
        source={{
          uri: albumUrl,
        }}
      />
      <Text style={styles.artistHeadline}>{artistHeadline}</Text>
    </View>
  );
};
