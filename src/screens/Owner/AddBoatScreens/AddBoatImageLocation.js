import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const AddBoatImageLocation = () => {
  const [featureImage, setFeatureImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState(null);

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
      <TouchableOpacity style={styles.locationInput}>
        <Text style={styles.placeholderText}>Search Places</Text>
      </TouchableOpacity>
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
  locationInput: {
    backgroundColor: '#191919',
    padding: 15,
    borderRadius: 10,
  },
  placeholderText: {
    color: '#777',
    fontSize: 14,
  },
});

export default AddBoatImageLocation;
