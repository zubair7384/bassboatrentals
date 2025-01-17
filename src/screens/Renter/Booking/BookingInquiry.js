import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../components/Header';
import {BOOKINGTEXT} from '../../../strings/en';
import bookingIntroIcon from '../../../assets/icons/bookingIntro_icon.png';

const Booking = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Booking'} navigation={navigation} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Send a Booking Inquiry</Text>
        <View style={styles.introContainer}>
          <Image source={bookingIntroIcon} style={styles.imageIcon} />
          <Text style={styles.introText}>{BOOKINGTEXT}</Text>
        </View>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('selPackageBooking')}>
          <Text style={styles.continueButtonText}>Next</Text>
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
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 20,
    fontWeight: '500',
    lineHeight: 24,
    fontFamily: 'knultrial-regular',
  },
  introContainer: {
    alignItems: 'center',
  },
  introText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'knultrial-regular',
    textAlign: 'center',
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
});

export default Booking;
