import React from 'react';
import type {Node} from 'react';
import {ScrollView, View} from 'react-native';

import {useRoute} from '@react-navigation/native';
import {SongListItem, AlbumHeader} from '../components';
import {Album} from '../mock';

const AlbumsScreen = () => {
  const {
    params: {id},
  } = useRoute();

  const {songs, albumUrl, artistHeadline, likes} = Album;

  return (
    <View>
      <AlbumHeader
        albumUrl={albumUrl}
        artistHeadline={artistHeadline}
        likes={likes}
      />
      <ScrollView>
        {songs.map(song => (
          <SongListItem {...song} />
        ))}
      </ScrollView>
    </View>
  );
};

export default AlbumsScreen;
