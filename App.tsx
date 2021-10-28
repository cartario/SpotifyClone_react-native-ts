/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import MainNavigation from './navigation';
import {Player} from './components';
import {Album} from './mock';

const App: () => Node = () => {
  return (
    <>
      <MainNavigation />
      <Player {...Album.songs[0]} />
    </>
  );
};

export default App;
