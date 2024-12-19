import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';

const SignUpScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Create an account" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => setSelectedOption('rent')}>
            <Icon
              name={
                selectedOption === 'rent'
                  ? 'radio-button-on'
                  : 'radio-button-off'
              }
              size={24}
              color="#191919"
              style={styles.radioButton}
            />
            <Text style={styles.optionText}>I'm here to Rent</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            onPress={() => setSelectedOption('list')}>
            <Icon
              name={
                selectedOption === 'list'
                  ? 'radio-button-on'
                  : 'radio-button-off'
              }
              size={24}
              color="#191919"
              style={styles.radioButton}
            />
            <Text style={styles.optionText}>I'm here to list my boat</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080705',
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  optionsContainer: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    borderRadius: 12,
    borderColor: '#191919',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  radioButton: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  btn: {
    position: 'absolute',
    bottom: 50,
    left: 10,
    right: 10,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    color: '#111111',
    fontWeight: '500',
  },
});

export default SignUpScreen;
