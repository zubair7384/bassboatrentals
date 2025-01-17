import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../components/Header';

const BookingAnythingElse = ({navigation}) => {
  const [comments, setComments] = useState('');
  const [isAcknowledged, setIsAcknowledged] = useState(false);
  const [isCancellationChecked, setIsCancellationChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Booking" navigation={navigation} />

      <View style={styles.content}>
        <Text style={styles.titleText}>{'Anything Else?'}</Text>

        <Text style={styles.questionText}>
          Do you have any specific needs or requests that the owner needs to
          know?
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="Comments (Optional)"
          placeholderTextColor="#A1A1A1"
          multiline
          numberOfLines={4}
          value={comments}
          onChangeText={setComments}
        />

        {/* Custom Acknowledgment Checkbox */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, isAcknowledged && styles.checkboxSelected]}
            onPress={() => setIsAcknowledged(!isAcknowledged)}
            accessible={true}
            accessibilityLabel="Acknowledge booking terms">
            {isAcknowledged && <Text style={styles.checkmark}>✔</Text>}
          </TouchableOpacity>
          <View style={styles.checkboxTextContainer}>
            <Text style={styles.checkboxText}>
              I acknowledge that the booking is subject to verification and
              could be cancelled if it's not approved.
              <Text style={styles.requiredText}>*</Text>
            </Text>
            <Text style={styles.subtext}>Applicable only for Bass Boats</Text>
          </View>
        </View>

        {/* Custom Cancellation Policy Checkbox */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[
              styles.checkbox,
              isCancellationChecked && styles.checkboxSelected,
            ]}
            onPress={() => setIsCancellationChecked(!isCancellationChecked)}
            accessible={true}
            accessibilityLabel="Acknowledge cancellation policy">
            {isCancellationChecked && <Text style={styles.checkmark}>✔</Text>}
          </TouchableOpacity>
          <View style={styles.checkboxTextContainer}>
            <Text style={styles.checkboxText}>
              Please check this box to acknowledge that you have read and agreed
              to the cancellation policy - refer to the{' '}
              <Text style={styles.linkText}>website</Text> for additional
              cancellation information{' '}
              <Text style={styles.requiredText}>*</Text>
            </Text>
          </View>
        </View>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.btnRow}>
        <TouchableOpacity
          style={styles.btnPrev}
          onPress={() => navigation.goBack()}
          accessible={true}
          accessibilityLabel="Go back to home">
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btnNext,
            !(isAcknowledged && isCancellationChecked) && styles.btnDisabled,
          ]}
          onPress={() => navigation.navigate('NextScreen')}
          disabled={!(isAcknowledged && isCancellationChecked)}
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
  titleText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
    fontFamily: 'knultrial-regular',
    lineHeight: 24,
  },
  questionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    fontFamily: 'knultrial-regular',
    lineHeight: 24,
  },
  textInput: {
    backgroundColor: '#1C1C1E',
    color: '#FFFFFF',
    fontSize: 14,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    height: 100,
    textAlignVertical: 'top',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: '#FFFFFF',
  },
  checkmark: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkboxTextContainer: {
    flex: 1,
  },
  checkboxText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
    lineHeight: 24,
  },
  requiredText: {
    color: '#FF0000',
  },
  subtext: {
    color: '#A1A1A1',
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 5,
    fontWeight: '400',
    // fontFamily: 'knultrial-regular',
  },
  linkText: {
    color: '#fff',
    textDecorationLine: 'underline',
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
  btnDisabled: {
    backgroundColor: '#A1A1A1',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default BookingAnythingElse;
