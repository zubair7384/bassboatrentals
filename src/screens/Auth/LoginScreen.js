import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  Platform,
} from 'react-native';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Feather';
import {auth} from '../../firebase/firebaseConfig';
import {getUserByID} from '../../firebase/firebaseUtils';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useFormik} from 'formik';
import Toast from 'react-native-toast-message';
import {loginValidationSchema} from '../../utils/validationSchemas';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveToken, saveUserData} from '../../utils/storage';

const LoginScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const loadSavedCredentials = async () => {
      try {
        const savedCredentials = await AsyncStorage.getItem('userCredentials');
        if (savedCredentials) {
          const {email, password} = JSON.parse(savedCredentials);
          formik.setValues({email, password});
          setRememberMe(true);
        }
      } catch (error) {
        console.error('Failed to load saved credentials:', error);
      }
    };

    loadSavedCredentials();
  }, [formik, setRememberMe]);

  const saveCredentials = async (email, password) => {
    if (rememberMe) {
      try {
        await AsyncStorage.setItem(
          'userCredentials',
          JSON.stringify({email, password}),
        );
        console.log('Credentials saved');
      } catch (error) {
        console.error('Failed to save credentials:', error);
      }
    } else {
      await AsyncStorage.removeItem('userCredentials');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async values => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password,
        );

        const user = userCredential.user;
        const token = await user.getIdToken();
        const userDetails = await getUserByID(user?.uid);

        const userData = {
          uid: user?.uid,
          role: userDetails?.role,
          email: user.email,
          userType: values.email.includes('renter') ? 'renter' : 'owner',
          token: token,
        };

        await saveUserData(userData);
        await saveToken(token);

        console.log('User data stored:', userData);
        navigation.navigate('OwnerHome');
      } catch (error) {
        console.error('Login Error:', error);
      }
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Sign in'} navigation={navigation} />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor={'#979797'}
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {formik.touched.email && formik.errors.email && (
            <Text style={styles.errorText}>{formik.errors.email}</Text>
          )}

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              style={styles.input}
              placeholderTextColor={'#979797'}
              value={formik.values.password}
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
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
          {formik.touched.password && formik.errors.password && (
            <Text style={styles.errorText}>{formik.errors.password}</Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.rememberMeContainer}
          onPress={() => setRememberMe(!rememberMe)}>
          <Icon
            name={rememberMe ? 'check-square' : 'square'}
            size={20}
            color="#fff"
          />
          <Text style={styles.rememberMeText}>Remember Me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={formik.handleSubmit}>
          <Text style={styles.continueButtonText}>
            {formik.isSubmitting ? 'Logging in...' : 'Continue'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Toastify component with custom topOffset */}
      <Toast
        position="top"
        topOffset={Platform.OS === 'ios' ? 50 : 10} // Adjust top offset for iOS
      />
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  rememberMeText: {
    color: '#FFFFFF',
    marginLeft: 8,
    fontSize: 14,
  },
});

export default LoginScreen;
