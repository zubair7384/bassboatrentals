import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../../assets/images/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getToken} from '../../utils/storage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (token) {
        console.log('Token found, navigating to Home...');
        navigation.replace('RenterHome');
      } else {
        navigation.replace('GetStarted');
      }
    };

    checkToken();

    // const timer = setTimeout(() => {
    //   navigation.replace('GetStarted');
    // }, 3000);

    // return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#000000', '#1a1a1a', '#1f1f1f', '#1a1a1a', '#000000']}
      style={styles.container}
      locations={[0, 0.4, 0.47, 0.55, 1]}
      useAngle={true}
      angle={180}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 400,
  },
  logo: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
});

export default SplashScreen;
