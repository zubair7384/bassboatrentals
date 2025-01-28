import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import CustomDropdown from '../../../components/CustomDropdown';

const AddBoatTrailerMotor = ({formik}) => {
  return (
    <View>
      <TextInput
        placeholder="Trailer Motor - Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Trailer_Motor_Make}
        onChangeText={formik.handleChange('Trailer_Motor_Make')}
        onBlur={formik.handleBlur('Trailer_Motor_Make')}
      />
      {formik.touched.Trailer_Motor_Make &&
        formik.errors.Trailer_Motor_Make && (
          <Text style={styles.errorText}>
            {formik.errors.Trailer_Motor_Make}
          </Text>
        )}

      <TextInput
        placeholder="Trailer Motor - Model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Trailer_Motor_Model}
        onChangeText={formik.handleChange('Trailer_Motor_Model')}
        onBlur={formik.handleBlur('Trailer_Motor_Model')}
      />
      {formik.touched.Trailer_Motor_Model &&
        formik.errors.Trailer_Motor_Model && (
          <Text style={styles.errorText}>
            {formik.errors.Trailer_Motor_Model}
          </Text>
        )}

      <TextInput
        placeholder="Trailer Motor - Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Trailer_Motor_Year}
        onChangeText={formik.handleChange('Trailer_Motor_Year')}
        onBlur={formik.handleBlur('Trailer_Motor_Year')}
      />
      {formik.touched.Trailer_Motor_Year &&
        formik.errors.Trailer_Motor_Year && (
          <Text style={styles.errorText}>
            {formik.errors.Trailer_Motor_Year}
          </Text>
        )}

      {/* <TextInput
        placeholder="Spare Trolling Motor Prop"
        style={styles.input}
        placeholderTextColor={'#979797'}
      /> */}

      <View style={styles.dropdownContainer}>
        <CustomDropdown
          formik={formik}
          name="Spare_Trolling_Motor_Prop"
          items={[
            {label: 'Yes', value: 'Yes'},
            {label: 'No', value: 'No'},
          ]}
          placeholder="Spare Trolling Motor Prop"
          dropDownDirection="TOP"
        />
      </View>

      {/* <TextInput
        placeholder="Big Motor Prop"
        style={styles.input}
        placeholderTextColor={'#979797'}
      /> */}

      <View style={styles.dropdownContainer}>
        <CustomDropdown
          formik={formik}
          name="Big_Motor_Prop"
          items={[
            {label: 'Yes', value: 'Yes'},
            {label: 'No', value: 'No'},
          ]}
          placeholder="Big Motor Prop"
          dropDownDirection="DOWN"
        />
      </View>
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
  dropdownContainer: {
    marginVertical: 10,
  },
});

export default AddBoatTrailerMotor;
