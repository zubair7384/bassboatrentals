import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import {FORGOT_PASSWORD_TEXT, FORGOT_PASSWORD} from '../../strings/en';

const ForgotPassword = ({navigation}) => {
  const [inputStates, setInputStates] = useState({});

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
        <Text style={styles.title}>{FORGOT_PASSWORD}</Text>
        <Text style={styles.subtitle}>{FORGOT_PASSWORD_TEXT}</Text>

        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor={'#979797'}
          onChangeText={text => handleInputChange(text, 'email')}
        />

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('ForgotPswdOTP')}>
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
  input: {
    backgroundColor: '#191919',
    height: 56,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: 'white',
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
    marginVertical: 10,
    fontWeight: '500',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 24,
    fontFamily: 'knultrial-regular',
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#B4B4B4',
    marginVertical: 10,
    fontWeight: '500',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 24,
    fontFamily: 'knultrial-regular',
    paddingHorizontal: 20,
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
});

export default ForgotPassword;
