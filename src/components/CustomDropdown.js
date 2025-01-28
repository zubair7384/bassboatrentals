import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet, View} from 'react-native';

const CustomDropdown = ({
  formik,
  name,
  items,
  placeholder,
  dropDownDirection,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <View style={styles.dropdownContainer}>
      <DropDownPicker
        open={dropdownOpen}
        value={formik.values[name]}
        items={items}
        setOpen={setDropdownOpen}
        setValue={callback => {
          const value = typeof callback === 'function' ? callback() : callback;
          formik.setFieldValue(name, value);
          console.log(`${name} Value:`, value);
        }}
        placeholder={placeholder}
        placeholderStyle={{color: '#979797'}}
        style={[styles.dropdownPicker]}
        dropDownContainerStyle={[styles.dropdownList]}
        labelStyle={{color: '#fff'}}
        textStyle={{color: '#fff'}}
        dropDownDirection={dropDownDirection}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    zIndex: 1,
  },
  dropdownPicker: {
    backgroundColor: '#191919',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderWidth: 0,
  },
  dropdownList: {
    backgroundColor: '#191919',
    borderWidth: 0,
    zIndex: 9999,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default CustomDropdown;
