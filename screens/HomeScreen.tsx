import React from 'react';
import {Button, ScrollView} from 'react-native';
import {Album} from '../components';
import {AlbumsMock} from '../mock';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <ScrollView horizontal>
        {AlbumsMock.map(each => (
          <Album album={each} key={each.albumId} />
        ))}
      </ScrollView>
      <Button
        title="Go to WelcomeScreen"
        onPress={() => navigation.navigate('Welcome', {name: 'Jane'})}
      />
      <Button
        title="Go to TestScreen"
        onPress={() => navigation.navigate('Test', {name: 'Jane'})}
      />
      <Button
        title="Go to NotFoundScreen"
        onPress={() => navigation.navigate('NotFound', {name: 'Jane'})}
      />
    </>
  );
};

export default HomeScreen;
