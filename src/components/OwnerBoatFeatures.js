import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const OwnerBoatFeatures = ({listing}) => {
  return (
    <View>
      <Text style={styles.title}>Boat Details</Text>
      <View style={styles.cardContainer}>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardText}>Make</Text>
          <Text style={styles.cardText}>{listing?.make}</Text>
        </View>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardText}>Model</Text>
          <Text style={styles.cardText}>{listing?.model}</Text>
        </View>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardText}>Year</Text>
          <Text style={styles.cardText}>{listing?.year}</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        {listing?.features?.map((list, index) => (
          <View key={index} style={styles.listTextContainer}>
            <Icon name="dot-single" size={24} color="white" />
            <Text style={styles.listText}>{list}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    marginVertical: 10,
    fontFamily: 'KnulTrial-Regular',
    height: 24,
  },
  cardTextContainer: {
    marginHorizontal: 10,
  },
  cardContainer: {
    height: 72,
    width: '100%',
    backgroundColor: '#333333',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    margin: 2,
    height: 24,
  },
  listContainer: {
    paddingVertical: 10,
    marginTop: 10,
  },
  listText: {
    color: 'white',
  },
  listTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default OwnerBoatFeatures;
