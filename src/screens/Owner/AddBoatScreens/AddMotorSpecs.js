import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const AddMotorSpecs = ({formik}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Motor Specs</Text>
      <TextInput
        placeholder="Motor Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Motor_Make}
        onChangeText={formik.handleChange('Motor_Make')}
        onBlur={formik.handleBlur('Motor_Make')}
      />
      {formik.touched.Motor_Make && formik.errors.Motor_Make && (
        <Text style={styles.errorText}>{formik.errors.Motor_Make}</Text>
      )}

      <TextInput
        placeholder="Model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Motor_Model}
        onChangeText={formik.handleChange('Motor_Model')}
        onBlur={formik.handleBlur('Motor_Model')}
      />
      {formik.touched.Motor_Model && formik.errors.Motor_Model && (
        <Text style={styles.errorText}>{formik.errors.Motor_Model}</Text>
      )}

      <TextInput
        placeholder="Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Motor_Year}
        onChangeText={formik.handleChange('Motor_Year')}
        onBlur={formik.handleBlur('Motor_Year')}
      />
      {formik.touched.Motor_Year && formik.errors.Motor_Year && (
        <Text style={styles.errorText}>{formik.errors.Motor_Year}</Text>
      )}

      <TextInput
        placeholder="Serial"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Motor_Serial}
        onChangeText={formik.handleChange('Motor_Serial')}
        onBlur={formik.handleBlur('Motor_Serial')}
      />
      {formik.touched.Motor_Serial && formik.errors.Motor_Serial && (
        <Text style={styles.errorText}>{formik.errors.Motor_Serial}</Text>
      )}
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
  },
});

export default AddMotorSpecs;
