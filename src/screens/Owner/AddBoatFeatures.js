import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

const AddBoatFeatures = () => {
  const [features, setFeatures] = useState([]);
  const [currentFeature, setCurrentFeature] = useState('');

  const handleInputChange = text => {
    setCurrentFeature(text);
  };

  const addFeature = () => {
    if (currentFeature.trim() !== '') {
      setFeatures([...features, currentFeature.trim()]);
      setCurrentFeature('');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#080705'}}>
      <Text style={styles.sectionTitle}>Features*</Text>
      <Text style={styles.sectionSubtitle}>
        Please select any significant features for your watercraft.
      </Text>

      <View style={styles.inputRow}>
        <TextInput
          placeholder="Features Name"
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

      <FlatList
        data={features}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.featureTag}>
            <Text style={styles.featureText}>+ {item}</Text>
          </View>
        )}
        numColumns={2}
        contentContainerStyle={styles.featureContainer}
        columnWrapperStyle={styles.featureRow}
      />
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
  featureContainer: {
    paddingHorizontal: 5,
  },
  featureRow: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  featureTag: {
    backgroundColor: '#191919',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    // marginHorizontal: 5,
  },
  featureText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default AddBoatFeatures;
