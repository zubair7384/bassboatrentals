import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/Auth/SplashScreen';
import GetStartedScreen from '../screens/Auth/GetStarted';
import RegisterAsOwner from '../screens/Auth/RegisterAsOwner';
import CreateAccount from '../screens/Auth/CreateAccount';
import OwnerNavigator from './OwnerNavigator';
import MyboatsDetailsScreen from '../screens/Owner/MyboatsDetails';
import RegisterOwnerDetailsScreen from '../screens/Auth/RegisterAsOwnerDetails';
import OwnerAllTransactionScreen from '../screens/Owner/OwnerAllTransaction';

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
          name="Main"
          component={OwnerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyboatsDetails"
          component={MyboatsDetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterOwnerDetails"
          component={RegisterOwnerDetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OwnerAllTransaction"
          component={OwnerAllTransactionScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
