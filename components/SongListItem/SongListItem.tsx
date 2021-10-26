import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import type {Node} from 'react-native';
import styles from './styles';
import {SongProps} from '../../types';

export default ({imageUri, artist, songName}: SongProps): Node => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: imageUri,
        }}
      />
      <View style={styles.song}>
        <Text style={styles.artist}>{artist}</Text>
        <Text style={styles.songName}>{songName}</Text>
      </View>
    </View>
  );
};
