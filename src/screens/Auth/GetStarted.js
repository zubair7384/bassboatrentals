import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import BbrRect from '../../assets/images/bbr_rect.png';
import {GETSTARTED_TITLE, GUEST} from '../../strings/en';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/dimensions';

const GetStarted = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
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
                  onPress={() => navigation.navigate('Login')}>
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
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 20,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  col: {
    flex: 1,
    marginHorizontal: SCREEN_WIDTH * 0.05,
  },
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
  },
  title: {
    color: '#FFFFFF',
    fontSize: SCREEN_HEIGHT * 0.05,
    lineHeight: SCREEN_HEIGHT * 0.06,
    fontFamily: 'KnulTrial-Bold',
    textAlign: 'left',
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SCREEN_WIDTH * 0.02,
    width: '100%',
    marginVertical: SCREEN_HEIGHT * 0.02,
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
    bottom: Platform.OS === 'ios' ? 0 : 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  guest: {
    color: '#FFFFFF',
    fontSize: SCREEN_HEIGHT * 0.02,
    fontFamily: 'KnulTrial-Regular',
    textAlign: 'center',
    height: '30',
  },
});

export default GetStarted;
