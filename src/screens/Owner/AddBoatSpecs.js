import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const AddBoatSpecs = ({onChange}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Boat Specs*</Text>
      <TextInput
        placeholder="Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Make')}
      />
      <TextInput
        placeholder="Model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Model')}
      />
      <TextInput
        placeholder="Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Year')}
      />
      <TextInput
        placeholder="HIN"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'HIN')}
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

export default AddBoatSpecs;
