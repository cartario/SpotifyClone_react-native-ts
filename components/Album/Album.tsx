import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import type {Node} from 'react-native';
import styles from './styles';
import {AlbumProps} from '../../types';
import {useNavigation} from '@react-navigation/native';

export default ({albumUrl, artistHeadline, albumId}: AlbumProps): Node => {
  const navigation = useNavigation();

  const onPress = () => {
    console.warn(`here: ${artistHeadline}`);
    navigation.navigate('AlbumScreen', {
      id: albumId,
      artistHeadline,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.root}>
        <Image
          style={styles.poster}
          source={{
            uri: albumUrl,
          }}
        />
        <Text style={styles.artistHeadline}>{artistHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
