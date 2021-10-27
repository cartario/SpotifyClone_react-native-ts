import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import type {Node} from 'react-native';
import styles from './styles';
import {AlbumProps} from '../../types';
import {useNavigation} from '@react-navigation/native';

type AlbumHederProps = {
  albumUrl: string;
  artistHeadline: string;
  likes: number;
};

export default ({albumUrl, artistHeadline, likes}: AlbumHederProps): Node => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.poster}
        source={{
          uri: albumUrl,
        }}
      />
      <View>
        <Text style={styles.artistHeadline}>{artistHeadline}</Text>
        <Text style={styles.likes}>By spotify - {likes} - likes</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => console.log('presed')}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Save</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
