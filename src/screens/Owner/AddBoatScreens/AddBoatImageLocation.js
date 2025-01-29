import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const GOOGLE_API_KEY = 'AIzaSyBfEcoyW9DM7QQWdV3oTjevrfyhX5n5qqg';
import 'react-native-get-random-values';

const AddBoatImageLocation = ({formik}) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boat Images and Location</Text>
      <Text style={styles.label}>Feature Image</Text>
      <TouchableOpacity style={styles.uploadContainer}>
        <Text style={styles.uploadText}>Upload Feature Images</Text>
        <View style={styles.fileButton}>
          <Text style={styles.fileButtonText}>Choose File</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.label}>Add Gallery Images</Text>
      <TouchableOpacity style={styles.uploadContainer}>
        <Text style={styles.uploadText}>Upload Gallery Images</Text>
        <View style={styles.fileButton}>
          <Text style={styles.fileButtonText}>Choose File</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.label}>Boat Location</Text>
      <GooglePlacesAutocomplete
        placeholder="Search Places"
        minLength={2}
        fetchDetails={true}
        onPress={(data, details = null) => {
          if (details) {
            const {lat, lng} = details.geometry.location;
            const locationData = {lat, lng};

            setSelectedLocation({address: data.description, ...locationData});
            formik.setFieldValue('Boat_Location', locationData);
            console.log('Selected Location:', locationData);
          }
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
        }}
        styles={{
          textInputContainer: styles.locationInputContainer,
          textInput: styles.input,
        }}
      />

      {/* {selectedLocation && (
        <Text style={styles.selectedLocationText}>
          Selected: {selectedLocation.address}
        </Text>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080705',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    fontFamily: 'knultrial-regular',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    fontFamily: 'knultrial-regular',
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#191919',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  uploadText: {
    color: '#777',
    fontSize: 14,
  },
  fileButton: {
    backgroundColor: '#333',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  fileButtonText: {
    color: '#777',
    fontSize: 14,
  },
  locationInputContainer: {
    backgroundColor: '#191919',
    borderRadius: 10,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#191919',
    padding: 15,
    borderRadius: 10,
    color: 'white',
  },
  selectedLocationText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
  },
});

export default AddBoatImageLocation;
