import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import AuthProvider from './src/firebase/AuthContext';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
      <Toast />
    </>
  );
}
