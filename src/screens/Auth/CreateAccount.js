import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Header from '../../components/Header';

const SignUpScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleContinue = () => {
    if (!selectedOption) {
      Alert.alert('Error', 'Please select an option to continue!');
      return;
    }

    if (selectedOption === 'rent') {
      navigation.navigate('RegisterAsRenter');
    } else if (selectedOption === 'list') {
      navigation.navigate('RegisterAsOwner');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Create an account" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => setSelectedOption('rent')}>
            <View style={styles.radioOuterCircle}>
              {selectedOption === 'rent' && (
                <View style={styles.radioInnerCircle} />
              )}
            </View>
            <Text style={styles.optionText}>I'm here to Rent</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            onPress={() => setSelectedOption('list')}>
            <View style={styles.radioOuterCircle}>
              {selectedOption === 'list' && (
                <View style={styles.radioInnerCircle} />
              )}
            </View>
            <Text style={styles.optionText}>I'm here to list my boat</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btn} onPress={handleContinue}>
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
  radioOuterCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#555553',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#555553',
  },
  optionText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'KnulTrial-Regular',
    height: 24,
    textAlignVertical: 'center'
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
    fontFamily: 'KnulTrial-Regular',
    height: 24,
    textAlignVertical: 'center'
  },
});

export default SignUpScreen;
