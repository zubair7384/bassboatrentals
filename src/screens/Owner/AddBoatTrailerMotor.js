import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const AddBoatTrailerMotor = ({onChange}) => {
  return (
    <View>
      <TextInput
        placeholder="Trailer Motor - Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'TrailerMake')}
      />
      <TextInput
        placeholder="Trailer Motor - Model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'DualOrSingleAxle')}
      />
      <TextInput
        placeholder="Trailer Motor - Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Shocks')}
      />
      <TextInput
        placeholder="Surge Trailer Motor Prop"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Surge Brakes')}
      />
      <TextInput
        placeholder="Big Motor Prop"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Year')}
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

export default AddBoatTrailerMotor;
