import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingIcon from '../../assets/icons/setting_icon.png';
import verifyIcon from '../../assets/icons/verifyStar_icon.png';
import withdrawIcon from '../../assets/icons/withdraw_icon.png';
import ChatTab from '../../components/ChatTab';
import PaymentTab from '../../components/PaymentTab';
import BookingTab from '../../components/BookingTab';


const Booking = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Inbox');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
        <Text style={styles.headerText}>Dashboard</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <Image source={SettingIcon} style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Neil Beebee</Text>
          <Text style={styles.onlineStatus}>(Online)</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton}>
          <Icon
            name="location-enter"
            size={20}
            color="#fff"
            style={styles.logoutIcon}
          />
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={verifyIcon} style={styles.settingsIcon} />
          <Text style={styles.actionText}>Become A Pro Staff</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.withdrawActionBtn}>
          <Image source={withdrawIcon} style={styles.settingsIcon} />
          <Text style={styles.actionText}>Withdrawals</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.borderStyle} />

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Inbox' && styles.activeTab]}
          onPress={() => setActiveTab('Inbox')}
        >
          <Text style={[styles.tabText, activeTab === 'Inbox' && { color: '#111' }]}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Bookings' && styles.activeTab]}
          onPress={() => setActiveTab('Bookings')}
        >
          <Text style={[styles.tabText, activeTab === 'Bookings' && { color: '#111' }]}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Payments' && styles.activeTab]}
          onPress={() => setActiveTab('Payments')}
        >
          <Text style={[styles.tabText, activeTab === 'Payments' && { color: '#111' }]}>Payments</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.tabContent}>
        {activeTab === 'Inbox' && <ChatTab />}
        {activeTab === 'Bookings' && <BookingTab />}
        {activeTab === 'Payments' && <PaymentTab navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible} />}
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: '15%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  settingsIcon: {
    height: 24,
    width: 24,
    marginRight: 5
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
  },
  onlineStatus: {
    color: '#55FF70',
    fontSize: 14,
    marginLeft: 10,
    fontFamily: 'knultrial-regular',
  },
  logoutButton: {
    flexDirection: 'row',
  },
  logoutIcon: {
    marginRight: 5,
  },
  logout: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  withdrawActionBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 5,
  },
  borderStyle: {
    borderTopWidth: 1,
    borderTopColor: '#414141',
    marginVertical: 20

  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#262720',
    borderRadius: 26,
    height: 40,
    marginBottom: 10
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderRadius: 26,
  },
  tabText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'knultrial-regular',

  },
  tabContent: {
    flex: 1
  }
});

export default Booking;
