import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {HEADER_HEIGHT} from '../utils/dimensions';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT || 48,
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    padding: 10,
  },
});

export default Header;
