import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/Auth/SplashScreen';
import GetStartedScreen from '../screens/Auth/GetStarted';
import RegisterAsOwner from '../screens/Auth/RegisterAsOwner';
import RegisterAsRenter from '../screens/Auth/RegisterAsRenter';
import CreateAccount from '../screens/Auth/CreateAccount';
import OwnerNavigator from './OwnerNavigator';
import RenterNavigator from './RenterNavigator';
import MyboatsDetailsScreen from '../screens/Owner/MyboatsDetails';
import OwnerAllTransactionScreen from '../screens/Owner/OwnerAllTransaction';
import AddBoatScreen from '../screens/Owner/AddBoat';
import FilterBoatsList from '../screens/Renter/FilterBoatsList';
import BookingScreen from '../screens/Renter/Booking';
import InboxScreen from '../screens/Renter/Inbox';
import LoginScreen from '../screens/Auth/LoginScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPassword';
import ForgotPswdOTPScreen from '../screens/Auth/ForgotPswdOTP';
import UpdatePasswordScreen from '../screens/Auth/UpdatePassword';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPswdOTP"
          component={ForgotPswdOTPScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpdatePassword"
          component={UpdatePasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterAsOwner"
          component={RegisterAsOwner}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterAsRenter"
          component={RegisterAsRenter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OwnerHome"
          component={OwnerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RenterHome"
          component={RenterNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyboatsDetails"
          component={MyboatsDetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OwnerAllTransaction"
          component={OwnerAllTransactionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddBoat"
          component={AddBoatScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FilterBoats"
          component={FilterBoatsList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Inbox"
          component={InboxScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
