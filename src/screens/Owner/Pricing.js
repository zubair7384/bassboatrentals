import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import Header from '../../components/Header';

const Pricing = ({navigation}) => {
  const pricingData = [
    {
      title: 'Hourly rental',
      price: '$100',
      description: 'Take it with you by adding the trailer package',
    },
    {
      title: '8 Hours',
      price: '$400',
      description: 'Take it with you by adding the trailer package',
    },
    {
      title: '1 Day (24 hours)',
      price: '$400',
      description: 'Take it with you by adding the trailer package',
    },
    {title: '2 Days (48 hours)', price: '$600'},
    {title: '3 Days (72 hours)', price: '$700'},
    {title: '4 Days (96 hours)', price: '$800'},
    {title: '5 Days (120 hours)', price: '$900'},
    {title: '6 Days (144 hours)', price: '$1000'},
    {title: 'Trailer package required for overnight rentals', price: '$100'},
    {title: 'Boat Delivery and collection', price: 'Price By Boat Owner'},
    {title: 'Fishing Guide / Captain', price: 'Price By Boat Owner'},
    {
      title:
        'MOTOR HOURS (rental includes 1 hour per day, additional hours are extra)',
      price: '$50',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Pricing'} navigation={navigation} />
      <ScrollView style={styles.content}>
        {pricingData.map((item, index) => (
          <View key={index} style={styles.pricingItem}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            {item.description && (
              <Text style={styles.description}>{item.description}</Text>
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
  pricingItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#D4D4D4',
    paddingVertical: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#A1A1A1',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'knultrial-regular',
  },
  price: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    color: '#5B5B5B',
    fontSize: 14,
    marginTop: 5,
    lineHeight: 18,
  },
});

export default Pricing;
