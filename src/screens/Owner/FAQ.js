import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import Header from '../../components/Header';

const FAQ = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Frequently Asked Questions'} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <View>
          <Text style={styles.title}>FAQ....</Text>
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
    fontWeight: '700',
    lineHeight: 19,
    marginVertical: 10,
    borderWidth: 1,
    borderBottomColor: '#D4D4D4',
    paddingBottom: 10,
  },
});

export default FAQ;
