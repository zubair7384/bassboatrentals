import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardList = ({
  navigation,
  title,
  subtitle,
  onPress,
  cardColor,
  customIcon,
  height,
  width,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, {backgroundColor: cardColor}]}>
        {customIcon &&
          (typeof customIcon === 'number' ? (
            <Image source={customIcon} style={{height: height, width: width}} />
          ) : (
            customIcon
          ))}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <TouchableOpacity style={styles.arrow} onPress={onPress}>
        <Icon name="angle-right" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    height: 73,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    height: 43,
    width: 43,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '300',
    fontFamily: 'Poppins-Regular',
    lineHeight: 30,
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: '#ffffff',
  },
  textContainer: {
    marginLeft: 20,
  },
  arrow: {
    position: 'absolute',
    right: 10,
  },
});

export default CardList;
