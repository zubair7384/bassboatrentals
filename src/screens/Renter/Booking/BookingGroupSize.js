import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../components/Header';

const BookingGroupSize = ({navigation}) => {
  const [groupCounts, setGroupCounts] = useState({
    adults: 2,
    seniors: 0,
    minors: 1,
    infants: 0,
  });

  const increment = type => {
    setGroupCounts(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const decrement = type => {
    setGroupCounts(prev => ({
      ...prev,
      [type]: prev[type] > 0 ? prev[type] - 1 : 0,
    }));
  };

  const totalGroupSize =
    groupCounts.adults +
    groupCounts.seniors +
    groupCounts.minors +
    groupCounts.infants;

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Booking" navigation={navigation} />

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.groupSizeText}>Group Size</Text>
          <Text style={styles.totalText}>Total: {totalGroupSize}</Text>
        </View>

        <View style={styles.counterContainer}>
          {[
            {label: 'Adults (18 and older)', key: 'adults'},
            {label: 'Seniors (65 and older)', key: 'seniors'},
            {label: 'Minors (Younger than 18)', key: 'minors'},
            {label: 'Infants (Younger than 1 year old)', key: 'infants'},
          ].map(item => (
            <View style={styles.counterRow} key={item.key}>
              <Text style={styles.counterLabel}>{item.label}</Text>
              <View style={styles.counterActions}>
                <TouchableOpacity
                  style={styles.counterButton}
                  onPress={() => decrement(item.key)}
                  accessible={true}
                  accessibilityLabel={`Decrease ${item.label}`}>
                  <Text style={styles.counterButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.counterValue}>{groupCounts[item.key]}</Text>
                <TouchableOpacity
                  style={styles.counterButton}
                  onPress={() => increment(item.key)}
                  accessible={true}
                  accessibilityLabel={`Increase ${item.label}`}>
                  <Text style={styles.counterButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.btnRow}>
        <TouchableOpacity
          style={styles.btnPrev}
          onPress={() => navigation.goBack()}
          accessible={true}
          accessibilityLabel="Go back to home">
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => navigation.navigate('BookCaptain')}
          accessible={true}
          accessibilityLabel="Go to next step">
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    padding: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  groupSizeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
    lineHeight: 24,
  },
  totalText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
    lineHeight: 24,
  },
  counterContainer: {
    marginBottom: 20,
  },
  counterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#191919',
    padding: 10,
    borderRadius: 8,
    height: 56,
  },
  counterLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    flex: 1,
    fontWeight: '500',
    lineHeight: 24,
    fontFamily: 'knultrial-regular',
  },
  counterActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#A1A1A1',
  },
  counterButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  counterValue: {
    color: '#FFFFFF',
    fontSize: 18,
    marginHorizontal: 10,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
    lineHeight: 24,
  },
  btnRow: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 10,
  },
  btnPrev: {
    flex: 1,
    backgroundColor: '#FCEACE',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNext: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default BookingGroupSize;
