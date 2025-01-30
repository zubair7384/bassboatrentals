import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import Header from '../../components/Header';
import boatImage from '../../assets/images/bbr_rect.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import OwnerBoatInfo from '../../components/OwnerBoatInfo';
import OwnerBoatReviews from '../../components/OwnerBoatReviews';
import OwnerCalendar from '../../components/OwnerCalendar';
import OwnerBoatFeatures from '../../components/OwnerBoatFeatures';
import mail_icon from '../../assets/icons/mail_icon.png';

import {getListingByID} from '../../firebase/firebaseUtils';
import {useRoute} from '@react-navigation/native';
import {getUserData} from '../../utils/storage';
import {getDatabase, ref, remove} from 'firebase/database';
import Ship_Icon from '../../assets/icons/ship_img.png';

const MyboatsDetails = ({navigation, onDelete}) => {
  const [isFeatures, setIsFeatures] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [isBoatAvailable, setIsBoatAvailable] = useState(false);
  const [isReview, setIsReview] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [listing, setListing] = useState([]);
  const route = useRoute();
  const {id} = route.params || {};

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUserData();
      if (userData) {
        setUserData(userData);
        // console.log('User saved Dataaaa: ', userData);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    if (!id) {
      console.error('Error: No Boat ID provided');
      return;
    }

    const fetchListingDetails = async () => {
      try {
        const details = await getListingByID(id);

        if (details) {
          setListing(details);
        } else {
          console.error('No listing found for the given ID:', id);
        }
      } catch (error) {
        console.error('Error fetching listing details:', error);
      }
    };

    fetchListingDetails();
  }, [id]);

  const handleDeleteListing = useCallback(async () => {
    try {
      const database = getDatabase();
      const listingRef = ref(database, `listings/${id}`);
      await remove(listingRef);
      console.log(listingRef, 'listingRef');

      onDelete(id);
    } catch (error) {
      console.log(error);
    }
  }, [id, onDelete]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="View Details"
        navigation={navigation}
        editBtn={'edit'}
        onPress={() => navigation.navigate('EditMyboat', {id})}
      />
      <ScrollView style={styles.scrollviewStyle}>
        {userData?.role === 'Boat Owner' ? (
          <>
            <TouchableOpacity
              style={styles.availabilityButton}
              onPress={() =>
                navigation.navigate('BoatManageAvailability', {id})
              }>
              <Text style={styles.availabilityButtonText}>
                Manage Availability
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.removeButton}
              // onPress={handleDeleteListing}>

              onPress={() => setModalVisible(true)}>
              <Text style={styles.removeButtonText}>Remove Boat</Text>
            </TouchableOpacity>
          </>
        ) : userData?.role === 'Renter' ? (
          <TouchableOpacity
            style={styles.bookNowButton}
            onPress={() => navigation.navigate('Booking')}>
            <Image source={mail_icon} style={styles.mailIcon} />
            <Text style={styles.bookNowButtonText}>Book Now</Text>
          </TouchableOpacity>
        ) : null}

        <Image
          source={boatImage}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <Text style={styles.boatName}>{listing?.listingTitle}</Text>
        <Text style={styles.boatCategory}>{listing?.boatType}</Text>
        <Text style={styles.boatCategory}>
          96 Beach Walk Blvd #205, Conroe, TX 77304, USA
        </Text>
        <View style={styles.model}>
          <Text style={styles.modelText}>{listing?.model}</Text>
        </View>
        <Text
          style={styles.boatCategory}>{`1 - ${listing?.capacity} people`}</Text>

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
              <OwnerBoatFeatures listing={listing} />
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
              <OwnerBoatInfo listing={listing} />
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

        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>
                  Are you sure you want to remove this boat?
                </Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Icons name="close-circle-outline" size={28} color="#fff" />
                </TouchableOpacity>
              </View>
              <Image source={Ship_Icon} style={styles.shipIcon} />

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.cancelBtn}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.availabilityButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.removeBtn}
                  onPress={() => {
                    handleDeleteListing();
                    navigation.navigate('Myboats');
                  }}>
                  <Text style={styles.removeBtnText}>Yes, remove it</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
  availabilityButton: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
    justifyContent: 'center',
    gap: 10,
  },
  removeButton: {
    flexDirection: 'row',
    backgroundColor: '#F64949',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
    justifyContent: 'center',
    gap: 10,
  },
  removeButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    height: 24,
    textAlignVertical: 'center',
  },
  bookNowButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    height: 24,
    textAlignVertical: 'center',
  },
  availabilityButtonText: {
    fontSize: 16,
    color: '#111',
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    height: 24,
    textAlignVertical: 'center',
  },
  mailIcon: {
    width: 20,
    height: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#111',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#fff',
    width: 300,
    marginRight: 10,
    lineHeight: 32,
    fontFamily: 'knultrial-regular',
  },
  shipIcon: {
    width: 160,
    height: 160,
    objectFit: 'contain',
    alignSelf: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  removeBtn: {
    backgroundColor: '#F64949',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'center',
    flex: 1,
  },
  cancelBtn: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'center',
    flex: 1,
  },
  removeBtnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    height: 24,
    textAlignVertical: 'center',
  },
});

export default MyboatsDetails;
