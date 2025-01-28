import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddBoatDetails = ({formik}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBoatType, setSelectedBoatType] = useState('Select Boat Type');

  const boatTypes = ['Bass Boat', 'Jetski', 'Pontoon', 'Ski Boat', 'Other'];
  const [selectedType, setSelectedType] = useState('Bass Boat');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Boat Details</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Listing Title"
          placeholderTextColor="#777"
          value={formik.values.Listing_Title}
          onChangeText={formik.handleChange('Listing_Title')}
          onBlur={formik.handleBlur('Listing_Title')}
        />
        {formik.touched.Listing_Title && formik.errors.Listing_Title && (
          <Text style={styles.errorText}>{formik.errors.Listing_Title}</Text>
        )}

        <TextInput
          style={styles.input}
          placeholder="Short Name"
          placeholderTextColor="#777"
          value={formik.values.Short_Name}
          onChangeText={formik.handleChange('Short_Name')}
          onBlur={formik.handleBlur('Short_Name')}
        />
        {formik.touched.Short_Name && formik.errors.Short_Name && (
          <Text style={styles.errorText}>{formik.errors.Short_Name}</Text>
        )}

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Description"
          placeholderTextColor="#777"
          multiline
          value={formik.values.Boat_Description}
          onChangeText={formik.handleChange('Boat_Description')}
          onBlur={formik.handleBlur('Boat_Description')}
        />
        {formik.touched.Boat_Description && formik.errors.Boat_Description && (
          <Text style={styles.errorText}>{formik.errors.Boat_Description}</Text>
        )}

        <TextInput
          style={styles.input}
          placeholder="Max Passengers Capacity*"
          placeholderTextColor="#777"
          keyboardType="numeric"
          value={formik.values.Max_Passengers_Capacity}
          onChangeText={formik.handleChange('Max_Passengers_Capacity')}
          onBlur={formik.handleBlur('Max_Passengers_Capacity')}
        />
        {formik.touched.Max_Passengers_Capacity &&
          formik.errors.Max_Passengers_Capacity && (
            <Text style={styles.errorText}>
              {formik.errors.Max_Passengers_Capacity}
            </Text>
          )}

        <TouchableOpacity
          style={styles.selectableInput}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.placeholderText}>{selectedBoatType}</Text>
          <Icon name="chevron-forward-outline" size={18} color="#888" />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="arrow-back" size={24} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Boat Type</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="close-circle-outline" size={28} color="#fff" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={boatTypes}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.typeRow}
                  onPress={() => {
                    setSelectedType(item);
                    formik.setFieldValue('Boat_Type', item);
                  }}>
                  <View
                    style={
                      selectedType === item
                        ? styles.radioSelected
                        : styles.radioUnselected
                    }>
                    {selectedType === item && (
                      <View style={styles.radioInner} />
                    )}
                  </View>
                  <Text style={styles.typeText}>{item}</Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity
              style={styles.selectButton}
              onPress={() => {
                setSelectedBoatType(selectedType);
                formik.setFieldValue('Boat_Type', selectedType);
                setModalVisible(false);
              }}>
              <Text style={styles.selectButtonText}>Select Boat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080705',
    padding: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    fontFamily: 'knultrial-regular',
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    backgroundColor: '#191919',
    height: 56,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: 'white',
    fontFamily: 'knultrial-regular',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  selectableInput: {
    backgroundColor: '#191919',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  placeholderText: {
    color: '#777',
    fontSize: 14,
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
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  typeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  typeText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  radioUnselected: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  selectButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 20,
  },
  selectButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
  },
});

export default AddBoatDetails;
