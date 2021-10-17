import React, {Component} from 'react';
import {ScrollView, StyleSheet, TouchableHighlight, Image} from 'react-native';
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
    return (
      categories ||
      mock.map((category, index) => (
        <TouchableHighlight style={styles.card} key={`category-item-${index}`}>
          <Image source={category.photo} style={styles.image} />
        </TouchableHighlight>
      ))
    );
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
