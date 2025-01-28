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
