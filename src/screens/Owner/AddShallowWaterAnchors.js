import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const AddShallowWaterAnchors = ({onChange}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Shallow Water Anchors</Text>
      <TextInput
        placeholder="How many shallow water anchors"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'ManyAnchors')}
      />
      <TextInput
        placeholder="Shallow water anchor Brand and model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'AnchorBrandModel')}
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

export default AddShallowWaterAnchors;
