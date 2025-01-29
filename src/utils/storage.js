import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

export const saveToken = async token => {
  try {
    await AsyncStorage.setItem('authToken', token);
    console.log('Token saved successfully');
  } catch (error) {
    console.error('Error saving token:', error);
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('authToken');
    console.log('Token removed successfully');
  } catch (error) {
    console.error('Error removing token:', error);
  }
};

export const saveUserData = async userData => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
    console.log('User data saved successfully');
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};

export const getUserData = async () => {
  try {
    const data = await AsyncStorage.getItem('userData');
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return null;
  }
};
