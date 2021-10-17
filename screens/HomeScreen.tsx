import React from 'react';

import {StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <>
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

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
