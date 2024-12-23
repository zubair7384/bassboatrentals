import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import BoatCard from '../../components/BoatCard';
import boat_img from '../../assets/images/bbr_rect.png';
import plus_icon from '../../assets/icons/plus.png';

const Myboats = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Boats</Text>
      </View>
      <View style={styles.bookingList}>
        <BoatCard
          title="Bass boat"
          subtitle="1 - 3 People"
          cardColor="#ADCB4D"
          customIcon={boat_img}
          width="86"
          height="86"
          rate="$100 / Day"
          onPressViewDetail={() => navigation.navigate('MyboatsDetails')}
          onPressDelete={() => console.log('Pressed')}
        />
        <BoatCard
          title="Bass boat"
          subtitle="1 - 3 People"
          cardColor="#ADCB4D"
          customIcon={boat_img}
          width="86"
          height="86"
          rate="$100 / Day"
          onPressViewDetail={() => navigation.navigate('MyboatsDetails')}
          onPressDelete={() => console.log('Pressed')}
        />
        <BoatCard
          title="Bass boat"
          subtitle="1 - 3 People"
          cardColor="#ADCB4D"
          customIcon={boat_img}
          width="86"
          height="86"
          rate="$100 / Day"
          onPressViewDetail={() => navigation.navigate('MyboatsDetails')}
          onPressDelete={() => console.log('Pressed')}
        />
        <View style={styles.addBoat}>
          <Image source={plus_icon} />
          <Text style={styles.addBoatText}>Add New Boats</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    width: '100%',
  },
  header: {
    height: 48,
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    textAlign: 'center',
  },
  bookingList: {
    marginTop: 20,
    gap: 10,
  },
  addBoat: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#191919',
    borderStyle: 'dotted',
    height: 64,
    width: '100%',
    marginTop: 10,
  },
  addBoatText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    marginLeft: 10,
  },
});

export default Myboats;
