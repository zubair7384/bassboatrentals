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

// import {
//   getStorage,
//   ref as storageRef,
//   uploadBytes,
//   getDownloadURL,
// } from 'firebase/storage';

import {getDatabase, ref, set} from 'firebase/database';
import {useAuth} from '../../firebase/AuthContext';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
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
  const role = '';

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

  const handleInputChange = (text, inputName) => {
    setInputStates(prevState => ({
      ...prevState,
      [inputName]: text.trim(),
    }));
  };

  const handleSubmit = async () => {
    if (!isChecked) return;

    setLoading(true);
    setError('');

    try {
      const userCredential = await signup(
        inputStates.email,
        inputStates.password,
      );
      const userId = userCredential.user.uid;

      let profilePictureUrl = null;
      // if (profilePicture) {
      //   profilePictureUrl = await uploadProfilePicture();
      // }

      const userRef = ref(db, `users/${userId}`);
      console.log('Response DB: ', userRef);
      await set(userRef, {
        firstName: inputStates.firstName,
        lastName: inputStates.lastName,
        email: inputStates.email,
        phone: phoneNumber,
        countryCode: selectedCountry,
        age: inputStates.age,
        avatar: 'Not worked yet',
        referalCode: inputStates.referalCode || null,
        password: inputStates.password,
        addressLine1: inputStates.addressLine1,
        addressLine2: inputStates.addressLine2,
        city: inputStates.city,
        state: inputStates.state,
        zipCode: inputStates.zipCode,
        socialSecurityNumber: inputStates.ssn,
        fID: inputStates.federalId,
        country: inputStates.country,
        role: 'Boat Owner"',
      });

      navigation.navigate('GetStarted');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to register');
    } finally {
      setLoading(false);
    }
  };

  const sections = [
    {
      id: 0,
      content: (
        <>
          <View style={styles.inputRow}>
            <TextInput
              placeholder="First Name"
              style={styles.inputHalf}
              placeholderTextColor={'#979797'}
              onChangeText={text => handleInputChange(text, 'firstName')}
            />
            <TextInput
              placeholder="Last Name"
              style={styles.inputHalf}
              placeholderTextColor={'#979797'}
              onChangeText={text => handleInputChange(text, 'lastName')}
            />
          </View>
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor={'#979797'}
            onChangeText={text => handleInputChange(text, 'email')}
          />

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
            onChangeText={text => handleInputChange(text, 'password')}
          />
          <TextInput
            placeholder="Referal Code"
            style={styles.input}
            placeholderTextColor={'#979797'}
            onChangeText={text => handleInputChange(text, 'referalCode')}
          />

          <View style={styles.inputRow}>
            <TextInput
              placeholder="Age"
              style={[styles.inputHalf, {flex: 0.1}]}
              placeholderTextColor={'#979797'}
              onChangeText={text => handleInputChange(text, 'age')}
            />

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
      content: (
        <>
          <TextInput
            placeholder="Address Line 1"
            style={styles.input}
            placeholderTextColor={'#979797'}
            onChangeText={text => handleInputChange(text, 'addressLine1')}
          />
          <TextInput
            placeholder="Address Line 2"
            style={styles.input}
            placeholderTextColor={'#979797'}
            onChangeText={text => handleInputChange(text, 'addressLine2')}
          />
          <TextInput
            placeholder="City"
            style={styles.input}
            placeholderTextColor={'#979797'}
            onChangeText={text => handleInputChange(text, 'city')}
          />
          <TextInput
            placeholder="State/Province"
            style={styles.input}
            placeholderTextColor={'#979797'}
            onChangeText={text => handleInputChange(text, 'state')}
          />
          <TextInput
            placeholder="Zip Code"
            style={styles.input}
            placeholderTextColor={'#979797'}
            onChangeText={text => handleInputChange(text, 'zipCode')}
          />

          <TextInput
            placeholder="Country"
            style={styles.input}
            placeholderTextColor={'#979797'}
            onChangeText={text => handleInputChange(text, 'country')}
          />
          <TextInput
            placeholder="Social Security Number (XXX-XX-XXXX)"
            style={styles.input}
            placeholderTextColor={'#979797'}
            onChangeText={text => handleInputChange(text, 'ssn')}
          />
          <TextInput
            placeholder="Federal ID (EIN) (XX-XXXXXXX)"
            style={styles.input}
            placeholderTextColor={'#979797'}
            onChangeText={text => handleInputChange(text, 'federalId')}
          />
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
            style={styles.btnNext}
            onPress={handleNext}
            accessible={true}
            accessibilityLabel="Go to next step">
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.btnSubmit, {opacity: isChecked ? 1 : 0.5}]}
            onPress={handleSubmit}
            disabled={!isChecked || loading}>
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
    // height: SCREEN_HEIGHT * 0.8,
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
});

export default RegisterAsBoatOwner;
