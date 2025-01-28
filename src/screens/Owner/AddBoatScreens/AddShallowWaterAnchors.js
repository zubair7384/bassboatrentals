import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import CustomDropdown from '../../../components/CustomDropdown';

const AddShallowWaterAnchors = ({formik}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Shallow Water Anchors</Text>
      <View style={styles.dropdownContainer}>
        <CustomDropdown
          formik={formik}
          name="shallow_water_anchors"
          items={[
            {label: '1', value: '1'},
            {label: '2', value: '2'},
          ]}
          placeholder="How many shallow water anchors"
          dropDownDirection="DOWN"
        />
      </View>
      <TextInput
        placeholder="Shallow water anchor Brand and model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.Anchor_Brand_Model}
        onChangeText={formik.handleChange('Anchor_Brand_Model')}
        onBlur={formik.handleBlur('Anchor_Brand_Model')}
      />
      {formik.touched.Anchor_Brand_Model &&
        formik.errors.Anchor_Brand_Model && (
          <Text style={styles.errorText}>
            {formik.errors.Anchor_Brand_Model}
          </Text>
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
  dropdownContainer: {
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
  },
});

export default AddShallowWaterAnchors;
