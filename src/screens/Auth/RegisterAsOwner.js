import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/dimensions';

const RegisterAsBoatOwner = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referalCode, setReferalCode] = useState('');
  const [age, setAge] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Create an account" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.progressBar}>
          <Text style={styles.progressBarText}>Progress Bar</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Full Name"
              style={styles.input}
              placeholderTextColor={'#979797'}
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              placeholder="Last Name"
              style={styles.input}
              placeholderTextColor={'#979797'}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor={'#979797'}
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.choseFileContainer}>
            <Text style={styles.choseFileTitle}>Profile Picture</Text>
            <Text style={styles.choseFile}>Choose File</Text>
          </View>
          <TextInput
            placeholder="Password"
            style={styles.input}
            placeholderTextColor={'#979797'}
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            placeholder="Referal Code"
            style={styles.input}
            placeholderTextColor={'#979797'}
            value={referalCode}
            onChangeText={setReferalCode}
          />
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Age"
              style={styles.input}
              placeholderTextColor={'#979797'}
              value={age}
              onChangeText={setAge}
            />
            <TextInput
              placeholder="Dropdown"
              style={styles.input}
              placeholderTextColor={'#979797'}
            />
          </View>
          <TouchableOpacity style={styles.btnNext}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
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
    paddingVertical: SCREEN_HEIGHT * 0.02,
  },
  progressBar: {
    backgroundColor: 'orange',
    marginVertical: SCREEN_HEIGHT * 0.02,
    height: SCREEN_HEIGHT * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarText: {
    color: 'white',
    fontSize: SCREEN_HEIGHT * 0.02,
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
  inputRow: {
    flexDirection: SCREEN_WIDTH > 360 ? 'row' : 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
    width: '100%',
  },
  btnNext: {
    height: SCREEN_HEIGHT * 0.06,
    backgroundColor: '#272727',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SCREEN_HEIGHT * 0.02,
  },
  btnText: {
    fontSize: 16,
  },
  choseFileContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#191919',
    height: SCREEN_HEIGHT * 0.07,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: SCREEN_HEIGHT * 0.015,
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  choseFileTitle: {
    color: '#979797',
  },
  choseFile: {
    backgroundColor: '#242424',
    height: 32,
    width: 97,
    borderRadius: 3,
    color: '#979797',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default RegisterAsBoatOwner;
