import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const AddBoatFeatures = ({formik}) => {
  const defaultFeatures = [
    'Lithium Cranking Battery',
    'Lithium TM Batteries',
    'Standard AGM Cranking Battery',
    'Standard AGM Trolling Motor Batteries',
    'Pedestal Butt Seat Front',
    'Pedestal Butt Seat Rear',
    'Folding Pedestal Seat',
    'Life jackets/required safety gear',
    'Live Wells',
    'Live well Oxygenators',
    'Landing Net',
    'Deck Lights',
    'Working Audible Horn',
    'Whistle',
    'PFD',
    'Fire Extinguisher',
    'Ice Storage Cooler',
  ];

  const [features, setFeatures] = useState(defaultFeatures);
  const [selectedFeatures, setSelectedFeatures] = useState(
    formik.values.selectedFeatures || [],
  );
  const [currentFeature, setCurrentFeature] = useState('');

  const handleInputChange = text => {
    setCurrentFeature(text);
  };

  const addFeature = () => {
    if (
      currentFeature.trim() !== '' &&
      !features.includes(currentFeature.trim())
    ) {
      setFeatures([...features, currentFeature.trim()]);
      setCurrentFeature('');
    }
  };

  const toggleFeature = feature => {
    const updatedSelected = selectedFeatures.includes(feature)
      ? selectedFeatures.filter(item => item !== feature)
      : [...selectedFeatures, feature];

    setSelectedFeatures(updatedSelected);
    formik.setFieldValue('selectedFeatures', updatedSelected);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#080705'}}>
      <Text style={styles.sectionTitle}>Features*</Text>
      <Text style={styles.sectionSubtitle}>
        Please select any significant features for your watercraft.
      </Text>

      <View style={styles.inputRow}>
        <TextInput
          placeholder="Feature Name"
          placeholderTextColor={'#979797'}
          value={currentFeature}
          onChangeText={handleInputChange}
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={addFeature}
          accessible={true}
          accessibilityLabel="Add a feature">
          <Text style={styles.btnText}>Add Feature</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.featureContainer}>
          {features.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.featureTag,
                selectedFeatures.includes(item) && styles.featureSelected,
              ]}
              onPress={() => toggleFeature(item)}
              accessible={true}
              accessibilityLabel={`Select ${item}`}>
              <Text
                style={[
                  styles.featureText,
                  selectedFeatures.includes(item) && styles.featureTextSelected,
                ]}>
                {selectedFeatures.includes(item) ? '✔' : '+'} {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#979797',
    marginVertical: 10,
    fontWeight: '500',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#191919',
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
    marginRight: 10,
  },
  btnSubmit: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  btnText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '700',
  },
  featureRow: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 5,
  },
  featureContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureTag: {
    width: '48%',
    backgroundColor: '#191919',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginVertical: 5,
  },
  featureSelected: {
    backgroundColor: '#fff',
    borderColor: '#000',
  },
  featureText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  featureTextSelected: {
    color: '#000',
  },
});

export default AddBoatFeatures;
