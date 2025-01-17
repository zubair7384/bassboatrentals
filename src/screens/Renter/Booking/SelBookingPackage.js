import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../components/Header';
import {SEL_PACKAGE} from '../../../strings/en';

const SelBookingPackage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Booking'} navigation={navigation} />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Select Packages</Text>
          <Text style={styles.title}>{'Estimate: $0'}</Text>
        </View>
        <Text style={styles.introText}>{SEL_PACKAGE}</Text>
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
            onPress={() => navigation.navigate('BookingTimeDate')}
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
  introContainer: {
    alignItems: 'center',
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

export default SelBookingPackage;
