import React from 'react';
import {View, Text, Image} from 'react-native';
import type {Node} from 'react-native';
import styles from './styles';

export type AlbumProps = {
  album: {
    albumId: string;
    albumUrl: string;
    artistHeadline: string;
  };
};

export default ({album}: AlbumProps): Node => {
  const {albumUrl, artistHeadline} = album;

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
