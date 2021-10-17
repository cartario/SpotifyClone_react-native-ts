import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Image,
  View,
  Text,
} from 'react-native';
import {Dimensions} from 'react-native';

const iPhoneSize = () => {
  const windowWidth = Dimensions.get('window').width;
  if (windowWidth === 320) {
    return 'small'; // iPhone SE
  }
  if (windowWidth === 414) {
    return 'large'; // iPhone Plus
  }
  return 'medium'; // iPhone 6/7
};

const colors = {
  black: '#000000',
  lightBlack: '#484848',
  white: '#ffffff',
  green01: '#008388',
  green02: '#02656b',
  darkOrange: '#d93900',
  lightGray: '#d8d8d8',
  pink: '#fc4c54',
  gray01: '#f3f3f3',
  gray02: '#919191',
  gray03: '#b3b3b3',
  gray04: '#484848',
  gray05: '#dadada',
  gray06: '#ebebeb',
  gray07: '#f2f2f2',
  brown01: '#ad8763',
  brown02: '#7d4918',
  blue: '#4995cd',
};

const size = iPhoneSize();
let cardSize = 100;
let cardMargin = 8;

if (size === 'small') {
  cardSize = 90;
  cardMargin = 4;
} else if (size === 'large') {
  cardSize = 115;
}

const mock = [
  {
    photo: {
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    },
  },
  {
    photo: {
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    },
  },
  {
    photo: {
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    },
  },
  {
    photo: {
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    },
  },
  {
    photo: {
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    },
  },
  {
    photo: {
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    },
  },
];

export default class Categories extends Component {
  get Categories() {
    const {categories} = this.props;
    return categories || mock.map((category, index) => (
      <TouchableHighlight style={styles.card} key={`category-item-${index}`}>
        <Image source={category.photo} style={styles.image} />
      </TouchableHighlight>
    ));
  }

  render() {
    
    return (
      <ScrollView
        contentContainerStyle={styles.wrapper}
        horizontal
        showHorizontalScrollIndicator={false}>
        {this.Categories}        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: cardSize,
    height: cardSize,
    marginRight: cardMargin,
    marginLeft: cardMargin,
    // backgroundColor: 'gold',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
