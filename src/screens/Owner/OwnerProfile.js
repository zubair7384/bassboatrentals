import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/AntDesign';
import profileImage from '../../assets/images/profile_image.jpeg';
import aboutIcon from '../../assets/icons/about_icon.png';
import pricingIcon from '../../assets/icons/pricing_icon.png';
import faqIcon from '../../assets/icons/faq_icon.png';
import contactIcon from '../../assets/icons/contact_icon.png';
import worksIcon from '../../assets/icons/howItWorks_icon.png';
import moreIcon from '../../assets/icons/more_icon.png';

import {signOut} from 'firebase/auth';
import {removeToken} from '../../utils/storage';
import {auth} from '../../firebase/firebaseConfig';

const OwnerProfile = ({navigation}) => {
  const handleLogout = async navigation => {
    try {
      // Firebase sign out
      await signOut(auth);
      console.log('User signed out from Firebase.');

      // Clear AsyncStorage
      await removeToken();
      console.log('Token removed from AsyncStorage.');

      // Navigate to Login screen
      navigation.replace('GetStarted');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Details</Text>

      <View style={styles.contentContainer}>
        <View style={styles.card}>
          <Image source={profileImage} style={styles.profileImage} />
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>Marty Byrde</Text>
            <Text style={styles.profileUsername}>@Marty Byrde</Text>
          </View>
        </View>

        <View style={styles.optionsContainer}>
          {[
            {label: 'About Us', icon: aboutIcon},
            {label: 'Pricing', icon: pricingIcon},
            {label: 'FAQ', icon: faqIcon},
            {label: 'Contact Us', icon: contactIcon},
            {label: 'How it Works', icon: worksIcon},
            {label: 'More', icon: moreIcon},
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionRow}
              onPress={() => {
                if (item.label === 'About Us') {
                  navigation.navigate('AboutUs');
                } else if (item.label === 'FAQ') {
                  navigation.navigate('FAQ');
                } else if (item.label === 'Contact Us') {
                  navigation.navigate('ContactUs');
                } else if (item.label === 'Pricing') {
                  navigation.navigate('Pricing');
                } else if (item.label === 'How it Works') {
                  navigation.navigate('HowItWorks');
                }
              }}>
              <Image source={item.icon} style={styles.imageIcon} />
              <Text style={styles.optionLabel}>{item.label}</Text>
              <Icon name="chevron-right" size={24} color="#fff" />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => handleLogout(navigation)}>
          <Icons
            name="logout"
            size={20}
            color="#111"
            style={styles.logoutIcon}
          />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  contentContainer: {
    marginHorizontal: 10,
  },
  title: {
    color: '#fff',
    fontFamily: 'knultrial-regular',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 89,
    width: '100%',
    backgroundColor: '#191919',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  profileUsername: {
    color: '#b4b4b4',
    fontSize: 14,
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: '#333',
  },
  optionIcon: {
    marginRight: 15,
  },
  optionLabel: {
    fontSize: 16,
    color: '#fff',
    flex: 1,
  },
  logoutButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
  },
  logoutButtonText: {
    color: '#111',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  logoutIcon: {
    marginRight: 5,
  },
  imageIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
    objectFit: 'contain',
  },
});

export default OwnerProfile;
