import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import boat1 from '../assets/images/boat_img1.png';

const NearbyCard = ({
  height,
  width,
  people,
  title,
  subtitle,
  img,
  position,
}) => {
  return (
    <View style={([styles.card], {height: height, width: width})}>
      <Image source={img} style={styles.image} />
      <View style={[styles.badge, {position: position}]}>
        <Text style={styles.badgeText}>{people}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 6,
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
  badge: {
    // position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#0000003D',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'KnulTrial-Regular',
    height: 15,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default NearbyCard;
