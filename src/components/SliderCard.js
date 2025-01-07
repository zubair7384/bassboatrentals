import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import boat2 from '../assets/images/boat_img2.png';

const SliderCard = () => {
  return (
    <View style={styles.card}>
      <Image source={boat2} style={styles.image} />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>1-3 People</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Nitro Z20</Text>
        <Text style={styles.subtitle}>
          1300 Calvary Rd, Wills, TX 77318, USA
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 222,
    height: 272,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  badge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#0000003D',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'KnulTrial-Regular',
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    paddingLeft: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
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

export default SliderCard;
