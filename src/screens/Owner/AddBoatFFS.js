import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const AddBoatFFS = ({onChange}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>
        FFS - Forward Facing Sonar Details
      </Text>
      <TextInput
        placeholder="FFS Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'FFSMake')}
      />
      <TextInput
        placeholder="FFS Model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'FFSModel')}
      />
      <TextInput
        placeholder="FFS Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'FFSYear')}
      />
      <TextInput
        placeholder="Graph 1 Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Graph1Make')}
      />
      <TextInput
        placeholder="Graph 1 Model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Graph1Model')}
      />
      <TextInput
        placeholder="Graph 1 Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Graph1year')}
      />
      <TextInput
        placeholder="Graph 2 Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Graph2Make')}
      />
      <TextInput
        placeholder="Graph 2 Model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Graph2Model')}
      />
      <TextInput
        placeholder="Graph 2 Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Graph2year')}
      />
      <TextInput
        placeholder="Graph 3 Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Graph3Make')}
      />
      <TextInput
        placeholder="Graph 3 Model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Graph3Model')}
      />
      <TextInput
        placeholder="Graph 3 Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Graph3year')}
      />
      <TextInput
        placeholder="Graph 4 Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Graph4Make')}
      />
      <TextInput
        placeholder="Graph 4 Model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Graph4Model')}
      />
      <TextInput
        placeholder="Graph 4 Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'Graph4year')}
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

export default AddBoatFFS;
