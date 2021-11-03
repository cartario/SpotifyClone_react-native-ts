import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import type {Node} from 'react-native';
import styles from './styles';
import {Album} from '../../components';
import {AlbumsCategoryProps} from '../../types';

export default ({albums, title, id}: AlbumsCategoryProps): Node => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal>
        {albums.items.map(album => (
          <Album {...album} key={album.id} />
        ))}
      </ScrollView>
    </View>
  );
};
