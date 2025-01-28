import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const AddBoatDriver = ({formik}) => {
  const options = [
    'Only "Boat Owner" can drive this boat.',
    'Both "Renters" & "Boat Owner" are allowed to drive this boat.',
  ];

  const handleOptionSelect = option => {
    formik.setFieldValue('DriverOption', option);
  };

  return (
    <View style={styles.content}>
      <Text style={styles.questionText}>Who can drive this boat?</Text>

      <View style={styles.questions}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.radioOptionContainer}
            onPress={() => handleOptionSelect(option)}>
            <View style={styles.radioCircle}>
              {formik.values.DriverOption === option && (
                <View style={styles.selectedCircle} />
              )}
            </View>
            <Text style={styles.radioText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {formik.touched.DriverOption && formik.errors.DriverOption && (
        <Text style={styles.errorText}>{formik.errors.DriverOption}</Text>
      )}
    </View>
  );
};

export default AddBoatDriver;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical: 20,
    paddingRight: 10,
  },
  questions: {
    paddingRight: 10,
  },
  questionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    fontFamily: 'knultrial-regular',
  },
  radioOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioCircle: {
    height: 16,
    width: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedCircle: {
    height: 9,
    width: 9,
    borderRadius: 6,
    backgroundColor: '#F2F2F2',
  },
  radioText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
    marginTop: 5,
  },
});
