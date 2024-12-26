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
} from 'react-native';
import Header from '../../components/Header';
import AddBoatSpecs from './AddBoatSpecs';
import AddMotorSpecs from './AddMotorSpecs';
import AddTrailerSpecs from './AddTrailerSpecs';
import AddShallowWaterAnchors from './AddShallowWaterAnchors';
import AddBoatFFS from './AddBoatFFS';
import AddBoatTrailerMotor from './AddBoatTrailerMotor';
import AddBoatFeatures from './AddBoatFeatures';
import AddBoatInsurance from './AddBoatInsurance';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const AddBoat = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [inputStates, setInputStates] = useState({});
  const progress = useRef(new Animated.Value(0)).current;

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

  const handleInputChange = (text, inputName) => {
    setInputStates(prevState => ({
      ...prevState,
      [inputName]: text.trim(),
    }));
  };

  const sections = [
    {
      id: 0,
      content: <AddBoatSpecs onChange={handleInputChange} />,
    },
    {
      id: 1,
      content: <AddMotorSpecs onChange={handleInputChange} />,
    },
    {
      id: 2,
      content: <AddTrailerSpecs onChange={handleInputChange} />,
    },
    {
      id: 3,
      content: <AddBoatTrailerMotor onChange={handleInputChange} />,
    },
    {
      id: 4,
      content: <AddShallowWaterAnchors onChange={handleInputChange} />,
    },
    {
      id: 5,
      content: <AddBoatFFS onChange={handleInputChange} />,
    },
    {
      id: 6,
      content: <AddBoatFeatures onChange={handleInputChange} />,
    },
    {
      id: 7,
      content: <AddBoatInsurance onChange={handleInputChange} />,
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
    navigation.navigate('MyBoats');
  };

  const submitData = () => {
    navigation.navigate('MyBoats');
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

      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.ScrollViewContainer}
        showsVerticalScrollIndicator={true}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled">
        <View style={styles.sectionContainer}>
          {sections[currentStep].content}
        </View>
      </ScrollView>

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
              onPress={submitData}
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
