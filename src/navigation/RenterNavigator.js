import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import RenterHomeScreen from '../screens/Renter/RenterHome';
import MyBoatsScreen from '../screens/Owner/Myboats';
import home_icon from '../assets/icons/home_icon.png';
import location_icon from '../assets/icons/my_location.png';
import calendar_icon from '../assets/icons/calender_icon.png';
import outline_icon from '../assets/icons/Outline.png';
import profile_icon from '../assets/icons/user_square.png';

import OwnerPaymentScreen from '../screens/Owner/OwnerPayment';
import OwnerProfileScreen from '../screens/Owner/OwnerProfile';
import BookingScreen from '../screens/Owner/Booking';

const Tab = createBottomTabNavigator();

const renderTabBarIcon = (route, focused) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = home_icon;
  } else if (route.name === 'Myboats') {
    iconName = location_icon;
  } else if (route.name === 'Booking') {
    iconName = calendar_icon;
  } else if (route.name === 'Profile') {
    iconName = profile_icon;
  }

  return (
    <Image
      source={iconName}
      style={{
        width: focused ? 26 : 24,
        height: focused ? 26 : 24,
        tintColor: focused ? '#FFFFFF' : '#555553',
      }}
    />
  );
};

const RenterNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => renderTabBarIcon(route, focused),
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#888888',
        tabBarStyle: {
          backgroundColor: '#191919',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: -2},
          shadowRadius: 8,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      })}>
      <Tab.Screen name="Home" component={RenterHomeScreen} />
      <Tab.Screen name="Myboats" component={MyBoatsScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Profile" component={OwnerProfileScreen} />
    </Tab.Navigator>
  );
};

export default RenterNavigator;
