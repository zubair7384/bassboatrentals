import React, { useState } from 'react';
import {
  View, StyleSheet, SafeAreaView, Text, FlatList, TouchableOpacity, Modal,
  Pressable, Image
} from 'react-native';
import SearchBar from '../../components/Searchbar';
import SliderCard from '../../components/SliderCard';
import NearbyCard from '../../components/NearbyCard';
import Icon from 'react-native-vector-icons/Ionicons';
import calendar_icon from '../../assets/icons/calendar_icon.png';
import internet_icon from '../../assets/icons/internet_icon.png';
import ship_icon from '../../assets/icons/ship_icon.png';
import star_icon from '../../assets/icons/star_icon.png';
import FilterHeader from '../../components/FilterHeader';
import FilterCalendar from '../../components/FilterCalendar';

const RenterHome = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showLocationPanel, setShowLocationPanel] = useState(false);
  const [showTypePanel, setShowTypePanel] = useState(false);
  const [showFeaturesPanel, setShowFeaturesPanel] = useState(false);


  const data = [
    { id: '1', title: 'Card 1' },
    { id: '2', title: 'Card 2' },
    { id: '3', title: 'Card 3' },
    { id: '4', title: 'Card 4' },
  ];

  const renderPopularItem = ({ item }) => {
    return (
      <View style={{ marginRight: 20 }}>
        <SliderCard key={item.id} />
      </View>
    );
  };

  const renderNearByItem = ({ item }) => <NearbyCard key={item.id} />;

  const sortOptions = [
    'By Date',
    'By Location',
    'By Type',
    'By Features',
  ];

  const handleSort = (option) => {
    setSelectedSort(option);
    if (option === 'By Date') {
      setShowCalendar(true);
      setShowLocationPanel(false);
      setShowTypePanel(false);
      setShowFeaturesPanel(false);
    } else if (option === 'By Location') {
      setShowLocationPanel(true);
      setShowCalendar(false);
      setShowTypePanel(false);
      setShowFeaturesPanel(false);
    } else if (option === 'By Type') {
      setShowTypePanel(true);
      setShowCalendar(false);
      setShowLocationPanel(false);
      setShowFeaturesPanel(false);
    } else if (option === 'By Features') {
      setShowFeaturesPanel(true);
      setShowCalendar(false);
      setShowLocationPanel(false);
      setShowTypePanel(false);
    }
  };


  const handleBack = () => {
    setShowCalendar(false);
    setShowLocationPanel(false);
    setShowTypePanel(false);
    setShowFeaturesPanel(false);
  };


  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onPress={() => setModalVisible(true)} />
      <View>
        <Text style={styles.title}>Popular</Text>
        <View>
          <FlatList
            data={data}
            renderItem={renderPopularItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Nearby</Text>
          <Text style={styles.title}>View All</Text>
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={renderNearByItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)} >
        <View style={styles.modalContainer}>
          <View style={styles.fakeBlurBackground} />
          <View style={styles.modalContent}>
            {!showCalendar && !showLocationPanel && !showTypePanel && !showFeaturesPanel && (
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Find a Boat</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Icon name="close-circle-outline" size={28} color="white" />
                </TouchableOpacity>
              </View>
            )}

            {/* Show Filter Options */}
            {!showCalendar && !showLocationPanel && !showTypePanel && !showFeaturesPanel && sortOptions.map((option, index) => (
              <Pressable
                key={index}
                style={[
                  styles.sortOption,
                  selectedSort === option && styles.selectedSortOption,
                ]}
                onPress={() => handleSort(option)} >
                <View style={styles.sortOptionContainer}>
                  {option === 'By Date' && <Image source={calendar_icon} style={styles.iconImage} />}
                  {option === 'By Location' && <Image source={internet_icon} style={styles.iconImage} />}
                  {option === 'By Type' && <Image source={ship_icon} style={styles.iconImage} />}
                  {option === 'By Features' && <Image source={star_icon} style={styles.iconImage} />}
                  <Text style={styles.sortOptionText}>{option}</Text>
                </View>
              </Pressable>
            ))}

            {/* Hide Find a Boat and Find Your Boat buttons if filter options are shown */}
            {showCalendar && (
              <View style={styles.calendarContainer}>
                <FilterHeader title="By Date" onPressBack={handleBack} onPressClose={() => setModalVisible(false)} />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <FilterCalendar />
                </View>
                <TouchableOpacity style={styles.applyButton}>
                  <Text style={styles.applyButtonText}>Add Date</Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Show the panels based on selection */}
            {showLocationPanel && (
              <View style={styles.locationContainer}>
                <FilterHeader title="By Date" onPressBack={handleBack} onPressClose={() => setModalVisible(false)} />
                <Text style={styles.locationTitle}>Select Location</Text>
                {/* Insert Location panel content */}

              </View>
            )}

            {showTypePanel && (
              <View style={styles.typeContainer}>
                <FilterHeader title="By Date" onPressBack={handleBack} onPressClose={() => setModalVisible(false)} />
                <Text style={styles.typeTitle}>Select Type</Text>
                {/* Insert Type panel content */}

              </View>
            )}

            {showFeaturesPanel && (
              <View style={styles.featuresContainer}>
                <FilterHeader title="By Date" onPressBack={handleBack} onPressClose={() => setModalVisible(false)} />
                <Text style={styles.featuresTitle}>Select Features</Text>
                {/* Insert Features panel content */}

              </View>
            )}

            {/* Show Find Your Boat button only when no filter panel is shown */}
            {!showCalendar && !showLocationPanel && !showTypePanel && !showFeaturesPanel && (
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Find your Boat</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontFamily: 'KnulTrial-Regular',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 40,
    color: '#fff',
    height: 40,
    marginTop: 20,
  },
  flatListContent: {
    paddingVertical: 10,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  fakeBlurBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  modalContent: {
    backgroundColor: '#111111',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    height: 30,
    marginTop: 30
  },
  sortOption: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
  },
  sortOptionText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'KnulTrial-Regular',
    fontWeight: '500',
    height: 24,
    textAlignVertical: 'center',
    paddingTop: 2,
  },
  applyButton: {
    backgroundColor: '#333333',
    paddingVertical: 15,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    height: 24,
    textAlignVertical: 'center'
  },
  sortOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconImage: {
    height: 24,
    width: 24
  },
  selectedSortOption: {
    // borderWidth: 2,
    // borderColor: '#fff',
  },
  calendarContainer: {
    marginTop: 20,
  },
  calendarTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  locationContainer: {
    marginTop: 20,
  },
  locationTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  typeContainer: {
    marginTop: 20,
  },
  typeTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  featuresContainer: {
    marginTop: 20,
  },
  featuresTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default RenterHome;
