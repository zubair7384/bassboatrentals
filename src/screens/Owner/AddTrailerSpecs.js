import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {TRAILERSPARE} from '../../strings/en';

const AddTrailerSpecs = ({onChange}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Trailer Specs</Text>
      <TextInput
        placeholder="Trailer Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'TrailerMake')}
      />
      <TextInput
        placeholder="Dual or Single Axle"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'DualOrSingleAxle')}
      />
      <TextInput
        placeholder="Shocks"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Shocks')}
      />
      <TextInput
        placeholder="Surge Brakes"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Surge Brakes')}
      />
      <TextInput
        placeholder="Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Year')}
      />
      <TextInput
        placeholder="VIN"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'VIN')}
      />
      <TextInput
        placeholder="Spare Trailer Wheel"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Vin')}
      />
      <Text style={styles.trailerSpare}>{TRAILERSPARE} </Text>
      <TextInput
        placeholder="Yes"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Yes')}
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
  trailerSpare: {
    height: 50,
    marginVertical: 10,
    color: '#979797',
  },
});

export default AddTrailerSpecs;
