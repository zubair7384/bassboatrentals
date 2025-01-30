import React from 'react';
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

const Myboats = ({navigation}) => {
  const [listings, setListings] = React.useState([]);
  const auth = useAuth();
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUserData();
      if (userData) {
        setUserData(userData);
      }
    };
    fetchUserData();
  }, []);

  // console.log('User ID; ', userData?.uid);

  React.useEffect(() => {
    const fetchListings = async () => {
      try {
        const Boatlistings = await getListingByUserID(
          auth?.currentUser?.uid || userData?.uid,
        );
        setListings(Boatlistings);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };
    fetchListings();
  }, [auth?.currentUser?.uid, userData?.uid]);

  const handleDeleteListing = listingId => {
    setListings(prevListings =>
      prevListings.filter(boat => boat.id !== listingId),
    );
  };

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
            rate={`${item?.pricing?.hourlyRate} / Hour`}
            onPressViewDetail={() =>
              navigation.navigate('MyboatsDetails', {
                id: item?.id,
                onDelete: {handleDeleteListing},
              })
            }
            listingId={item?.id}
            onDelete={handleDeleteListing}
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
