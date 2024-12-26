import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const AddMotorSpecs = ({onChange}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Motor Specs</Text>
      <TextInput
        placeholder="Motor Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'MotorMake')}
      />
      <TextInput
        placeholder="Model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'MotorModel')}
      />
      <TextInput
        placeholder="Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'MotorYear')}
      />
      <TextInput
        placeholder="Serial"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'MotorSerial')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  input: {
    backgroundColor: '#191919',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: 'white',
  },
});

export default AddMotorSpecs;
