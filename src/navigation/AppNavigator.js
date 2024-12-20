import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/Auth/SplashScreen';
import GetStartedScreen from '../screens/Auth/GetStarted';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterAsOwner from '../screens/Auth/RegisterAsOwner';
import RegisterOwnerDetails from '../screens/Auth/RegisterAsOwnerDetails';
import RegisterAsRenter from '../screens/Auth/RegisterAsRenter';
import CreateAccount from '../screens/Auth/CreateAccount';
import OwnerHomeScreen from '../screens/Owner/OwnerHome';

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
          name="RegisterOwnerDetails"
          component={RegisterOwnerDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OwnerHome"
          component={OwnerHomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
