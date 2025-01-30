import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const customTextInput = ({label, value, onChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 56,
    justifyContent: 'center',
  },
  label: {
    color: '#777',
    fontSize: 10,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
  },
  input: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
  },
});

export default customTextInput;
