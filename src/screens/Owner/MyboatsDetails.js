import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header';
import boatImage from '../../assets/images/bbr_rect.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import OwnerBoatInfo from '../../components/OwnerBoatInfo';
import OwnerBoatReviews from '../../components/OwnerBoatReviews';
import OwnerCalendar from '../../components/OwnerCalendar';
import OwnerBoatFeatures from '../../components/OwnerBoatFeatures';
import mail_icon from '../../assets/icons/mail_icon.png';

const MyboatsDetails = ({navigation}) => {
  const [isFeatures, setIsFeatures] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [isBoatAvailable, setIsBoatAvailable] = useState(false);
  const [isReview, setIsReview] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="View Details" navigation={navigation} />
      <ScrollView style={styles.scrollviewStyle}>
        <TouchableOpacity
          style={styles.bookNowButton}
          onPress={() => {
            navigation.navigate('Booking');
          }}>
          <Image source={mail_icon} style={styles.mailIcon} />
          <Text style={styles.bookNowButtonText}>Book Now</Text>
        </TouchableOpacity>
        <Image
          source={boatImage}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <Text style={styles.boatName}>Phoenix 921 Elite</Text>
        <Text style={styles.boatCategory}>Bass Boat</Text>
        <Text style={styles.boatCategory}>
          96 Beach Walk Blvd #205, Conroe, TX 77304, USA
        </Text>
        <View style={styles.model}>
          <Text style={styles.modelText}>2020 PHOENIIX 921 ELITE</Text>
        </View>
        <Text style={styles.boatCategory}>3 Guests Capacity</Text>

        <View style={styles.collapseContainer}>
          <TouchableOpacity
            style={styles.collapseHeader}
            onPress={() => setIsFeatures(!isFeatures)}>
            <Text style={styles.collapseTitle}>Features & Details</Text>
            <Icon
              name={isFeatures ? 'angle-up' : 'angle-down'}
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
          {isFeatures && (
            <View style={styles.collapseContent}>
              <OwnerBoatFeatures />
            </View>
          )}
        </View>

        <View style={styles.collapseContainer}>
          <TouchableOpacity
            style={styles.collapseHeader}
            onPress={() => setIsInfo(!isInfo)}>
            <Text style={styles.collapseTitle}>Additional Boat Info</Text>
            <Icon
              name={isInfo ? 'angle-up' : 'angle-down'}
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
          {isInfo && (
            <View style={styles.collapseContent}>
              <OwnerBoatInfo />
            </View>
          )}
        </View>

        <View style={styles.collapseContainer}>
          <TouchableOpacity
            style={styles.collapseHeader}
            onPress={() => setIsBoatAvailable(!isBoatAvailable)}>
            <Text style={styles.collapseTitle}>Boat Availability</Text>
            <Icon
              name={isBoatAvailable ? 'angle-up' : 'angle-down'}
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
          {isBoatAvailable && (
            <View style={styles.collapseContent}>
              <OwnerCalendar />
            </View>
          )}
        </View>

        <View style={styles.collapseContainer}>
          <TouchableOpacity
            style={styles.collapseHeader}
            onPress={() => setIsReview(!isReview)}>
            <Text style={styles.collapseTitle}>Reviews</Text>
            <Icon
              name={isReview ? 'angle-up' : 'angle-down'}
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
          {isReview && (
            <View style={styles.collapseContent}>
              <OwnerBoatReviews />
            </View>
          )}
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
  scrollviewStyle: {
    padding: 10,
  },
  bannerImage: {
    width: '100%',
    height: 132,
    borderRadius: 8,
  },
  boatName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    marginTop: 10,
    height: 24,
  },
  boatCategory: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    marginTop: 10,
    height: 24,
  },
  model: {
    borderWidth: 1,
    borderTopColor: '#4D4D4D',
    borderBottomColor: '#4D4D4D',
    marginTop: 20,
    paddingVertical: 20,
  },
  modelText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    height: 24,
  },
  collapseContainer: {
    marginTop: 20,
    borderRadius: 8,
  },
  collapseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderBottomColor: '#4D4D4D',
    paddingVertical: 10,
  },
  collapseTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
  },
  collapseContent: {
    marginTop: 10,
  },
  collapseText: {
    color: '#aaa',
    fontSize: 14,
    lineHeight: 20,
  },
  bookNowButton: {
    flexDirection: 'row',
    backgroundColor: '#6161FC',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'center',
    gap: 10,
  },
  bookNowButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    height: 24,
    textAlignVertical: 'center',
  },
  mailIcon: {
    width: 20,
    height: 16,
  },
});

export default MyboatsDetails;
