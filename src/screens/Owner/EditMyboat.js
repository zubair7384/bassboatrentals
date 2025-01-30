import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import Header from '../../components/Header';
import {getListingByID, updateListing} from '../../firebase/firebaseUtils';
import {useRoute} from '@react-navigation/native';
import CustomTextInput from '../../components/customTextInput';
import boatImage from '../../assets/images/bbr_rect.png';
import {getDatabase, ref, update} from 'firebase/database';

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
const EditMyBoat = ({navigation}) => {
  const route = useRoute();
  const {id} = route.params || {};

  const [features, setFeatures] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [currentFeature, setCurrentFeature] = useState('');

  const [boatDetails, setBoatDetails] = useState({
    listingTitle: '',
    boatType: '',
    model: '',
    capacity: '',
  });

  useEffect(() => {
    if (!id) {
      console.error('Error: No Boat ID provided');
      return;
    }

    const fetchListingDetails = async () => {
      try {
        const details = await getListingByID(id);
        // console.log('Details: ', details);
        if (details) {
          const apiFeatures = details.features || [];

          const mergedFeatures = [
            ...new Set([...defaultFeatures, ...apiFeatures]),
          ];

          setFeatures(mergedFeatures);
          setSelectedFeatures(apiFeatures);
          setBoatDetails({
            listingTitle: details.listingTitle || '',
            boatType: details.boatType || '',
            model: details.model || '',
            capacity: details.capacity?.toString() || '',
            make: details.make || '',
            year: details.year || '',
            description: details.description || '',
            boatStatus: details.boatStatus || '',
            ownerId: details.ownerId || '',
            pricing: details.pricing || '',
            driverOption: details.DriverOption || '',
            horsePower: details.horsePower || '',
            insuranceCoverage: details.insuranceCoverage || '',
            insuranceName: details.insuranceName || '',
            insuranceNumber: details.insuranceNumber || '',
            insuranceProvider: details.insuranceProvider || '',
            motorMake: details.motorMake || '',
            motorModel: details.motorModel || '',
            motorYear: details.motorYear || '',
            motorType: details.motorType || '',
            motorSerial: details.motorSerial || '',
            trollingMotorMake: details.trollingMotorMake || '',
            trollingMotorModel: details.trollingMotorModel || '',
            trollingMotorYear: details.trollingMotorYear || '',
            trollingBigMotorProp: details.trollingBigMotorProp || '',
            trollingSpareTmProp: details.trollingSpareTmProp || '',
            shallowWaterAnchors: details.shallowWaterAnchors || '',
            shallowWaterAnchorBrandModel:
              details.shallowWaterAnchorBrandModel || '',
            ffsMake: details.ffsMake || '',
            ffsModel: details.ffsModel || '',
            ffsYear: details.ffsYear || '',
            graph1Make: details.graph1Make || '',
            graph1Model: details.graph1Model || '',
            graph1Year: details.graph1Year || '',
            graph2Make: details.graph2Make || '',
            graph2Model: details.graph2Model || '',
            graph2Year: details.graph2Year || '',
            graph3Make: details.graph3Make || '',
            graph3Model: details.graph3Model || '',
            graph3Year: details.graph3Year || '',
            graph4Make: details.graph4Make || '',
            graph4Model: details.graph4Model || '',
            graph4Year: details.graph4Year || '',
            hin: details.hin || '',
            trailerMake: details.trailerMake || '',
            trailerYear: details.trailerYear || '',
            trailerVin: details.trailerVin || '',
            trailerAxle: details.trailerAxle || '',
            trailerShocks: details.trailerShocks || '',
            trailerSpareWheel: details.trailerSpareWheel || '',
            trailerTireLegal: details.trailerTireLegal || '',
            trailerSurgeBrakes: details.Trailer_Surge_Brakes || '',
            storageAddress: details.storageAddress || {lat: '', lng: ''},
            images: details.images || '',
            featuredImage: details.featured_image || '',
            createdAt: details.createdAt || '',
            features: apiFeatures,
          });
        } else {
          console.error('No listing found for the given ID:', id);
        }
      } catch (error) {
        console.error('Error fetching listing details:', error);
      }
    };

    fetchListingDetails();
  }, [id]);

  const handleSave = async () => {
    try {
      const updatedBoatDetails = {
        ...boatDetails,
        features: selectedFeatures,
      };

      if (id) {
        const listingsRef = ref(getDatabase(), `listings/${id}`);
        await update(listingsRef, updatedBoatDetails);
        console.log('Boat updated successfully:', updatedBoatDetails);
        navigation.goBack();
      }
    } catch (error) {
      console.error('Error updating listing:', error);
    }
  };

  const handleInputChange = text => {
    setCurrentFeature(text);
  };

  const addFeature = () => {
    if (
      currentFeature.trim() !== '' &&
      !features.includes(currentFeature.trim())
    ) {
      setFeatures([...features, currentFeature.trim()]);
      setSelectedFeatures([...selectedFeatures, currentFeature.trim()]);
      setCurrentFeature('');
    }
  };

  const toggleFeature = feature => {
    setSelectedFeatures(prevSelectedFeatures =>
      prevSelectedFeatures.includes(feature)
        ? prevSelectedFeatures.filter(item => item !== feature)
        : [...prevSelectedFeatures, feature],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Edit Boat" navigation={navigation} />
      <ScrollView style={styles.scrollviewStyle}>
        <Image
          source={boatImage}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Listing Title"
            value={boatDetails.listingTitle}
            onChange={text =>
              setBoatDetails({...boatDetails, listingTitle: text})
            }
          />
        </View>

        <View style={styles.formGroup}>
          <CustomTextInput
            label="Boat Type"
            value={boatDetails.boatType}
            onChange={text => setBoatDetails({...boatDetails, boatType: text})}
          />
        </View>

        <View style={styles.formGroup}>
          <CustomTextInput
            label="Location"
            // value={boatDetails.boatType}
            // onChange={text => setBoatDetails({...boatDetails, boatType: text})}
          />
        </View>

        <View style={styles.formGroup}>
          <CustomTextInput
            label="Max Passengers Capacity*"
            value={boatDetails.capacity}
            onChange={text => setBoatDetails({...boatDetails, capacity: text})}
          />
        </View>

        <Text style={styles.sectionTitle}>Boat Details</Text>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Make"
            value={boatDetails.make}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>

        <View style={styles.formGroup}>
          <CustomTextInput
            label="Model"
            value={boatDetails.model}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>

        <View style={styles.formGroup}>
          <CustomTextInput
            label="Year"
            value={boatDetails.year}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>

        <Text style={styles.sectionTitle}>Motor Details</Text>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Make"
            value={boatDetails.motorMake}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>

        <View style={styles.formGroup}>
          <CustomTextInput
            label="Model"
            value={boatDetails.motorModel}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>

        <View style={styles.formGroup}>
          <CustomTextInput
            label="Year"
            value={boatDetails.motorYear}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>

        <Text style={styles.sectionTitle}>Trailer Details</Text>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Make"
            value={boatDetails.trailerMake}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>

        <View style={styles.formGroup}>
          <CustomTextInput
            label="Year"
            value={boatDetails.trailerModle}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>

        <Text style={styles.sectionTitle}>Trailer Motor Details</Text>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Make"
            value={boatDetails.trollingMotorMake}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>

        <View style={styles.formGroup}>
          <CustomTextInput
            label="Model"
            value={boatDetails.trollingMotorModel}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>

        <View style={styles.formGroup}>
          <CustomTextInput
            label="Year"
            value={boatDetails.trollingMotorYear}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>

        <Text style={styles.sectionTitle}>Shallow Water Anchors</Text>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="How many shallow water anchors"
            value={boatDetails.shallowWaterAnchors}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Anchor Brand and model"
            value={boatDetails.shallowWaterAnchorBrandModel}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>

        <Text style={styles.sectionTitle}>FFS - Forward Facing Sonar</Text>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Make"
            value={boatDetails.ffsMake}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>

        <View style={styles.formGroup}>
          <CustomTextInput
            label="Model"
            value={boatDetails.ffsModel}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>

        <View style={styles.formGroup}>
          <CustomTextInput
            label="Year"
            value={boatDetails.ffsYear}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>

        <Text style={styles.sectionTitle}>Graph (Make, Model & Year)</Text>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Graph 1 Make"
            value={boatDetails.model}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Graph 1 Model"
            value={boatDetails.graph1Make}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Graph 1 Year"
            value={boatDetails.graph1Model}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Graph 2 Make"
            value={boatDetails.graph2Make}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Graph 2 Model"
            value={boatDetails.graph2Model}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Graph 2 Year"
            value={boatDetails.graph2Year}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Graph 3 Make"
            value={boatDetails.graph3Make}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Graph 3 Model"
            value={boatDetails.graph3Model}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Graph 3 Year"
            value={boatDetails.graph3Year}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Graph 4 Make"
            value={boatDetails.graph4Make}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Graph 4 Model"
            value={boatDetails.graph4Model}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>
        <View style={styles.formGroup}>
          <CustomTextInput
            label="Graph 4 Year"
            value={boatDetails.graph4Year}
            onChange={text => setBoatDetails({...boatDetails, model: text})}
          />
        </View>

        <Text style={styles.sectionTitle}>Features Detials</Text>
        <View>
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Feature Name"
              placeholderTextColor={'#979797'}
              value={currentFeature}
              onChangeText={setCurrentFeature}
              style={styles.textInput}
            />
            <TouchableOpacity style={styles.btnSubmit} onPress={addFeature}>
              <Text style={styles.btnText}>Add Feature</Text>
            </TouchableOpacity>
          </View>

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
                    selectedFeatures.includes(item) &&
                      styles.featureTextSelected,
                  ]}>
                  {selectedFeatures.includes(item) ? '✔' : '+'} {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Update Changes</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  formGroup: {
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    height: 52,
  },
  saveButtonText: {
    color: '#111',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'knultrial-regular',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
    marginBottom: 10,
  },
  bannerImage: {
    width: '100%',
    height: 132,
    borderRadius: 8,
    marginVertical: 10,
  },
  // features style
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

export default EditMyBoat;
