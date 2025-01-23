import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Feather';
import {auth} from '../../firebase/firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';

const LoginScreen = ({navigation}) => {
  const [inputStates, setInputStates] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (text, inputName) => {
    setInputStates(prevState => ({
      ...prevState,
      [inputName]: text.trim(),
    }));
  };

  const handleLogin = async () => {
    const {email, password} = inputStates;

    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      // console.log('User logged in:', userCredential.user);
      console.log('API Data:', JSON.stringify(userCredential.user, null, 2));
      Alert.alert('Success', `Welcome ${userCredential.user.email}`);
      navigation.navigate('RenterHome');
    } catch (error) {
      console.error('Login error:', error.message);
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Sign in'} navigation={navigation} />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor={'#979797'}
            onChangeText={text => handleInputChange(text, 'email')}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              style={styles.input}
              placeholderTextColor={'#979797'}
              onChangeText={text => handleInputChange(text, 'password')}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}>
              <Icon
                name={passwordVisible ? 'eye' : 'eye-off'}
                size={20}
                color="#979797"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleLogin}
          disabled={loading}>
          <Text style={styles.continueButtonText}>
            {loading ? 'Logging in...' : 'Continue'}
          </Text>
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
    margin: 10,
  },
  forgotPasswordText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 20,
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
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
    lineHeight: 24,
  },
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

export default LoginScreen;
