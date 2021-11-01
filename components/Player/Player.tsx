import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import type {Node} from 'react-native';
import styles from './styles';
import {SongProps} from '../../types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

const audio = new Sound(
  'https://res.cloudinary.com/dxioiveim/video/upload/v1610205678/kruti-verti/online/music/Erik_B._and_Rakim_-_Dont_Sweat_The_Technique_p29fmc.mp3',
  null,
  error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  },
);

export default ({imageUri, artist, songName}: SongProps): Node => {
  const [playing, setPlaying] = useState();
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    audio.setVolume(2);

    return () => {
      audio.release();
    };
  }, []);

  useEffect(() => {
    // if (audio !== null) {
    //   const timer = setInterval(() => {
    //     return audio.getCurrentTime(currentTime => {
    //       console.log({
    //         currentTime,
    //         dur: audio.getDuration(),
    //         progress: (100 * currentTime) / audio.getDuration(),
    //       });
    //       return setProgress((100 * currentTime) / audio.getDuration());
    //     });
    //   }, 200);
    //   return () => clearInterval(timer);
    // }
  }, []);

  const playPause = () => {
    if (audio.isPlaying()) {
      audio.pause();
      setPlaying(false);
    } else {
      setPlaying(true);
      audio.play(success => {
        if (success) {
          setPlaying(false);
          console.log('successfully finished playing');
        } else {
          setPlaying(false);
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
  };

  return (
    <View style={styles.root}>
      <View style={{...styles.progress, width: `${progress}%`}}></View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: imageUri,
          }}
        />
        <View style={styles.song}>
          <Text style={styles.artist}>{artist}</Text>
          <Text style={styles.songName}> - {songName}</Text>
        </View>
        <View style={styles.icons}>
          <FontAwesome name="heart-o" color={'#fff'} size={25} />
          <TouchableOpacity onPress={playPause}>
            <Fontisto
              name={playing ? 'pause' : 'play'}
              color={'#fff'}
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
