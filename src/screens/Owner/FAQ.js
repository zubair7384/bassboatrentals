import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import { faqData } from '../../strings/en';

const FAQ = ({ navigation }) => {
  const [activeSections, setActiveSections] = useState([]);

  const toggleSection = (index) => {
    if (activeSections.includes(index)) {
      setActiveSections(activeSections.filter((i) => i !== index));
    } else {
      setActiveSections([...activeSections, index]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Frequently Asked Questions'} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <Text style={styles.title}>FAQ</Text>
        {faqData.map((item, index) => (
          <View key={index} style={styles.faqItem}>
            <TouchableOpacity onPress={() => toggleSection(index)} style={styles.question}>
              <Text style={styles.questionText}>{item.question}</Text>
              <Text style={styles.toggleIcon}>
                {activeSections.includes(index) ? '-' : '+'}
              </Text>
            </TouchableOpacity>
            {activeSections.includes(index) && (
              <View style={styles.answer}>
                <Text style={styles.answerText}>{item.answer}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'knultrial-regular',
    fontWeight: '700',
    lineHeight: 22,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D4D4D4',
    paddingBottom: 10,
    marginTop: 20
  },
  faqItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#D4D4D4',
    marginBottom: 10,
    paddingBottom: 10,
  },
  question: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  questionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  toggleIcon: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  answer: {
    marginTop: 5,
  },
  answerText: {
    color: '#aaa',
    fontSize: 14,
    lineHeight: 18,
  },
});

export default FAQ;
