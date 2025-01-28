import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import InputContainer from '../../../components/InputContainer';

const AddBoatSpecs = ({formik}) => {
  const selectedBoatType = formik.values.Boat_Type;

  return (
    <View>
      <Text style={styles.sectionTitle}>Boat Specs*</Text>

      <TextInput
        placeholder="Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Boat_Make}
        onChangeText={formik.handleChange('Boat_Make')}
        onBlur={formik.handleBlur('Boat_Make')}
      />
      {formik.touched.Boat_Make && formik.errors.Boat_Make && (
        <Text style={styles.errorText}>{formik.errors.Boat_Make}</Text>
      )}

      <TextInput
        placeholder="Model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Boat_Model}
        onChangeText={formik.handleChange('Boat_Model')}
        onBlur={formik.handleBlur('Boat_Model')}
      />
      {formik.touched.Boat_Model && formik.errors.Boat_Model && (
        <Text style={styles.errorText}>{formik.errors.Boat_Model}</Text>
      )}

      {selectedBoatType === 'Bass Boat' && (
        <>
          <TextInput
            placeholder="Year"
            style={styles.input}
            placeholderTextColor={'#979797'}
            keyboardType="numeric"
            value={formik.values.Boat_Year}
            onChangeText={formik.handleChange('Boat_Year')}
            onBlur={formik.handleBlur('Boat_Year')}
          />
          {formik.touched.Boat_Year && formik.errors.Boat_Year && (
            <Text style={styles.errorText}>{formik.errors.Boat_Year}</Text>
          )}

          <TextInput
            placeholder="HIN"
            style={styles.input}
            placeholderTextColor={'#979797'}
            value={formik.values.Boat_HIN}
            onChangeText={formik.handleChange('Boat_HIN')}
            onBlur={formik.handleBlur('Boat_HIN')}
          />
          {formik.touched.Boat_HIN && formik.errors.Boat_HIN && (
            <Text style={styles.errorText}>{formik.errors.Boat_HIN}</Text>
          )}
        </>
      )}

      {selectedBoatType !== 'Bass Boat' && (
        <>
          <TextInput
            placeholder="Motor Type"
            style={styles.input}
            placeholderTextColor={'#979797'}
            value={formik.values.Motor_Type}
            onChangeText={formik.handleChange('Motor_Type')}
            onBlur={formik.handleBlur('Motor_Type')}
          />
          {formik.touched.Motor_Type && formik.errors.Motor_Type && (
            <Text style={styles.errorText}>{formik.errors.Motor_Type}</Text>
          )}

          <TextInput
            placeholder="Horse Power"
            style={styles.input}
            placeholderTextColor={'#979797'}
            keyboardType="numeric"
            value={formik.values.Horse_Power}
            onChangeText={formik.handleChange('Horse_Power')}
            onBlur={formik.handleBlur('Horse_Power')}
          />
          {formik.touched.Horse_Power && formik.errors.Horse_Power && (
            <Text style={styles.errorText}>{formik.errors.Horse_Power}</Text>
          )}

          <Text style={styles.title}>Pricing</Text>
          <InputContainer
            value={formik.values.Boat_Rate}
            onChange={formik.handleChange('Boat_Rate')}
            onBlur={formik.handleBlur('Boat_Rate')}
            label={'Hourly Rate'}
          />
          {formik.touched.Boat_Rate && formik.errors.Boat_Rate && (
            <Text style={styles.errorText}>{formik.errors.Boat_Rate}</Text>
          )}
        </>
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
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
    fontFamily: 'knultrial-regular',
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

export default AddBoatSpecs;
