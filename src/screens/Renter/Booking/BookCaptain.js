import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../components/Header';
import {CAPTAIN_NOTE} from '../../../strings/en';

const BookCaptain = ({navigation}) => {
  const [isCaptainNeeded, setIsCaptainNeeded] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Booking" navigation={navigation} />

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.groupSizeText}>Group Size</Text>
          <Text style={styles.totalText}>Total: 03</Text>
        </View>

        <Text style={styles.questionText}>
          Do you need a Captain for the Boat?
        </Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setIsCaptainNeeded(true)}>
            <View
              style={[
                styles.radioButton,
                isCaptainNeeded === true && styles.radioButtonSelected,
              ]}
            />
            <Text style={styles.radioText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setIsCaptainNeeded(false)}>
            <View
              style={[
                styles.radioButton,
                isCaptainNeeded === false && styles.radioButtonSelected,
              ]}
            />
            <Text style={styles.radioText}>No</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.noteText}>{CAPTAIN_NOTE}</Text>
      </View>

      <View style={styles.btnRow}>
        <TouchableOpacity
          style={styles.btnPrev}
          onPress={() => navigation.goBack()}
          accessible={true}
          accessibilityLabel="Go back to home">
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => navigation.navigate('BookingAnythingElse')}
          accessible={true}
          accessibilityLabel="Go to next step">
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    padding: 20,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  groupSizeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
    lineHeight: 24,
  },
  totalText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
    lineHeight: 24,
  },
  questionText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 20,
    lineHeight: 24,
    fontFamily: 'knultrial-regular',
  },
  radioContainer: {
    marginBottom: 20,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioButton: {
    width: 14,
    height: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioButtonSelected: {
    backgroundColor: '#FFFFFF',
  },
  radioText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
  },
  noteText: {
    color: '#A1A1A1',
    fontSize: 12,
    fontStyle: 'italic',
  },
  btnRow: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 10,
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
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default BookCaptain;
