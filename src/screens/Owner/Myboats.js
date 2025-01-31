import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import BoatCard from '../../components/BoatCard';
import boat_img from '../../assets/images/bbr_rect.png';
import plus_icon from '../../assets/icons/plus.png';
import {getListingByUserID} from '../../firebase/firebaseUtils';
import {useAuth} from '../../firebase/AuthContext';

import {getUserData} from '../../utils/storage';

const Myboats = ({navigation, route}) => {
  const [listings, setListings] = useState([]);
  const auth = useAuth();
  const [userData, setUserData] = useState(null);

  // Fetch User Data Once
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserData();
      if (data) {
        setUserData(data);
      }
    };
    fetchUserData();
  }, []);

  const fetchListings = React.useCallback(async () => {
    if (!auth?.currentUser?.uid && !userData?.uid) return;

    try {
      const Boatlistings = await getListingByUserID(
        auth?.currentUser?.uid || userData?.uid,
      );
      setListings(Boatlistings);

      // console.log('My Boats Screen Data: ', Boatlistings);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  }, [auth?.currentUser?.uid, userData?.uid]);

  useEffect(() => {
    if (userData) {
      fetchListings();
    }
  }, [fetchListings, userData]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const {deletedId} = route.params || {};

      if (deletedId) {
        setListings(prevListings =>
          prevListings.filter(boat => boat.id !== deletedId),
        );

        navigation.setParams({deletedId: null});
      } else {
        await fetchListings();
      }
    });

    return unsubscribe;
  }, [navigation, route.params, fetchListings]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Boats</Text>
      </View>

      <FlatList
        data={listings}
        keyExtractor={boat => boat?.id?.toString()}
        renderItem={({item}) => (
          <BoatCard
            title={item?.listingTitle}
            subtitle={`1 - ${item?.capacity} people`}
            cardColor="#ADCB4D"
            customIcon={boat_img}
            width={86}
            height={86}
            rate={`${item?.pricing} / Hour`}
            onPressViewDetail={() =>
              navigation.navigate('MyboatsDetails', {id: item?.id})
            }
            listingId={item?.id}
          />
        )}
        ListFooterComponent={
          <TouchableOpacity
            style={styles.addBoat}
            onPress={() => navigation.navigate('AddBoat')}>
            <Image source={plus_icon} />
            <Text style={styles.addBoatText}>Add New Boats</Text>
          </TouchableOpacity>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    width: '100%',
  },
  header: {
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    textAlign: 'center',
    lineHeight: 48,
  },
  addBoat: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#191919',
    borderStyle: 'dotted',
    height: 64,
    width: '100%',
    marginTop: 10,
  },
  addBoatText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    textAlignVertical: 'center',
    paddingHorizontal: 10,
  },
});

export default Myboats;
