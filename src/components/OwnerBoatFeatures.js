import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const OwnerBoatFeatures = () => {
  return (
    <View>
      <Text style={styles.title}>Boat Details</Text>
      <View style={styles.cardContainer}>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardText}>Make</Text>
          <Text style={styles.cardText}>Phoenix</Text>
        </View>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardText}>Model</Text>
          <Text style={styles.cardText}>921 Elite</Text>
        </View>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardText}>Year</Text>
          <Text style={styles.cardText}>2020</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.listTextContainer}>
          <Icon name="dot-single" size={24} color="white" />
          <Text style={styles.listText}>Standard AGM Cranking Battery</Text>
        </View>
        <View style={styles.listTextContainer}>
          <Icon name="dot-single" size={24} color="white" />
          <Text style={styles.listText}>
            Standard AGM Trolling Motor Batteries
          </Text>
        </View>
        <View style={styles.listTextContainer}>
          <Icon name="dot-single" size={24} color="white" />
          <Text style={styles.listText}>Pedestal Butt Seat Rear</Text>
        </View>
        <View style={styles.listTextContainer}>
          <Icon name="dot-single" size={24} color="white" />
          <Text style={styles.listText}>Life jackets/required safety gear</Text>
        </View>
        <View style={styles.listTextContainer}>
          <Icon name="dot-single" size={24} color="white" />
          <Text style={styles.listText}>Live Wells</Text>
        </View>
        <View style={styles.listTextContainer}>
          <Icon name="dot-single" size={24} color="white" />
          <Text style={styles.listText}>Live well Oxygenators</Text>
        </View>
        <View style={styles.listTextContainer}>
          <Icon name="dot-single" size={24} color="white" />
          <Text style={styles.listText}>Landing Net</Text>
        </View>
        <View style={styles.listTextContainer}>
          <Icon name="dot-single" size={24} color="white" />
          <Text style={styles.listText}>Deck Lights</Text>
        </View>
        <View style={styles.listTextContainer}>
          <Icon name="dot-single" size={24} color="white" />
          <Text style={styles.listText}>Working Audible Horn</Text>
        </View>
        <View style={styles.listTextContainer}>
          <Icon name="dot-single" size={24} color="white" />
          <Text style={styles.listText}>Whistle</Text>
        </View>
        <View style={styles.listTextContainer}>
          <Icon name="dot-single" size={24} color="white" />
          <Text style={styles.listText}>PFD</Text>
        </View>
        <View style={styles.listTextContainer}>
          <Icon name="dot-single" size={24} color="white" />
          <Text style={styles.listText}>Fire Extinguisher</Text>
        </View>
        <View style={styles.listTextContainer}>
          <Icon name="dot-single" size={24} color="white" />
          <Text style={styles.listText}>Ice Storage Cooler</Text>
        </View>
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
