import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Header from '../../components/Header';

const Booking = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Booking'} />
      <View>
        <Text>Send a Booking Inquiry</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default Booking;
