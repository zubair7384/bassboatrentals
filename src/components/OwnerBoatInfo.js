import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OwnerBoatInfo = ({listing}) => {
  return (
    <View>
      <View>
        <Text style={styles.title}>Motor Details</Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>{listing?.motorMake}</Text>
            <Text style={styles.cardText}>Mercury</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Model</Text>
            <Text style={styles.cardText}>{listing?.motorModel}</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Year</Text>
            <Text style={styles.cardText}>{listing?.motorYear}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Trolling Motor</Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Make</Text>
            <Text style={styles.cardText}>{listing?.trollingMotorMake}</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Year</Text>
            <Text style={styles.cardText}>{listing?.trollingMotorYear}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Trailer Details</Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Make</Text>
            <Text style={styles.cardText}>{listing?.trailerMake}</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Model</Text>
            <Text style={styles.cardText}>{listing?.trollingMotorModel}</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Year</Text>
            <Text style={styles.cardText}>{listing?.trollingMotorYear}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Shallow Water Anchors</Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Number</Text>
            <Text style={styles.cardText}>{listing?.shallowWaterAnchors}</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Brand & Model</Text>
            <Text style={styles.cardText}>
              {listing?.shallowWaterAnchorBrandModel}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>FFS - Forward Facing Sonar</Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Make</Text>
            <Text style={styles.cardText}>{listing?.ffsMake}</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Model</Text>
            <Text style={styles.cardText}>{listing?.ffsModel}</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Year</Text>
            <Text style={styles.cardText}>{listing?.ffsYear}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Graph (Make, Model & Year)</Text>
        <View style={styles.cardGraphContainer}>
          <View style={styles.cardTextGraph}>
            <Text style={styles.cardText}>Graph 1 Make - Model - Year</Text>
            <Text
              style={
                styles.cardText
              }>{`${listing?.graph1Make} - ${listing?.graph1Model} - ${listing?.graph1Year}`}</Text>
          </View>
          <View style={styles.cardTextGraph}>
            <Text style={styles.cardText}>Graph 2 Make - Model - Year</Text>
            <Text
              style={
                styles.cardText
              }>{`${listing?.graph2Make} - ${listing?.graph2Model} - ${listing?.graph2Year}`}</Text>
          </View>
          <View style={styles.cardTextGraph}>
            <Text style={styles.cardText}>Graph 3 Make - Model - Year</Text>
            <Text
              style={
                styles.cardText
              }>{`${listing?.graph3Make} - ${listing?.graph3Model} - ${listing?.graph3Year}`}</Text>
          </View>
          <View style={styles.cardTextGraph}>
            <Text style={styles.cardText}>Graph 4 Make - Model - Year</Text>
            <Text
              style={
                styles.cardText
              }>{`${listing?.graph4Make} - ${listing?.graph4Model} - ${listing?.graph4Year}`}</Text>
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
    height: 24,
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
    height: 24,
  },
});

export default OwnerBoatInfo;
