import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Header from '../../components/Header';
import ChatTab from '../../components/ChatTab';

const Inbox = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Inbox'} navigation={navigation} />
      <ChatTab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },

});

export default Inbox;
