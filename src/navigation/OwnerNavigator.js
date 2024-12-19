import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OwnerHomeScreen from '../screens/Owner/OwnerHome';

const Tab = createBottomTabNavigator();

const OwnerNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="OwnerHome" component={OwnerHomeScreen} />
      {/* Add more tabs/screens here for owners */}
    </Tab.Navigator>
  );
};

export default OwnerNavigator;
