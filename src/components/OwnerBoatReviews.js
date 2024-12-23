import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RatingStar from './ratingStar';
import Pagination from './Pagination';

const OwnerBoatReviews = () => {
  const [ratingFromDatabase, setRatingFromDatabase] = useState(0);

  // Simulate fetching rating value from a database
  useEffect(() => {
    setTimeout(() => {
      const fetchedRating = 4; // Example fetched rating value
      setRatingFromDatabase(fetchedRating);
    }, 1000); // Simulate a 1-second delay
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.firstReviewContainer}>
        <Text style={styles.perName}>Sharon Fields</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingStarContainer}>
            <View style={styles.star}>
              <RatingStar
                totalStars={5}
                value={ratingFromDatabase}
                isReadOnly={true}
                title={'Communication'}
              />
              <RatingStar
                totalStars={5}
                value={ratingFromDatabase}
                isReadOnly={true}
                title={'Itinerary & Experience'}
              />
              <RatingStar
                totalStars={5}
                value={ratingFromDatabase}
                isReadOnly={true}
                title={'Value'}
              />
            </View>
            <View style={styles.star}>
              <RatingStar
                totalStars={5}
                value={ratingFromDatabase}
                isReadOnly={true}
                title={'Departure & Return'}
              />
              <RatingStar
                totalStars={5}
                value={ratingFromDatabase}
                isReadOnly={true}
                title={'Listing Accuracy'}
              />
              <RatingStar
                totalStars={5}
                value={ratingFromDatabase}
                isReadOnly={true}
                title={'Vessel & Equipment'}
              />
            </View>
          </View>
          <Text style={styles.ratingDesc}>
            We have rented this bass boat a couple of times already and have
            been absolutely pleased and impressed with it. The owner, Neil, has
            gone above and beyond in making sure our rentals go smoothly. I
            highly recommend BBR! We are already scheduled to rent this boat 4
            more times this spring!
          </Text>
        </View>
      </View>
      <View style={styles.secReviewContainer}>
        <Text style={styles.perName}>Sharon Fields</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingStarContainer}>
            <View style={styles.star}>
              <RatingStar
                totalStars={5}
                value={ratingFromDatabase}
                isReadOnly={true}
                title={'Communication'}
              />
              <RatingStar
                totalStars={5}
                value={ratingFromDatabase}
                isReadOnly={true}
                title={'Itinerary & Experience'}
              />
              <RatingStar
                totalStars={5}
                value={ratingFromDatabase}
                isReadOnly={true}
                title={'Value'}
              />
            </View>
            <View style={styles.star}>
              <RatingStar
                totalStars={5}
                value={ratingFromDatabase}
                isReadOnly={true}
                title={'Departure & Return'}
              />
              <RatingStar
                totalStars={5}
                value={ratingFromDatabase}
                isReadOnly={true}
                title={'Listing Accuracy'}
              />
              <RatingStar
                totalStars={5}
                value={ratingFromDatabase}
                isReadOnly={true}
                title={'Vessel & Equipment'}
              />
            </View>
          </View>
          <Text style={styles.ratingDesc}>
            We have rented this bass boat a couple of times already and have
            been absolutely pleased and impressed with it. The owner, Neil, has
            gone above and beyond in making sure our rentals go smoothly. I
            highly recommend BBR! We are already scheduled to rent this boat 4
            more times this spring!
          </Text>
        </View>
        <View style={styles.paginationContainer}>
          <Pagination totalPages={3} currentPage={1} onPageChange={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#000',
    flex: 1,
  },
  firstReviewContainer: {
    borderBottomColor: '#4D4D4D',
    borderWidth: 1,
    paddingVertical: 20,
  },
  secReviewContainer: {
    paddingVertical: 20,
  },
  perName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
    fontFamily: 'KnulTrial-Regular',
  },
  ratingContainer: {
    marginTop: 20,
  },
  ratingStarContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  star: {
    gap: 10,
  },
  ratingDesc: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    marginTop: 10,
  },
  paginationContainer: {
    height: 37,
    marginVertical: 20,
  },
});

export default OwnerBoatReviews;
