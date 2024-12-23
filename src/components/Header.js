import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {HEADER_HEIGHT} from '../utils/dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';

const Header = ({title, navigation, editBtn, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation?.goBack && navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.editButton} onPress={onPress}>
        <IconFeather name={editBtn} size={24} color="#FFFFFF" />
      </TouchableOpacity>
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
    fontFamily: 'KnulTrial-Regular',
    width: 100,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    padding: 0,
    // backgroundColor: 'orange',
  },
  editButton: {
    position: 'absolute',
    right: 20,
    padding: 0,
  },
});

export default Header;
