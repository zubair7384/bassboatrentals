import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const AddBoatFFS = ({formik}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>
        FFS - Forward Facing Sonar Details
      </Text>
      <TextInput
        placeholder="FFS Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.FFS_Make}
        onChangeText={formik.handleChange('FFS_Make')}
        onBlur={formik.handleBlur('FFS_Make')}
      />
      {formik.touched.FFS_Make && formik.errors.FFS_Make && (
        <Text style={styles.errorText}>{formik.errors.FFS_Make}</Text>
      )}

      <TextInput
        placeholder="FFS Model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.FFS_Model}
        onChangeText={formik.handleChange('FFS_Model')}
        onBlur={formik.handleBlur('FFS_Model')}
      />
      {formik.touched.FFS_Model && formik.errors.FFS_Model && (
        <Text style={styles.errorText}>{formik.errors.FFS_Model}</Text>
      )}

      <TextInput
        placeholder="FFS Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.FFS_Year}
        onChangeText={formik.handleChange('FFS_Year')}
        onBlur={formik.handleBlur('FFS_Year')}
      />
      {formik.touched.FFS_Year && formik.errors.FFS_Year && (
        <Text style={styles.errorText}>{formik.errors.FFS_Year}</Text>
      )}

      <TextInput
        placeholder="Graph 1 Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.FFS_Graph1_Make}
        onChangeText={formik.handleChange('FFS_Graph1_Make')}
        onBlur={formik.handleBlur('FFS_Graph1_Make')}
      />
      {formik.touched.FFS_Graph1_Make && formik.errors.FFS_Graph1_Make && (
        <Text style={styles.errorText}>{formik.errors.FFS_Graph1_Make}</Text>
      )}

      <TextInput
        placeholder="Graph 1 Model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.FFS_Graph1_Model}
        onChangeText={formik.handleChange('FFS_Graph1_Model')}
        onBlur={formik.handleBlur('FFS_Graph1_Model')}
      />
      {formik.touched.FFS_Graph1_Model && formik.errors.FFS_Graph1_Model && (
        <Text style={styles.errorText}>{formik.errors.FFS_Graph1_Model}</Text>
      )}

      <TextInput
        placeholder="Graph 1 Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.FFS_Graph1_Year}
        onChangeText={formik.handleChange('FFS_Graph1_Year')}
        onBlur={formik.handleBlur('FFS_Graph1_Year')}
      />
      {formik.touched.FFS_Graph1_Year && formik.errors.FFS_Graph1_Year && (
        <Text style={styles.errorText}>{formik.errors.FFS_Graph1_Year}</Text>
      )}

      <TextInput
        placeholder="Graph 2 Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.FFS_Graph2_Make}
        onChangeText={formik.handleChange('FFS_Graph2_Make')}
        onBlur={formik.handleBlur('FFS_Graph2_Make')}
      />
      {formik.touched.FFS_Graph2_Make && formik.errors.FFS_Graph2_Make && (
        <Text style={styles.errorText}>{formik.errors.FFS_Graph2_Make}</Text>
      )}

      <TextInput
        placeholder="Graph 2 Model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.FFS_Graph2_Model}
        onChangeText={formik.handleChange('FFS_Graph2_Model')}
        onBlur={formik.handleBlur('FFS_Graph2_Model')}
      />
      {formik.touched.FFS_Graph2_Model && formik.errors.FFS_Graph2_Model && (
        <Text style={styles.errorText}>{formik.errors.FFS_Graph2_Model}</Text>
      )}

      <TextInput
        placeholder="Graph 2 Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.FFS_Graph2_Year}
        onChangeText={formik.handleChange('FFS_Graph2_Year')}
        onBlur={formik.handleBlur('FFS_Graph2_Year')}
      />
      {formik.touched.FFS_Graph2_Year && formik.errors.FFS_Graph2_Year && (
        <Text style={styles.errorText}>{formik.errors.FFS_Graph2_Year}</Text>
      )}

      <TextInput
        placeholder="Graph 3 Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.FFS_Graph3_Make}
        onChangeText={formik.handleChange('FFS_Graph3_Make')}
        onBlur={formik.handleBlur('FFS_Graph3_Make')}
      />
      {formik.touched.FFS_Graph3_Make && formik.errors.FFS_Graph3_Make && (
        <Text style={styles.errorText}>{formik.errors.FFS_Graph3_Make}</Text>
      )}

      <TextInput
        placeholder="Graph 3 Model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.FFS_Graph3_Model}
        onChangeText={formik.handleChange('FFS_Graph3_Model')}
        onBlur={formik.handleBlur('FFS_Graph3_Model')}
      />
      {formik.touched.FFS_Graph3_Model && formik.errors.FFS_Graph3_Model && (
        <Text style={styles.errorText}>{formik.errors.FFS_Graph3_Model}</Text>
      )}

      <TextInput
        placeholder="Graph 3 Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.FFS_Graph3_Year}
        onChangeText={formik.handleChange('FFS_Graph3_Year')}
        onBlur={formik.handleBlur('FFS_Graph3_Year')}
      />
      {formik.touched.FFS_Graph3_Year && formik.errors.FFS_Graph3_Year && (
        <Text style={styles.errorText}>{formik.errors.FFS_Graph3_Year}</Text>
      )}

      <TextInput
        placeholder="Graph 4 Make"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.FFS_Graph4_Make}
        onChangeText={formik.handleChange('FFS_Graph4_Make')}
        onBlur={formik.handleBlur('FFS_Graph4_Make')}
      />
      {formik.touched.FFS_Graph4_Make && formik.errors.FFS_Graph4_Make && (
        <Text style={styles.errorText}>{formik.errors.FFS_Graph4_Make}</Text>
      )}

      <TextInput
        placeholder="Graph 4 Model"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.FFS_Graph4_Model}
        onChangeText={formik.handleChange('FFS_Graph4_Model')}
        onBlur={formik.handleBlur('FFS_Graph4_Model')}
      />
      {formik.touched.FFS_Graph4_Model && formik.errors.FFS_Graph4_Model && (
        <Text style={styles.errorText}>{formik.errors.FFS_Graph4_Model}</Text>
      )}

      <TextInput
        placeholder="Graph 4 Year"
        style={styles.input}
        placeholderTextColor={'#979797'}
        value={formik.values.FFS_Graph4_Year}
        onChangeText={formik.handleChange('FFS_Graph4_Year')}
        onBlur={formik.handleBlur('FFS_Graph4_Year')}
      />
      {formik.touched.FFS_Graph4_Year && formik.errors.FFS_Graph4_Year && (
        <Text style={styles.errorText}>{formik.errors.FFS_Graph4_Year}</Text>
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

export default AddBoatFFS;
