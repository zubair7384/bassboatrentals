import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const AboutUsCard = ({image, title, subTitle}) => {
  return (
    <View>
      <Text>about us</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginVertical: 20,
    objectFit: 'cover',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    fontFamily: 'knultrial-regular',
    marginBottom: 10,
  },
  subTitle: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'knultrial-regular',
    fontWeight: '400',
  },
});

export default AboutUsCard;
