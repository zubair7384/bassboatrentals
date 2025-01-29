import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Header from '../../../components/Header';
import AddBoatSpecs from './AddBoatSpecs';
import AddMotorSpecs from './AddMotorSpecs';
import AddTrailerSpecs from './AddTrailerSpecs';
import AddShallowWaterAnchors from './AddShallowWaterAnchors';
import AddBoatFFS from './AddBoatFFS';
import AddBoatTrailerMotor from './AddBoatTrailerMotor';
import AddBoatFeatures from './AddBoatFeatures';
import AddBoatInsurance from './AddBoatInsurance';
import AddBoatDriver from './AddBoatDriver';
import AddBoatDetails from './AddBoatDetails';
import AddBoatImageLocation from './AddBoatImageLocation';
import {addingBoatValidationSchema} from '../../../utils/validationSchemas';
import {useFormik} from 'formik';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
import {getDatabase, ref, push, set} from 'firebase/database';
import {useAuth} from '../../../firebase/AuthContext';

const AddBoat = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const progress = useRef(new Animated.Value(0)).current;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const auth = useAuth();

  useEffect(() => {
    const progressPercentage = (currentStep + 1) / sections?.length;
    Animated.timing(progress, {
      toValue: progressPercentage,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [currentStep, progress, sections?.length]);

  useEffect(() => {
    scrollViewRef.current?.scrollTo({y: 0, animated: true});
  }, [currentStep]);

  const formik = useFormik({
    initialValues: {
      Listing_Title: '',
      Short_Name: '',
      Boat_Description: '',
      Max_Passengers_Capacity: '',
      Boat_Type: '',
      Boat_Location: '',
      Feature_Images: '',
      GalleryImages: '',
      Motor_Type: '',
      Horse_Power: '',
      Boat_Rate: '',
      Boat_Make: '',
      Boat_Model: '',
      Boat_Year: '',
      Boat_HIN: '',
      DriverOption: '',
      Motor_Make: '',
      Motor_Model: '',
      Motor_Year: '',
      Motor_Serial: '',
      Trailer_Make: '',
      Trailer_Dual_Single_Axle: '',
      Trailer_Shocks: '',
      Trailer_Surge_Brakes: '',
      Trailer_Year: '',
      Trailer_VIN: '',
      Trailer_Spare_Wheel: '',
      Tread_depths: '',
      Trailer_Motor_Make: '',
      Trailer_Motor_Model: '',
      Trailer_Motor_Year: '',
      Spare_Trolling_Motor_Prop: '',
      Big_Motor_Prop: '',
      shallow_water_anchors: '',
      Anchor_Brand_Model: '',
      FFS_Make: '',
      FFS_Model: '',
      FFS_Year: '',
      FFS_Graph1_Make: '',
      FFS_Graph1_Model: '',
      FFS_Graph1_Year: '',
      FFS_Graph2_Make: '',
      FFS_Graph2_Model: '',
      FFS_Graph2_Year: '',
      FFS_Graph3_Make: '',
      FFS_Graph3_Model: '',
      FFS_Graph3_Year: '',
      FFS_Graph4_Make: '',
      FFS_Graph4_Model: '',
      FFS_Graph4_Year: '',
      selectedFeatures: '',
      Insurance_Provider: '',
      Owner_Policy_Named: '',
      Policy_number: '',
      Policy_Liability_Acceptable: '',
    },
    validationSchema: addingBoatValidationSchema,

    onSubmit: async values => {
      console.log('Form Data: ', values);
      try {
        setLoading(true);

        const db = getDatabase();

        const listingsRef = push(ref(db, 'listings/'));

        const boatData = {
          listingId: listingsRef.key,
          boatStatus: 'Active',
          ownerId: auth?.currentUser?.uid,
          listingTitle: values.Listing_Title,
          shortName: values.Short_Name,
          description: values.Boat_Description,
          capacity: values.Max_Passengers_Capacity,
          boatType: values.Boat_Type,
          storageAddress: values.Boat_Location,
          featured_image: values.Feature_Images,
          images: values.GalleryImages,
          motorType: values.Motor_Type,
          horsePower: values.Horse_Power,
          pricing: values.Boat_Rate,

          make: values.Boat_Make,
          model: values.Boat_Model,
          year: values.Boat_Year,
          hin: values.Boat_HIN,
          DriverOption: values.DriverOption,
          motorMake: values.Motor_Make,
          motorModel: values.Motor_Model,
          motorYear: values.Motor_Year,
          motorSerial: values.Motor_Serial,
          trailerMake: values.Trailer_Make,
          trailerAxle: values.Trailer_Dual_Single_Axle,
          trailerShocks: values.Trailer_Shocks,
          Trailer_Surge_Brakes: values.Trailer_Surge_Brakes,
          trailerYear: values.Trailer_Year,
          trailerVin: values.Trailer_VIN,
          trailerSpareWheel: values.Trailer_Spare_Wheel,
          trailerTireLegal: values.Tread_depths,
          trollingMotorMake: values.Trailer_Motor_Make,
          trollingMotorModel: values.Trailer_Motor_Model,
          trollingMotorYear: values.Trailer_Motor_Year,
          trollingSpareTmProp: values.Spare_Trolling_Motor_Prop,
          trollingBigMotorProp: values.Big_Motor_Prop,
          shallowWaterAnchors: values.shallow_water_anchors,
          shallowWaterAnchorBrandModel: values.Anchor_Brand_Model,
          ffsMake: values.FFS_Make,
          ffsModel: values.FFS_Model,
          ffsYear: values.FFS_Year,
          graph1Make: values.FFS_Graph1_Make,
          graph1Model: values.FFS_Graph1_Model,
          graph1Year: values.FFS_Graph1_Year,
          graph2Make: values.FFS_Graph2_Make,
          graph2Model: values.FFS_Graph2_Model,
          graph2Year: values.FFS_Graph2_Year,
          graph3Make: values.FFS_Graph3_Make,
          graph3Model: values.FFS_Graph3_Model,
          graph3Year: values.FFS_Graph3_Year,
          graph4Make: values.FFS_Graph4_Make,
          graph4Model: values.FFS_Graph4_Model,
          graph4Year: values.FFS_Graph4_Year,

          features: values.selectedFeatures,
          insuranceProvider: values.Insurance_Provider,
          insuranceName: values.Owner_Policy_Named,
          insuranceNumber: values.Policy_number,
          insuranceCoverage: values.Policy_Liability_Acceptable,
          createdAt: new Date().toISOString(),
        };

        await set(listingsRef, boatData);

        navigation.navigate('OwnerHome', {message: 'Boat added successfully!'});
      } catch (error) {
        console.error('Error adding boat:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
  });

  const sections = [
    {
      id: 0,
      content: <AddBoatDetails formik={formik} />,
    },
    {
      id: 1,
      content: <AddBoatImageLocation formik={formik} />,
    },
    {
      id: 2,
      content: <AddBoatSpecs formik={formik} />,
    },
    {
      id: 3,
      content: <AddBoatDriver formik={formik} />,
    },
    {
      id: 4,
      content: <AddMotorSpecs formik={formik} />,
    },
    {
      id: 5,
      content: <AddTrailerSpecs formik={formik} />,
    },
    {
      id: 6,
      content: <AddBoatTrailerMotor formik={formik} />,
    },
    {
      id: 7,
      content: <AddShallowWaterAnchors formik={formik} />,
    },
    {
      id: 8,
      content: <AddBoatFFS formik={formik} />,
    },
    {
      id: 9,
      content: <AddBoatFeatures formik={formik} />,
    },
    {
      id: 10,
      content: <AddBoatInsurance formik={formik} />,
    },
  ];

  const scrollToStep = step => {
    scrollViewRef.current.scrollTo({
      y: step * SCREEN_HEIGHT * 0.6,
      animated: true,
    });
  };

  const handleNext = () => {
    if (currentStep < sections.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      scrollToStep(nextStep);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      const previousStep = currentStep - 1;
      setCurrentStep(previousStep);
      scrollToStep(previousStep);
    }
  };
  const backToHome = () => {
    navigation.navigate('OwnerHome');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Add Boat" navigation={navigation} />
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>

      <KeyboardAvoidingView
        keyboardShouldPersistTaps="handled"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.ScrollViewContainer}
          showsVerticalScrollIndicator={true}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps="handled">
          <View style={styles.sectionContainer}>
            {sections[currentStep].content}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.btnRow}>
        {currentStep === 0 && (
          <>
            <TouchableOpacity
              style={styles.btnPrev}
              onPress={backToHome}
              accessible={true}
              accessibilityLabel="Go back to home">
              <Text style={styles.btnText}>Back to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnNext}
              onPress={handleNext}
              accessible={true}
              accessibilityLabel="Go to next step">
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
          </>
        )}

        {currentStep > 0 && currentStep < sections.length - 1 && (
          <>
            <TouchableOpacity
              style={styles.btnPrev}
              onPress={handlePrevious}
              accessible={true}
              accessibilityLabel="Go to previous step">
              <Text style={styles.btnText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnNext}
              onPress={handleNext}
              accessible={true}
              accessibilityLabel="Go to next step">
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
          </>
        )}

        {currentStep === sections.length - 1 && (
          <>
            <TouchableOpacity
              style={styles.btnPrev}
              onPress={handlePrevious}
              accessible={true}
              accessibilityLabel="Go to previous step">
              <Text style={styles.btnText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnSubmit}
              onPress={formik.handleSubmit}
              accessible={true}
              accessibilityLabel="Submit your data">
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ScrollViewContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#191919',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#080705',
  },
  sectionContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
  },

  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  btnText: {
    color: '#111',
    fontSize: 16,
  },

  btnPrev: {
    flex: 1,
    backgroundColor: '#FCEACE',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  btnNext: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSubmit: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddBoat;
