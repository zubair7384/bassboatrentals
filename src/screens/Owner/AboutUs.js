import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';
import {
  ABOUT_US,
  bassFishingText,
  SERVICES_LIST,
  bookingPlatform,
  rentalBoatExpect,
} from '../../strings/en';
import serviceBoat from '../../assets/images/services_boat.png';
import bbrBanner from '../../assets/images/bbrBanner.png';
import blackBoat from '../../assets/images/black_boat.png';
import AboutUsCard from '../../components/AboutUsCard';

const AboutUs = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'About Us'} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.aboutus}>{ABOUT_US}</Text>
          <Text style={styles.title}>OUR SERVICES INCLUDE</Text>
          <Text style={styles.services}>{SERVICES_LIST}</Text>
          <AboutUsCard
            image={serviceBoat}
            title={'Take it with you!'}
            subTitle={bassFishingText}
          />
          <AboutUsCard
            image={bbrBanner}
            title={'Tournament ready!'}
            subTitle={bookingPlatform}
          />
          <AboutUsCard
            image={blackBoat}
            title={'What To Expect From Your Rental Boat'}
            subTitle={rentalBoatExpect}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  aboutus: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'knultrial-regular',
    fontWeight: '400',
    lineHeight: 24,
  },
  scrolllView: {
    flex: 1,
  },
  content: {
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'knultrial-regular',
    fontWeight: '500',
    lineHeight: 24,
    marginVertical: 10,
  },
  services: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'knultrial-regular',
    fontWeight: '400',
    lineHeight: 24,
  },
});

export default AboutUs;
