import React from 'react';
import type {Node} from 'react';
import {ScrollView, View} from 'react-native';

import {useRoute} from '@react-navigation/native';
import {SongListItem} from '../components';
import {Album} from '../mock';

const AlbumsScreen = () => {
  const {
    params: {id},
  } = useRoute();

  const {songs} = Album;

  return (
    <View>
      <ScrollView>
        {songs.map(song => (
          <SongListItem {...song} />
        ))}
      </ScrollView>
    </View>
  );
};

export default AlbumsScreen;
