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
import {INCOME_TAX, TERMS_CONDITIONS, COUNTRIES} from '../../strings/en';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import {Dropdown} from 'react-native-element-dropdown';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

const RegisterAsBoatOwner = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [inputStates, setInputStates] = useState({});
  const progress = useRef(new Animated.Value(0)).current;
  const [profilePicture, setProfilePicture] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0].value);
  const [phoneNumber, setPhoneNumber] = useState('');

  const totalInputs = 15;

  const [filledInputs, setFilledInputs] = useState(0);

  const handleInputChange = (text, inputName) => {
    setInputStates(prevState => ({
      ...prevState,
      [inputName]: text.trim(),
    }));
  };

  useEffect(() => {
    const filledCount = Object.values(inputStates).filter(
      value => value !== '',
    ).length;
    const progressPercentage = filledCount / totalInputs;
    Animated.timing(progress, {
      toValue: progressPercentage,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [inputStates]);

  const handleChooseFile = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      response => {
        if (response?.assets?.length) {
          setProfilePicture(response.assets[0]);
        } else if (response.errorMessage) {
          console.error('Image Picker Error:', response.errorMessage);
        }
      },
    );
  };

  const sections = [
    {
      id: 0,
      content: (
        <>
          <Text style={styles.textTaxStyle}>{INCOME_TAX}</Text>
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
            <TouchableOpacity onPress={handleChooseFile}>
              <View style={styles.choseFile}>
                {profilePicture ? (
                  <Text style={styles.choseFileText} numberOfLines={1}>
                    {profilePicture.fileName || 'Selected File'}
                  </Text>
                ) : (
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
          <View style={[styles.inputRow, {alignItems: 'center'}]}>
            {/* Age Input */}
            <TextInput
              placeholder="Age"
              style={[styles.inputHalf, {flex: 0.2, minWidth: 60}]}
              placeholderTextColor={'#979797'}
              onChangeText={text => handleInputChange(text, 'age')}
            />

            <Dropdown
              style={[styles.dropdown, {flex: 0.2, minWidth: 60}]}
              data={COUNTRIES}
              // labelField="label"
              // valueField="value"
              // value={selectedCountry.value}
              onChange={item => {
                setSelectedCountry(item);
                setPhoneNumber(item.value);
              }}
              renderLeftIcon={() => (
                <Image
                  source={{uri: selectedCountry.flag}}
                  style={styles.flag}
                />
              )}
              renderItem={item => (
                <View style={styles.item}>
                  <Image source={{uri: item.flag}} style={styles.flag} />
                </View>
              )}
            />

            {/* Phone Number Input */}
            <TextInput
              style={[styles.phoneInput, {flex: 0.6}]}
              placeholder="Enter phone number"
              placeholderTextColor="#979797"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={text =>
                setPhoneNumber(
                  selectedCountry.value +
                    text.replace(selectedCountry.value, ''),
                )
              }
            />
          </View>
        </>
      ),
    },
    {
      id: 1,
      content: (
        <>
          {/* <TextInput
            placeholder="Company Name"
            style={styles.input}
            placeholderTextColor={'#979797'}
            onChangeText={text => handleInputChange(text, 'companyName')}
          /> */}
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
        contentContainerStyle={styles.scrollContainer}
        scrollEnabled={false}>
        {sections.map(section => (
          <View key={section.id} style={styles.sectionContainer}>
            {section.content}
          </View>
        ))}
      </ScrollView>

      {/* Navigation Buttons */}
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
            onPress={() => navigation.navigate('GetStarted')}
            disabled={!isChecked}>
            <Text style={styles.btnText}>Submit</Text>
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
    paddingBottom: 40,
  },
  sectionContainer: {
    height: SCREEN_HEIGHT * 0.6,
    justifyContent: 'center',
    paddingHorizontal: 10,
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
    justifyContent: 'space-between',
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
    color: 'white',
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
    minWidth: 100,
    maxWidth: '70%',
    justifyContent: 'center',
    alignItems: 'center',
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
  dropdown: {
    backgroundColor: '#191919',
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  phoneInput: {
    backgroundColor: '#191919',
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 10,
    color: 'white',
  },
  flag: {
    width: 32,
    height: 24,
    borderRadius: 4,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },

  itemText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default RegisterAsBoatOwner;
