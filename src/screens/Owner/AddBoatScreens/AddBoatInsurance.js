import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {INSURANCE_POLICY} from '../../../strings/en';
import CustomDropdown from '../../../components/CustomDropdown';

const AddBoatInsurance = ({formik}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Insurance</Text>
      <TextInput
        placeholder="Insurance Provider"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Insurance_Provider}
        onChangeText={formik.handleChange('Insurance_Provider')}
        onBlur={formik.handleBlur('Insurance_Provider')}
      />
      {formik.touched.Insurance_Provider &&
        formik.errors.Insurance_Provider && (
          <Text style={styles.errorText}>
            {formik.errors.Insurance_Provider}
          </Text>
        )}

      <TextInput
        placeholder="Who is the Owner of the policy named insured"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Owner_Policy_Named}
        onChangeText={formik.handleChange('Owner_Policy_Named')}
        onBlur={formik.handleBlur('Owner_Policy_Named')}
      />
      {formik.touched.Owner_Policy_Named &&
        formik.errors.Owner_Policy_Named && (
          <Text style={styles.errorText}>
            {formik.errors.Owner_Policy_Named}
          </Text>
        )}

      <TextInput
        placeholder="Policy number"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Policy_number}
        onChangeText={formik.handleChange('Policy_number')}
        onBlur={formik.handleBlur('Policy_number')}
      />
      {formik.touched.Policy_number && formik.errors.Policy_number && (
        <Text style={styles.errorText}>{formik.errors.Policy_number}</Text>
      )}

      <Text style={styles.sectionSubtitle}>{INSURANCE_POLICY}</Text>

      <View style={styles.dropdownContainer}>
        <CustomDropdown
          formik={formik}
          name="Policy_Liability_Acceptable"
          items={[
            {label: 'Yes', value: 'Yes'},
            {label: 'No', value: 'No'},
          ]}
          placeholder="Select an Option"
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
  sectionSubtitle: {
    fontSize: 14,
    color: '#979797',
    marginVertical: 10,
    fontWeight: '500',
  },
  dropdownContainer: {
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
  },
});

export default AddBoatInsurance;
