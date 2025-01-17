import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../../../components/Header';
import {CHOSE_TIMEDATE} from '../../../strings/en';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BookingTimeDate = ({navigation}) => {
  const [inputStates, setInputStates] = useState({});
  const handleInputChange = (text, inputName) => {
    setInputStates(prevState => ({
      ...prevState,
      [inputName]: text.trim(),
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Booking'} navigation={navigation} />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Pickup & Drop off Date/Time'}</Text>
          <Text style={styles.title}>{'Estimate: $0'}</Text>
        </View>
        <Text style={styles.introText}>{CHOSE_TIMEDATE}</Text>

        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>Pickup Date</Text>
          <View style={styles.input}>
            <TextInput
              style={styles.inputText}
              placeholder="MM/DD/YYYY"
              placeholderTextColor={'#979797'}
              onChangeText={text => handleInputChange(text, 'email')}
            />
            <Icon name="calendar-month-outline" size={24} color="#fff" />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputText}
              placeholder="hh:mm aa"
              placeholderTextColor={'#979797'}
              onChangeText={text => handleInputChange(text, 'email')}
            />
            <Icon name="clock-time-three-outline" size={24} color="#fff" />
          </View>
          <Text style={styles.subtitle}>Drop Off</Text>
          <View style={styles.input}>
            <TextInput
              style={styles.inputText}
              placeholder="MM/DD/YYYY"
              placeholderTextColor={'#979797'}
              onChangeText={text => handleInputChange(text, 'email')}
            />
            <Icon name="calendar-month-outline" size={24} color="#fff" />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputText}
              placeholder="hh:mm aa"
              placeholderTextColor={'#979797'}
              onChangeText={text => handleInputChange(text, 'email')}
            />
            <Icon name="clock-time-three-outline" size={24} color="#fff" />
          </View>
        </View>

        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.btnPrev}
            // onPress={backToHome}
            accessible={true}
            accessibilityLabel="Go back to home">
            <Text style={styles.btnText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNext}
            onPress={() => navigation.navigate('BookingGroupSize')}
            accessible={true}
            accessibilityLabel="Go to next step">
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  formContainer: {
    marginVertical: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 20,
    fontWeight: '500',
    lineHeight: 24,
    fontFamily: 'knultrial-regul  ar',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    lineHeight: 24,
    fontFamily: 'knultrial-regul  ar',
  },
  introText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
    lineHeight: 24,
  },
  imageIcon: {
    height: 80,
    width: 80,
    marginVertical: 40,
  },
  continueButton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    height: 48,
    justifyContent: 'center',
    width: '100%',
    marginHorizontal: 20,
  },
  continueButtonText: {
    color: '#111',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
    lineHeight: 24,
  },
  input: {
    flexDirection: 'row',
    backgroundColor: '#191919',
    height: 56,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    color: '#fff',
  },
  btnRow: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    gap: 10,
  },
  btnPrev: {
    flex: 1,
    backgroundColor: '#FCEACE',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNext: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookingTimeDate;
