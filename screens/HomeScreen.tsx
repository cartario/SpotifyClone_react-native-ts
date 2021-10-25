import React from 'react';
import {Button, ScrollView} from 'react-native';
import {AlbumsCategory} from '../components';
import {albumsCategorysMock} from '../mock';
import {AlbumsCategoriesProps} from '../types';

const HomeScreen = ({navigation}: AlbumsCategoriesProps) => {
  return (
    <>
      <ScrollView>
        {albumsCategorysMock.map(each => (
          <AlbumsCategory {...each} key={each.id} />
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
