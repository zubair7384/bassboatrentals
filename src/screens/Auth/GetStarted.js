import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import BbrRect from '../../assets/images/bbr_rect.png';
import {GETSTARTED_TITLE, GUEST} from '../../strings/en';
import {SCREEN_HEIGHT} from '../../utils/dimensions';

const GetStarted = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.col}>
        <View style={styles.imageContainer}>
          <Image source={BbrRect} style={styles.logo} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{GETSTARTED_TITLE}</Text>
        </View>
        <View style={styles.guestContainer}>
          <View style={styles.btnRow}>
            <TouchableOpacity
              style={styles.btnSignInContainer}
              onPress={() => navigation.navigate('Main')}>
              <Text style={styles.btnSignInText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnSignUpContainer}
              onPress={() => navigation.navigate('CreateAccount')}>
              <Text style={styles.btnSignUpText}>Signup</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.guest}>{GUEST}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  col: {flex: 1, margin: 10},
  imageContainer: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.4,
    borderRadius: 20,
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.35,
    justifyContent: 'center',
    // backgroundColor: 'green',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 44,
    // fontWeight: '700',
    lineHeight: 50,
    fontFamily: 'KnulTrial-Bold',
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    width: '100%',
    marginVertical: 20,
  },
  btnSignInContainer: {
    backgroundColor: '#272727',
    flex: 1,
    borderRadius: 8,
    height: SCREEN_HEIGHT * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSignInText: {
    color: '#FFFFFF',
    fontSize: SCREEN_HEIGHT * 0.02,
    fontWeight: 'bold',
    fontFamily: 'KnulTrial-Regular',
  },
  btnSignUpContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderRadius: 8,
    height: SCREEN_HEIGHT * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSignUpText: {
    color: '#000000',
    fontSize: SCREEN_HEIGHT * 0.02,
    fontWeight: 'bold',
    fontFamily: 'KnulTrial-Regular',
  },
  guestContainer: {
    position: 'absolute',
    height: SCREEN_HEIGHT * 0.18,
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  guest: {
    color: '#FFFFFF',
    fontSize: SCREEN_HEIGHT * 0.02,
    fontFamily: 'KnulTrial-Regular',
    // backgroundColor: 'orange',
  },
});

export default GetStarted;
