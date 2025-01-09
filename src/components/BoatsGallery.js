import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import boat2 from '../assets/images/boat_img2.png';

const BoatsGallery = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={boat2} style={styles.image} />
      <View style={styles.badgeContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>250/Hour</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>1-3 People</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Nitro Z20</Text>
        <Text style={styles.subtitle}>Calvary Rd, Wills, TX 77318, USA</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    aspectRatio: 0.75,
    backgroundColor: '#fff',
    borderRadius: 20,
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
    resizeMode: 'cover',
  },

  badgeContainer: {
    position: 'absolute',
    top: 16,
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  badge: {
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
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    paddingHorizontal: 10,
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
    height: 30,
  },
});

export default BoatsGallery;
