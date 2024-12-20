import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Header from '../../components/Header';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/dimensions';
import {INCOME_TAX, TERMS_CONDITIONS} from '../../strings/en';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RegisterAsBoatOwnerDetails = ({navigation}) => {
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] = useState('');
  const [ssn, setSsn] = useState('');
  const [federalId, setFederalId] = useState('');
  const [progress, setProgress] = useState(new Animated.Value(0.5));
  const [isChecked, setIsChecked] = useState(false); // State to toggle the check icon

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Register as Boat Owner" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.progressBarContainer}>
          <Animated.View style={[styles.progressBar, {width: progressWidth}]} />
        </View>
        <View style={styles.form}>
          <View>
            <Text style={styles.incomeTax}>{INCOME_TAX}</Text>
          </View>
          <TextInput
            placeholder="Address Line 1"
            style={styles.input}
            placeholderTextColor={'#979797'}
            value={address1}
            onChangeText={setAddress1}
          />
          <TextInput
            placeholder="Address Line 2"
            style={styles.input}
            placeholderTextColor={'#979797'}
            value={address2}
            onChangeText={setAddress2}
          />
          <TextInput
            placeholder="City"
            style={styles.input}
            placeholderTextColor={'#979797'}
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            placeholder="State/Province"
            style={styles.input}
            placeholderTextColor={'#979797'}
            value={state}
            onChangeText={setState}
          />
          <TextInput
            placeholder="Zip Code"
            style={styles.input}
            placeholderTextColor={'#979797'}
            value={zipcode}
            onChangeText={setZipcode}
          />
          <TextInput
            placeholder="Country"
            style={styles.input}
            placeholderTextColor={'#979797'}
            value={country}
            onChangeText={setCountry}
          />
          <TextInput
            placeholder="Social Security Number (XXX-XX-XXXX)"
            style={styles.input}
            placeholderTextColor={'#979797'}
            value={ssn}
            onChangeText={setSsn}
          />
          <TextInput
            placeholder="Federal ID (EIN) (XX-XXXXXXX)"
            style={styles.input}
            placeholderTextColor={'#979797'}
            value={federalId}
            onChangeText={setFederalId}
          />
          <View style={styles.termsContainer}>
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => setIsChecked(!isChecked)}>
              {isChecked && <Icon name="check" size={15} color="#111" />}
            </TouchableOpacity>
            <Text style={styles.terms}>{TERMS_CONDITIONS}</Text>
          </View>
          <View style={styles.btnRow}>
            <TouchableOpacity
              style={styles.btnPrev}
              onPress={() => navigation.navigate('RegisterOwnerDetails')}>
              <Text style={styles.btnText}>Previous</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnSubmit}
              onPress={() => navigation.navigate('GetStarted')}>
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080705',
  },
  scrollContainer: {
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    flexGrow: 1,
  },
  progressBarContainer: {
    height: 10,
    width: '100%',
    backgroundColor: '#191919',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
  },
  form: {
    marginBottom: SCREEN_HEIGHT * 0.05,
  },
  input: {
    flex: 1,
    backgroundColor: '#191919',
    height: SCREEN_HEIGHT * 0.065,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: SCREEN_HEIGHT * 0.015,
    color: 'white',
    justifyContent: 'center',
  },
  btnPrev: {
    flex: 1,
    backgroundColor: '#FCEACE',
    height: SCREEN_HEIGHT * 0.065,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: SCREEN_HEIGHT * 0.015,
    color: 'white',
    justifyContent: 'center',
  },
  btnSubmit: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: SCREEN_HEIGHT * 0.065,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: SCREEN_HEIGHT * 0.015,
    color: 'white',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    fontFamily: 'KnulTrial-Regular',
    textAlign: 'center',
    fontWeight: '300',
  },
  incomeTax: {
    fontSize: 12,
    color: '#979797',
  },
  terms: {
    color: '#979797',
    fontSize: 12,
    flex: 1,
    fontFamily: 'KnulTrial-Regular',
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
  btnRow: {
    flexDirection: SCREEN_WIDTH > 360 ? 'row' : 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
    width: '100%',
  },
});

export default RegisterAsBoatOwnerDetails;
