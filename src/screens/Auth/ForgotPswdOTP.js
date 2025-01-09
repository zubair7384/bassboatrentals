import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';

const ForgotPswdOTP = ({navigation}) => {
  const [otp, setOtp] = useState(['-', '-', '-', '-', '-', '-']);
  const inputRefs = useRef([]);

  const handleOtpChange = (value, index) => {
    const otpCopy = [...otp];
    otpCopy[index] = value;
    setOtp(otpCopy);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join('');
    console.log('Entered OTP:', enteredOtp);
    navigation.navigate('NextScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Update Password'} navigation={navigation} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Verify your number</Text>
        <Text style={styles.subtitle}>Code sent to you at +1 7951 566 465</Text>

        <View style={styles.otpContainer}>
          {otp.map((_, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={value => handleOtpChange(value, index)}
              value={otp[index]}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('UpdatePassword')}>
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
  title: {
    fontSize: 20,
    color: '#FFFFFF',
    marginVertical: 10,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 24,
    fontFamily: 'knultrial-regular',
  },
  subtitle: {
    fontSize: 16,
    color: '#B4B4B4',
    marginVertical: 10,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 24,
    fontFamily: 'knultrial-regular',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  otpInput: {
    backgroundColor: '#191919',
    height: 56,
    width: 48,
    borderRadius: 8,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  continueButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#333333',
    borderRadius: 8,
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    width: '100%',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ForgotPswdOTP;
