import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {TRAILERSPARE} from '../../../strings/en';
import CustomDropdown from '../../../components/CustomDropdown';

const AddTrailerSpecs = ({formik}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Trailer Specs</Text>
      <TextInput
        placeholder="Trailer Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Trailer_Make}
        onChangeText={formik.handleChange('Trailer_Make')}
        onBlur={formik.handleBlur('Trailer_Make')}
      />
      {formik.touched.Trailer_Make && formik.errors.Trailer_Make && (
        <Text style={styles.errorText}>{formik.errors.Trailer_Make}</Text>
      )}

      <TextInput
        placeholder="Dual or Single Axle"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Trailer_Dual_Single_Axle}
        onChangeText={formik.handleChange('Trailer_Dual_Single_Axle')}
        onBlur={formik.handleBlur('Trailer_Dual_Single_Axle')}
      />
      {formik.touched.Trailer_Dual_Single_Axle &&
        formik.errors.Trailer_Dual_Single_Axle && (
          <Text style={styles.errorText}>
            {formik.errors.Trailer_Dual_Single_Axle}
          </Text>
        )}

      <TextInput
        placeholder="Shocks"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Trailer_Shocks}
        onChangeText={formik.handleChange('Trailer_Shocks')}
        onBlur={formik.handleBlur('Trailer_Shocks')}
      />
      {formik.touched.Trailer_Shocks && formik.errors.Trailer_Shocks && (
        <Text style={styles.errorText}>{formik.errors.Trailer_Shocks}</Text>
      )}

      <TextInput
        placeholder="Surge Brakes"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Trailer_Surge_Brakes}
        onChangeText={formik.handleChange('Trailer_Surge_Brakes')}
        onBlur={formik.handleBlur('Trailer_Surge_Brakes')}
      />
      {formik.touched.Trailer_Surge_Brakes &&
        formik.errors.Trailer_Surge_Brakes && (
          <Text style={styles.errorText}>
            {formik.errors.Trailer_Surge_Brakes}
          </Text>
        )}

      <TextInput
        placeholder="Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Trailer_Year}
        onChangeText={formik.handleChange('Trailer_Year')}
        onBlur={formik.handleBlur('Trailer_Year')}
      />
      {formik.touched.Trailer_Year && formik.errors.Trailer_Year && (
        <Text style={styles.errorText}>{formik.errors.Trailer_Year}</Text>
      )}

      <TextInput
        placeholder="VIN"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Trailer_VIN}
        onChangeText={formik.handleChange('Trailer_VIN')}
        onBlur={formik.handleBlur('Trailer_VIN')}
      />
      {formik.touched.Trailer_VIN && formik.errors.Trailer_VIN && (
        <Text style={styles.errorText}>{formik.errors.Trailer_VIN}</Text>
      )}

      <View style={styles.dropdownContainer}>
        <CustomDropdown
          formik={formik}
          name="Trailer_Spare_Wheel"
          items={[
            {label: 'Yes', value: 'Yes'},
            {label: 'No', value: 'No'},
          ]}
          placeholder="Spare Trailer Wheel"
          dropDownDirection="TOP"
        />
      </View>

      <Text style={styles.trailerSpare}>{TRAILERSPARE}</Text>

      <View style={styles.dropdownContainer}>
        <CustomDropdown
          formik={formik}
          name="Tread_depths"
          items={[
            {label: 'Yes', value: 'Yes'},
            {label: 'No', value: 'No'},
          ]}
          placeholder="Select an Option"
          dropDownDirection="TOP"
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
  trailerSpare: {
    // height: 50,
    marginVertical: 15,
    color: '#979797',
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

export default AddTrailerSpecs;
