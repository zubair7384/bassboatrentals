import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import Header from '../../components/Header';
import {TERMS_CONDITIONS, COUNTRIES} from '../../strings/en';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Dropdown} from 'react-native-element-dropdown';
import {launchImageLibrary} from 'react-native-image-picker';

import {getDatabase, ref, set} from 'firebase/database';
import {useAuth} from '../../firebase/AuthContext';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

import {useFormik} from 'formik';
import {registerValidationSchema} from '../../utils/validationSchemas';

const RegisterAsBoatOwner = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [inputStates, setInputStates] = useState({});
  const [profilePicture, setProfilePicture] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0].value);
  const [phoneNumber, setPhoneNumber] = useState('');

  const progress = useRef(new Animated.Value(0)).current;
  const db = getDatabase();

  // const storage = getStorage();

  const {signup} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const serverUrl = 'https://www.bbrbassboatrentals.com';

  const uploadProfilePicture = async () => {
    if (!profilePicture) {
      console.error('No profile picture selected');
      return null;
    }

    try {
      // Convert the image to a Blob
      const response = await fetch(profilePicture.uri);
      const blob = await response.blob();

      // Create FormData and append the Blob
      const formData = new FormData();
      formData.append('file', blob);

      console.log('Uploading to:', `${serverUrl}/upload-featured-image`);
      console.log('FormData:', formData);

      // Upload to the server
      const serverResponse = await fetch(`${serverUrl}/upload-featured-image`, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Server Response:', serverResponse);

      if (serverResponse.ok) {
        const responseData = await serverResponse.json();
        console.log('Image uploaded successfully:', responseData);
        return `${serverUrl}/images/${responseData.file_name}`;
      } else {
        console.error('Image upload failed', serverResponse.status);
        return null;
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  useEffect(() => {
    const progressPercentage = (currentStep + 1) / sections?.length;
    Animated.timing(progress, {
      toValue: progressPercentage,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [currentStep, progress, sections?.length]);

  useEffect(() => {
    scrollViewRef.current?.scrollTo({y: 0, animated: true});
  }, [currentStep]);

  const handleImagePick = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0];
        setProfilePicture(selectedImage);
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      age: '',
      zipCode: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      country: '',
      ssn: '',
      federalId: '',
      referalCode: '',
    },
    validationSchema: registerValidationSchema,
    onSubmit: async values => {
      if (!isChecked) return;
      setLoading(true);

      try {
        const userCredential = await signup(values.email, values.password);
        const userId = userCredential.user.uid;

        const userRef = ref(db, `users/${userId}`);

        console.log('Firebase Database Path:', userRef);

        await set(userRef, {
          ...values,
          phone: phoneNumber,
          countryCode: selectedCountry,
          role: 'Boat Owner',
        });

        // Log the Firebase user object to inspect available links
        console.log('Registered User:', userCredential.user);

        console.log('Registration User Data:  ', userCredential);

        navigation.navigate('GetStarted');
      } catch (err) {
        console.error(err.message);
        setError(err.message || 'Failed to register');
      } finally {
        setLoading(false);
      }
    },
  });

  const handleInputChange = (text, inputName) => {
    setInputStates(prevState => ({
      ...prevState,
      [inputName]: text.trim(),
    }));
  };

  const sections = [
    {
      id: 0,
      fields: [
        'firstName',
        'lastName',
        'email',
        'password',
        'referalCode',
        'age',
      ], // Step 1 fields
      content: (
        <>
          <View style={styles.inputRow}>
            <View style={{flex: 1}}>
              <TextInput
                placeholder="First Name"
                style={styles.inputHalf}
                placeholderTextColor={'#979797'}
                onChangeText={formik.handleChange('firstName')}
                onBlur={formik.handleBlur('firstName')}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <Text style={styles.error}>{formik.errors.firstName}</Text>
              )}
            </View>

            <View style={{flex: 1}}>
              <TextInput
                placeholder="Last Name"
                style={styles.inputHalf}
                placeholderTextColor={'#979797'}
                onChangeText={formik.handleChange('lastName')}
                onBlur={formik.handleBlur('lastName')}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <Text style={styles.error}>{formik.errors.lastName}</Text>
              )}
            </View>
          </View>
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor={'#979797'}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <Text style={styles.error}>{formik.errors.email}</Text>
          )}

          <View style={styles.choseFileContainer}>
            <Text style={styles.choseFileTitle}>Profile Picture</Text>
            <TouchableOpacity onPress={handleImagePick}>
              <View style={styles.choseFile}>
                {profilePicture ? (
                  <Text style={styles.choseFileText}>
                    {profilePicture.fileName}
                  </Text>
                ) : (
                  // <View style={styles.imageContainer}>
                  //   <Image
                  //     source={{uri: profilePicture.uri}}
                  //     style={{width: 50, height: 50, borderRadius: 25}}
                  //   />
                  // </View>
                  <Text style={styles.choseFileText}>Choose File</Text>
                )}
              </View>
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="Password"
            style={styles.input}
            placeholderTextColor={'#979797'}
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            value={formik.values.password}
          />

          {formik.touched.password && formik.errors.password && (
            <Text style={styles.error}>{formik.errors.password}</Text>
          )}

          <View>
            <TextInput
              placeholder="Referal Code"
              style={styles.input}
              placeholderTextColor={'#979797'}
              onChangeText={formik.handleChange('referalCode')}
              onBlur={formik.handleBlur('referalCode')}
              value={formik.values.referalCode}
            />
            {formik.touched.referalCode && formik.errors.referalCode && (
              <Text style={styles.error}>{formik.errors.referalCode}</Text>
            )}
          </View>

          <View style={styles.inputRow}>
            <View>
              <TextInput
                placeholder="Age"
                style={[styles.inputHalf, {flex: 0.1}]}
                placeholderTextColor={'#979797'}
                onChangeText={formik.handleChange('age')}
                onBlur={formik.handleBlur('age')}
                value={formik.values.age}
              />
              {formik.touched.age && formik.errors.age && (
                <Text style={styles.error}>{formik.errors.age}</Text>
              )}
            </View>

            <View style={styles.phoneInputContainer}>
              <Dropdown
                style={styles.dropdown}
                data={COUNTRIES}
                // labelField="label"
                valueField="value"
                value={selectedCountry}
                onChange={item => {
                  setSelectedCountry(item.value);
                  setPhoneNumber(item.value);
                }}
                renderLeftIcon={() => (
                  <Image
                    source={{
                      uri: COUNTRIES.find(c => c.value === selectedCountry)
                        ?.flag,
                    }}
                    style={styles.flag}
                  />
                )}
                renderItem={item => (
                  <View style={styles.item}>
                    <Image source={{uri: item.flag}} style={styles.flag} />
                  </View>
                )}
              />

              <TextInput
                style={styles.inputPhoneStyle}
                placeholder="Enter phone number"
                placeholderTextColor="#979797"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={text =>
                  setPhoneNumber(
                    selectedCountry + text.replace(selectedCountry, ''),
                  )
                }
              />
            </View>
          </View>
        </>
      ),
    },
    {
      id: 1,
      fields: [
        'addressLine1',
        'addressLine2',
        'city',
        'state',
        'zipCode',
        'country',
        'ssn',
        'federalId',
      ], // Step 2 fields
      content: (
        <>
          <View>
            <TextInput
              placeholder="Address Line 1"
              style={styles.input}
              placeholderTextColor={'#979797'}
              onChangeText={formik.handleChange('addressLine1')}
              onBlur={formik.handleBlur('addressLine1')}
              value={formik.values.addressLine1}
            />
            {formik.touched.addressLine1 && formik.errors.addressLine1 && (
              <Text style={styles.error}>{formik.errors.addressLine1}</Text>
            )}
          </View>
          <View>
            <TextInput
              placeholder="Address Line 2"
              style={styles.input}
              placeholderTextColor={'#979797'}
              onChangeText={formik.handleChange('addressLine2')}
              onBlur={formik.handleBlur('addressLine2')}
              value={formik.values.addressLine2}
            />
            {formik.touched.addressLine2 && formik.errors.addressLine2 && (
              <Text style={styles.error}>{formik.errors.addressLine2}</Text>
            )}
          </View>
          <View>
            <TextInput
              placeholder="City"
              style={styles.input}
              placeholderTextColor={'#979797'}
              onChangeText={formik.handleChange('city')}
              onBlur={formik.handleBlur('city')}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city && (
              <Text style={styles.error}>{formik.errors.city}</Text>
            )}
          </View>
          <View>
            <TextInput
              placeholder="State/Province"
              style={styles.input}
              placeholderTextColor={'#979797'}
              onChangeText={formik.handleChange('state')}
              onBlur={formik.handleBlur('state')}
              value={formik.values.state}
            />
            {formik.touched.state && formik.errors.state && (
              <Text style={styles.error}>{formik.errors.state}</Text>
            )}
          </View>
          <View>
            <TextInput
              placeholder="Zip Code"
              style={styles.input}
              placeholderTextColor={'#979797'}
              onChangeText={formik.handleChange('zipCode')}
              onBlur={formik.handleBlur('zipCode')}
              value={formik.values.zipCode}
            />
            {formik.touched.zipCode && formik.errors.zipCode && (
              <Text style={styles.error}>{formik.errors.zipCode}</Text>
            )}
          </View>

          <View>
            <TextInput
              placeholder="Country"
              style={styles.input}
              placeholderTextColor={'#979797'}
              onChangeText={formik.handleChange('country')}
              onBlur={formik.handleBlur('country')}
              value={formik.values.country}
            />
            {formik.touched.country && formik.errors.country && (
              <Text style={styles.error}>{formik.errors.country}</Text>
            )}
          </View>
          <View>
            <TextInput
              placeholder="Social Security Number (XXX-XX-XXXX)"
              style={styles.input}
              placeholderTextColor={'#979797'}
              onChangeText={formik.handleChange('ssn')}
              onBlur={formik.handleBlur('ssn')}
              value={formik.values.ssn}
            />
            {formik.touched.ssn && formik.errors.ssn && (
              <Text style={{color: 'red', fontSize: 12}}>
                {formik.errors.ssn}
              </Text>
            )}
          </View>
          <View>
            <TextInput
              placeholder="Federal ID (EIN) (XX-XXXXXXX)"
              style={styles.input}
              placeholderTextColor={'#979797'}
              onChangeText={formik.handleChange('federalId')}
              onBlur={formik.handleBlur('federalId')}
              value={formik.values.federalId}
            />
            {formik.touched.federalId && formik.errors.federalId && (
              <Text style={styles.error}>{formik.errors.federalId}</Text>
            )}
          </View>
          <View style={styles.termsContainer}>
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => setIsChecked(!isChecked)}>
              {isChecked && <Icon name="check" size={15} color="#111" />}
            </TouchableOpacity>
            <Text style={styles.terms}>{TERMS_CONDITIONS}</Text>
          </View>
        </>
      ),
    },
  ];

  const scrollToStep = step => {
    scrollViewRef.current.scrollTo({
      y: step * SCREEN_HEIGHT * 0.6,
      animated: true,
    });
  };

  const handleNext = () => {
    if (currentStep < sections.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      scrollToStep(nextStep);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      const previousStep = currentStep - 1;
      setCurrentStep(previousStep);
      scrollToStep(previousStep);
    }
  };

  const handleSubmit = async () => {
    formik.validateForm().then(errors => {
      if (Object.keys(errors).length === 0) {
        formik.handleSubmit();
      } else {
        formik.setTouched({
          firstName: true,
          lastName: true,
          email: true,
          password: true,
          age: true,
          zipCode: true,
          addressLine1: true,
          addressLine2: true,
          city: true,
          state: true,
          country: true,
          ssn: true,
          federalId: true,
        });
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Register as Boat Owner" navigation={navigation} />
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.ScrollViewContainer}
        showsVerticalScrollIndicator={true}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled">
        <View style={styles.sectionContainer}>
          {sections[currentStep].content}
        </View>
      </ScrollView>

      <View style={styles.btnRow}>
        {currentStep > 0 && (
          <TouchableOpacity style={styles.btnPrev} onPress={handlePrevious}>
            <Text style={styles.btnText}>Previous</Text>
          </TouchableOpacity>
        )}
        {currentStep < sections.length - 1 ? (
          <TouchableOpacity
            style={[
              styles.btnNext,
              {
                opacity: sections[currentStep].fields.some(
                  field => formik.errors[field] && formik.touched[field],
                )
                  ? 0.5
                  : 1,
              },
            ]}
            onPress={handleNext}
            disabled={sections[currentStep].fields.some(
              field => formik.errors[field] && formik.touched[field],
            )}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[
              styles.btnSubmit,
              {opacity: isChecked && !formik.isSubmitting ? 1 : 0.5},
            ]}
            onPress={handleSubmit}
            disabled={!isChecked || loading || formik.isSubmitting}>
            <Text style={styles.btnText}>
              {loading ? 'Submitting...' : 'Submit'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 10,
    backgroundColor: '#191919',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
  },

  textTaxStyle: {
    color: '#979797',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    height: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#080705',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  sectionContainer: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    backgroundColor: '#191919',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: 'white',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  inputHalf: {
    backgroundColor: '#191919',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: 'white',
    flex: 1,
  },
  choseFileTitle: {
    color: '#979797',
  },
  choseFileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#191919',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  choseFile: {
    backgroundColor: '#242424',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    marginVertical: 5,
  },
  choseFileText: {
    color: '#979797',
    fontSize: 14,
  },

  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  btnPrev: {
    flex: 1,
    backgroundColor: '#FCEACE',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  btnNext: {
    flex: 1,
    backgroundColor: '#272727',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSubmit: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#111',
    fontSize: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  iconWrapper: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
  },
  terms: {
    color: '#979797',
    fontSize: 12,
    flex: 1,
    fontFamily: 'KnulTrial-Regular',
  },

  phoneInput: {
    backgroundColor: '#191919',
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 10,
    color: 'white',
  },
  phoneInputContainer: {
    width: '100%',
    backgroundColor: '#191919',
    borderRadius: 8,
    height: 50,
    marginVertical: 10,
    flex: 0.9,
    flexDirection: 'row',
  },
  dropdown: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#242424',
    flex: 0.2,
    borderRadius: 8,
  },
  flag: {
    width: 24,
    height: 18,
    borderRadius: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  itemText: {
    color: '#111111',
    fontSize: 16,
  },

  inputPhoneStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    color: 'white',
    height: '100%',
    paddingLeft: 10,
  },
  error: {color: 'red', fontSize: 12},
});

export default RegisterAsBoatOwner;
