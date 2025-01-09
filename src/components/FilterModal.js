import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FilterHeader from './FilterHeader';
import FilterCalendar from './FilterCalendar';
import calendar_icon from '../assets/icons/calendar_icon.png';
import internet_icon from '../assets/icons/internet_icon.png';
import ship_icon from '../assets/icons/ship_icon.png';
import star_icon from '../assets/icons/star_icon.png';

const FilterModal = ({
  modalVisible,
  setModalVisible,
  onSortChange,
  selectedSort,
  navigation,
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showLocationPanel, setShowLocationPanel] = useState(false);
  const [showTypePanel, setShowTypePanel] = useState(false);
  const [showFeaturesPanel, setShowFeaturesPanel] = useState(false);

  const sortOptions = ['By Date', 'By Location', 'By Type', 'By Features'];

  const handleSort = option => {
    onSortChange(option);
    setShowCalendar(option === 'By Date');
    setShowLocationPanel(option === 'By Location');
    setShowTypePanel(option === 'By Type');
    setShowFeaturesPanel(option === 'By Features');
  };

  const handleBack = () => {
    setShowCalendar(false);
    setShowLocationPanel(false);
    setShowTypePanel(false);
    setShowFeaturesPanel(false);
  };

  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.modalContainer}>
        <View style={styles.fakeBlurBackground} />
        <View style={styles.modalContent}>
          {!showCalendar &&
            !showLocationPanel &&
            !showTypePanel &&
            !showFeaturesPanel && (
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Find a Boat</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Icon name="close-circle-outline" size={28} color="white" />
                </TouchableOpacity>
              </View>
            )}

          {/* Show Filter Options */}
          {!showCalendar &&
            !showLocationPanel &&
            !showTypePanel &&
            !showFeaturesPanel &&
            sortOptions.map((option, index) => (
              <Pressable
                key={index}
                style={[
                  styles.sortOption,
                  selectedSort === option && styles.selectedSortOption,
                ]}
                onPress={() => handleSort(option)}>
                <View style={styles.sortOptionContainer}>
                  {option === 'By Date' && (
                    <Image source={calendar_icon} style={styles.iconImage} />
                  )}
                  {option === 'By Location' && (
                    <Image source={internet_icon} style={styles.iconImage} />
                  )}
                  {option === 'By Type' && (
                    <Image source={ship_icon} style={styles.iconImage} />
                  )}
                  {option === 'By Features' && (
                    <Image source={star_icon} style={styles.iconImage} />
                  )}
                  <Text style={styles.sortOptionText}>{option}</Text>
                </View>
              </Pressable>
            ))}

          {/* Show the panels based on selection */}
          {showCalendar && (
            <View style={styles.calendarContainer}>
              <FilterHeader
                title="By Date"
                onPressBack={handleBack}
                onPressClose={() => setModalVisible(false)}
              />
              <View style={styles.calendar}>
                <FilterCalendar />
              </View>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Add Date</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Panels for Location, Type, and Features */}
          {showLocationPanel && (
            <View>
              <FilterHeader
                title="By Location"
                onPressBack={handleBack}
                onPressClose={() => setModalVisible(false)}
              />
              <Text style={styles.panelTitle}>Add a Search bar</Text>
              <Text style={styles.panelTitle}>Add a Google Map</Text>
            </View>
          )}

          {showTypePanel && (
            <View>
              <FilterHeader
                title="Boat Type"
                onPressBack={handleBack}
                onPressClose={() => setModalVisible(false)}
              />
              <View style={styles.typeList}>
                {[
                  'Select All',
                  'Bass Boat',
                  'Jetski',
                  'Pontoon',
                  'Ski Boat',
                  'Other',
                ].map((type, index) => (
                  <View key={index} style={styles.typeRow}>
                    <TouchableOpacity
                      style={styles.checkbox}
                      onPress={() => {
                        // Add logic to handle checkbox selection here
                      }}>
                      {/* Simulate checkbox */}
                      <View style={styles.checkboxOuter}>
                        <View
                          style={index === 1 ? styles.checkboxInner : null}
                        />
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.typeText}>{type}</Text>
                  </View>
                ))}
              </View>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Select Boat</Text>
              </TouchableOpacity>
            </View>
          )}

          {showFeaturesPanel && (
            <View>
              <FilterHeader
                title="By Features"
                onPressBack={handleBack}
                onPressClose={() => setModalVisible(false)}
              />

              <View style={styles.typeList}>
                {[
                  'Select All',
                  'Bass Boat',
                  'Jetski',
                  'Pontoon',
                  'Ski Boat',
                  'Other',
                ].map((type, index) => (
                  <View key={index} style={styles.typeRow}>
                    <TouchableOpacity
                      style={styles.checkbox}
                      onPress={() => {
                        // Add logic to handle checkbox selection here
                      }}>
                      {/* Simulate checkbox */}
                      <View style={styles.checkboxOuter}>
                        <View
                          style={index === 1 ? styles.checkboxInner : null}
                        />
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.typeText}>{type}</Text>
                  </View>
                ))}
              </View>

              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Select Boat</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity
            style={styles.applyButton}
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('FilterBoats');
            }}>
            <Text style={styles.applyButtonText}>Find your Boat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 30,
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
    marginVertical: 20,
  },
  applyButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    height: 24,
    textAlignVertical: 'center',
  },
  sortOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconImage: {
    height: 24,
    width: 24,
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
  calendar: {justifyContent: 'center', alignItems: 'center'},
  panelTitle: {
    color: '#fff',
  },
  typeList: {
    marginTop: 20,
  },
  typeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#A1A1A1',
  },
  typeText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'KnulTrial-Regular',
    marginLeft: 10,
    height: 24,
  },
  checkbox: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxOuter: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
});

export default FilterModal;
