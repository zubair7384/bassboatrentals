import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../../components/Header';
import {AGE_RESTRICTION, COUNTRIES} from '../../strings/en';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Dropdown} from 'react-native-element-dropdown';

const RegisterAsRenter = ({navigation}) => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [inputStates, setInputStates] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0].value);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputChange = (text, inputName) => {
    setInputStates(prevState => ({
      ...prevState,
      [inputName]: text.trim(),
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Register as a Renter" navigation={navigation} />
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="First Name"
            style={styles.inputHalf}
            placeholderTextColor={'#979797'}
            onChangeText=""
          />
          <TextInput
            placeholder="Last Name"
            style={styles.inputHalf}
            placeholderTextColor={'#979797'}
            onChangeText=""
          />
        </View>

        <View style={styles.choseFileContainer}>
          <Text style={styles.choseFileTitle}>Profile Picture</Text>
          <TouchableOpacity>
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
              labelField="label"
              valueField="value"
              value={selectedCountry}
              onChange={item => {
                setSelectedCountry(item.value); // Set the selected country value
                setPhoneNumber(item.value); // Update phone number prefix
              }}
              renderLeftIcon={() => (
                <Image
                  source={{
                    uri: COUNTRIES.find(c => c.value === selectedCountry)?.flag,
                  }}
                  style={styles.flag}
                />
              )}
              renderItem={item => (
                <View style={styles.item}>
                  <Image source={{uri: item.flag}} style={styles.flag} />
                  {/* <Text style={styles.itemText}>{item.label}</Text> */}
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

        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor={'#979797'}
          onChangeText=""
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          placeholderTextColor={'#979797'}
          onChangeText=""
        />
        <View style={styles.termsContainer}>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => setIsChecked(!isChecked)}>
            {isChecked && <Icon name="check" size={15} color="#111" />}
          </TouchableOpacity>
          <Text style={styles.terms}>{AGE_RESTRICTION}</Text>
        </View>

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => navigation.navigate('GetStarted')}>
          <Text style={styles.btnText}>Submit</Text>
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
  inputContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  inputRow: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
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
  input: {
    backgroundColor: '#191919',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: 'white',
  },
  termsContainer: {
    flexDirection: 'row',
    marginVertical: 20,
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
    fontSize: 14,
    flex: 1,
    fontFamily: 'KnulTrial-Regular',
    fontWeight: '500',
    lineHeight: 20,
  },
  btnSubmit: {
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  btnText: {
    color: '#111',
    fontSize: 16,
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

export default RegisterAsRenter;
