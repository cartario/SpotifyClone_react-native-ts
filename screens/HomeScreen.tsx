import React, {useEffect} from 'react';
import {Button, ScrollView} from 'react-native';
import {AlbumsCategory} from '../components';
import {albumsCategorysMock} from '../mock';
import {AlbumsCategoriesProps} from '../types';
import {API, graphqlOperation} from 'aws-amplify';
import {listAlbumCategorys} from '../src/graphql/queries';

const HomeScreen = ({navigation}: AlbumsCategoriesProps) => {
  useEffect(() => {
    const fetchAlbumCategories = async () => {
      try {
        const {data} = await API.graphql(graphqlOperation(listAlbumCategorys));
        console.log(data.listAlbumCategorys.items.map(each => each.title));
      } catch (e) {
        console.log(e);
      }
    };

    fetchAlbumCategories();
  }, []);

  return (
    <>
      <ScrollView>
        {albumsCategorysMock.map(each => (
          <AlbumsCategory {...each} key={each.id} />
        ))}
      </ScrollView>
      {/* <Button
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
      /> */}
    </>
  );
};

export default HomeScreen;
