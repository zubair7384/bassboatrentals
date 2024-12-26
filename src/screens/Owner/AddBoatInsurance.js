import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {INSURANCE_POLICY} from '../../strings/en';

const AddBoatInsurance = ({onChange}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Insurance</Text>
      <TextInput
        placeholder="Insurance Provider"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'MotorMake')}
      />
      <TextInput
        placeholder="Who is the Owner of the policy named insured"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'MotorModel')}
      />
      <Text style={styles.sectionSubtitle}>{INSURANCE_POLICY}</Text>
      <TextInput
        placeholder="Yes"
        style={styles.input}
        placeholderTextColor={'#979797'}
        onChangeText={text => onChange(text, 'MotorModel')}
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
  sectionSubtitle: {
    fontSize: 14,
    color: '#979797',
    marginVertical: 10,
    fontWeight: '500',
  },
});

export default AddBoatInsurance;
