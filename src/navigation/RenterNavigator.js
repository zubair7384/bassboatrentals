import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RenterHomeScreen from '../screens/Renter/RenterHome';

const Tab = createBottomTabNavigator();

const RenterNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="RenterHome" component={RenterHomeScreen} />
      {/* Add more tabs/screens here for renters */}
    </Tab.Navigator>
  );
};

export default RenterNavigator;
