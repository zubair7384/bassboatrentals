import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OwnerBoatInfo = () => {
  return (
    <View>
      <View>
        <Text style={styles.title}>Motor Details</Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Make</Text>
            <Text style={styles.cardText}>Mercury</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Model</Text>
            <Text style={styles.cardText}>250 Pro XS</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Year</Text>
            <Text style={styles.cardText}>2020</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Trolling Motor</Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Make</Text>
            <Text style={styles.cardText}>Master</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Year</Text>
            <Text style={styles.cardText}>2020</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Trailer Details Details</Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Make</Text>
            <Text style={styles.cardText}>MINN KOTA</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Model</Text>
            <Text style={styles.cardText}>ULTREX</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Year</Text>
            <Text style={styles.cardText}>2020</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Shallow Water Anchors</Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Number</Text>
            <Text style={styles.cardText}>No</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Brand & Model</Text>
            <Text style={styles.cardText}>Power Pole Blade 8FT</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>FFS - Forward Facing Sonar</Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Make</Text>
            <Text style={styles.cardText}>Lowrance</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Model</Text>
            <Text style={styles.cardText}>Active Target 2</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Year</Text>
            <Text style={styles.cardText}>2022</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Graph (Make, Model & Year)</Text>
        <View style={styles.cardGraphContainer}>
          <View style={styles.cardTextGraph}>
            <Text style={styles.cardText}>Graph 1 Make - Model - Year</Text>
            <Text style={styles.cardText}>Lowrance - HDS Live 12 - 2020</Text>
          </View>
          <View style={styles.cardTextGraph}>
            <Text style={styles.cardText}>Graph 2 Make - Model - Year</Text>
            <Text style={styles.cardText}>Lowrance - HDS Live 12 - 2020</Text>
          </View>
          <View style={styles.cardTextGraph}>
            <Text style={styles.cardText}>Graph 3 Make - Model - Year</Text>
            <Text style={styles.cardText}>Lowrance - HDS Live 12 - 2020</Text>
          </View>
          <View style={styles.cardTextGraph}>
            <Text style={styles.cardText}>Graph 4 Make - Model - Year</Text>
            <Text style={styles.cardText}>Lowrance - HDS Live 12 - 2020</Text>
          </View>
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
  },
  cardContainer: {
    height: 72,
    width: '100%',
    backgroundColor: '#333333',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardGraphContainer: {
    height: 312,
    width: '100%',
    backgroundColor: '#333333',
    borderRadius: 8,
    flexDirection: 'column',
    padding: 10,
  },
  cardTextGraph: {
    marginVertical: 10,
  },
  cardTextContainer: {
    marginHorizontal: 10,
  },
  cardText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    margin: 2,
  },
});

export default OwnerBoatInfo;
