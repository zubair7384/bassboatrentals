import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import notificationIcon from '../../assets/icons/Notification.png';
import chatIcon from '../../assets/icons/chat.png';
import CardList from '../../components/CardList';
import boat_icon from '../../assets/icons/boat_icon.png';
import plus_icon from '../../assets/icons/plus.png';
import personOne from '../../assets/images/person1.jpeg';
import personTwo from '../../assets/images/person2.jpeg';
import personThree from '../../assets/images/person3.jpeg';

const OwnerHomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginHorizontal: 15}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Marty Byrde</Text>
          <View style={styles.headerIcon}>
            <Image source={chatIcon} style={styles.IconImage} />
            <Image source={notificationIcon} style={styles.IconImage} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cardList}>
            <CardList
              title="Total Boats Listed"
              subtitle="16 Boats"
              cardColor="#6C24A1"
              customIcon={boat_icon}
              width="20"
              height="20"
              onPress={() => navigation.navigate('Myboats')}
            />
            <CardList
              title="Active Bookings"
              subtitle="4 Active"
              cardColor="#DF6F75"
              customIcon={boat_icon}
              width="20"
              height="20"
              onPress={() => console.log('Pressed')}
            />
            <CardList
              title="Add New Boat"
              subtitle="Add new Boat"
              cardColor="#ADCB4D"
              customIcon={plus_icon}
              width="20"
              height="20"
              onPress={() => navigation.navigate('Myboats')}
            />
          </View>
          <View>
            <View style={styles.headerBooking}>
              <Text style={styles.headerBookingTitle}>Upcoming Bookings</Text>
              <Text style={styles.headerBookingSubTitle}>View All</Text>
            </View>
            <View style={styles.bookingList}>
              <CardList
                title="Mick Doe - Bass boat"
                subtitle="Dec 15, 2024 | 10:00 AM"
                cardColor="#ADCB4D"
                customIcon={personOne}
                width="43"
                height="43"
                onPress={() => console.log('Pressed')}
              />
              <CardList
                title="John Noah - Phoenix PHX "
                subtitle="Dec 16, 2024 | 4:15 PM"
                cardColor="#ADCB4D"
                customIcon={personTwo}
                width="43"
                height="43"
                onPress={() => console.log('Pressed')}
              />
              <CardList
                title="Louis Jref - Nitro Z20"
                subtitle="Jan 4th, 2025 | 11:30 AM"
                cardColor="#ADCB4D"
                customIcon={personThree}
                width="43"
                height="43"
                onPress={() => console.log('Pressed')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'KnulTrial-Regular',
    height: '100%',
  },
  headerIcon: {
    flexDirection: 'row',
    gap: 10,
  },
  IconImage: {
    height: 20,
    width: 22,
    resizeMode: 'contain',
  },
  cardList: {
    marginTop: 20,
    gap: 10,
  },
  headerBooking: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  headerBookingTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  headerBookingSubTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  bookingList: {
    gap: 10,
  },
});

export default OwnerHomeScreen;
