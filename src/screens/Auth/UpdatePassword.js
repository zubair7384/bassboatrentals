import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Feather';

const UpdatePassword = ({ navigation }) => {
  const [inputStates, setInputStates] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);

  const handleInputChange = (text, inputName) => {
    setInputStates(prevState => ({
      ...prevState,
      [inputName]: text.trim(),
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Update Password'} navigation={navigation} />
      <View style={styles.formContainer}>

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="New Password"
            style={styles.input}
            placeholderTextColor={'#979797'}
            onChangeText={text => handleInputChange(text, 'password')}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon
              name={passwordVisible ? "eye" : "eye-off"}
              size={20}
              color="#979797"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Re-enter New Password"
            style={styles.input}
            placeholderTextColor={'#979797'}
            onChangeText={text => handleInputChange(text, 'password')}
            secureTextEntry={!newPasswordVisible}
          />
          <TouchableOpacity onPress={() => setNewPasswordVisible(!newPasswordVisible)}>
            <Icon
              name={newPasswordVisible ? "eye" : "eye-off"}
              size={20}
              color="#979797"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('GetStarted')}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080705',
  },
  formContainer: {
    flex: 1,
    marginTop: 20,
    margin: 10,
  },
  continueButton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#333333',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    height: 48,
    justifyContent: 'center',
    width: '100%',
  },
  continueButtonText: {},
  input: {
    backgroundColor: '#191919',
    height: 56,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: 'white',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#191919',
    borderRadius: 8,
    marginVertical: 10,
    height: 56,
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 10,
  },
});

export default UpdatePassword;
