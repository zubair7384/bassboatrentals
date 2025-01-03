import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import boat1 from '../assets/images/boat_img1.png';

const NearbyCard = () => {
  return (
    <View style={styles.card}>
      <Image source={boat1} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Phoenix 921 Elite</Text>
        <Text style={styles.subtitle}>1 - 3 people</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 151,
    height: 130,
    backgroundColor: '#fff',
    borderRadius: 6,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
    elevation: 5,
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    paddingLeft: 10,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    lineHeight: 24,
  },
  subtitle: {
    color: '#C4C4C4',
    fontSize: 11,
    marginTop: 4,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
  },
});

export default NearbyCard;
