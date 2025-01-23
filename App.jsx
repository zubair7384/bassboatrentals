import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import AuthProvider from './src/firebase/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
