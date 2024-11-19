import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function DetailScreen() {
  const dayOfYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  const imageIndex = (dayOfYear(new Date()) % 5) + 1;

  const images = {
    1: require('./assets/flores1.png'),
    2: require('./assets/flores2.png'),
    3: require('./assets/flores3.png'),
    4: require('./assets/flores4.png'),
    5: require('./assets/flores5.png'),
  };

  const imageSource = images[imageIndex];

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
