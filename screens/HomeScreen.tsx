import React from 'react';
import {Button} from 'react-native';
import {AlbumsCategory} from '../components';
import {albumsCategoryMock} from '../mock';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <AlbumsCategory {...albumsCategoryMock} />

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
