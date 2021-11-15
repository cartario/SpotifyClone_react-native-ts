import React, {useEffect, useState} from 'react';
import {Button, ScrollView} from 'react-native';
import {AlbumsCategory} from '../components';
import {albumsCategorysMock} from '../mock';
import {AlbumsCategoriesProps} from '../types';
import {API, graphqlOperation} from 'aws-amplify';
import {listAlbumCategorys} from '../src/graphql/queries';

const HomeScreen = ({navigation}: AlbumsCategoriesProps) => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    const fetchAlbumCategories = async () => {
      try {
        const {data} = await API.graphql(graphqlOperation(listAlbumCategorys));

        setCategories(data.listAlbumCategorys.items);
      } catch (e) {
        console.log(e);
      }
    };

    // fetchAlbumCategories();
  }, []);

  // if (!categories) {
  //   return null;
  // }

  return (
    <>
      <ScrollView>
        {Object.keys(albumsCategorysMock).map(each => (
          <AlbumsCategory {...albumsCategorysMock[each]} key={each} />
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
