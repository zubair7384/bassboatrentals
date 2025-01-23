import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import payment_icon from '../assets/icons/paymentCard_icon.png';

import Icon from 'react-native-vector-icons/Ionicons';

const PaymentTab = ({modalVisible, setModalVisible, navigation}) => {
  const paymentData = [
    {
      id: '1',
      RenterName: 'Jake',
      BoatName: 'PHOENIX 921 ELITE',
      date: 'Friday, Feb 9, 2024 07:48',
      amount: '$460',
      bookingId: 'NaQNmzGB99RKIYqXHM3',
    },
    {
      id: '2',
      RenterName: 'Fabio',
      BoatName: 'PHOENIX 921 ELITE',
      date: 'Friday, Feb 9, 2024 07:48',
      amount: '$460',
      bookingId: 'NaQNmzGB99RKIYqXHM3',
    },
    {
      id: '3',
      RenterName: 'Neil',
      BoatName: 'PHOENIX 921 ELITE',
      date: 'Friday, Feb 9, 2024 07:48',
      amount: '$460',
      bookingId: 'NaQNmzGB99RKIYqXHM3',
    },
  ];

  const renderPaymentItem = ({item}) => (
    <View style={styles.paymentRow}>
      <Text style={styles.paymentText}>{item.RenterName}</Text>
      <Text style={styles.paymentText}>{item.BoatName}</Text>
      <Text style={styles.paymentText}>{item.date}</Text>
      <Text style={styles.paymentText}>{item.amount}</Text>
      <Text style={styles.paymentText}>{item.bookingId}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.balanceContainer}>
        <View>
          <Text style={styles.balanceTitle}>Current Balance</Text>
          <Text style={styles.balanceAmount}>{'$0.00'}</Text>
        </View>
        <TouchableOpacity
          style={styles.withdrawButton}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.withdrawButtonText}>Request Withdraw</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.allPaymentsContainer}>
        <View>
          <Text style={styles.allPaymentsTitle}>All Payments</Text>
          <Text style={styles.allPaymentsAmount}>{'$0.00'}</Text>
        </View>
        <Image source={payment_icon} style={styles.paymentImage} />
      </View>

      <View style={styles.searchExportContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#979797"
        />
        <TouchableOpacity style={styles.exportButton}>
          <Text style={styles.exportButtonText}>Export Excel</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.paymentTable}>
        <View style={styles.paymentHeader}>
          <Text style={styles.headerText}>Renter Name</Text>
          <Text style={styles.headerText}>Boat Name</Text>
          <Text style={styles.headerText}>Date Time</Text>
          <Text style={styles.headerText}>Amount</Text>
          <Text style={styles.headerText}>Booking ID</Text>
        </View>
        <FlatList
          data={paymentData}
          keyExtractor={item => item.id}
          renderItem={renderPaymentItem}
          style={styles.paymentList}
        />
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.fakeBlurBackground} />
          <View style={styles.modalContent}>
            <View style={styles.modalDragIndicator} />
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Request Withdrawal</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="close-circle-outline" size={28} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalSubtitle}>
              Withdrawal requests may take several days to process.
            </Text>
            <Text style={styles.modalLabel}>Amount to withdraw</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="$0"
              placeholderTextColor="#979797"
              keyboardType="numeric"
            />
            <Text style={styles.modalBalance}>
              {'Balance after withdrawal $0'}
            </Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.modalCloseButtonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalSubmitButton}>
                <Text style={styles.modalSubmitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 20,
  },
  balanceContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 84,
    justifyContent: 'space-between',
  },
  balanceTitle: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 5,
    fontFamily: 'knultrial-regular',
  },
  balanceAmount: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'knultrial-regular',
  },
  withdrawButton: {
    backgroundColor: '#000',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
  withdrawButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  allPaymentsContainer: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 84,
    justifyContent: 'space-between',
  },
  allPaymentsTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
    fontFamily: 'knultrial-regular',
  },
  allPaymentsAmount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'knultrial-regular',
  },
  searchExportContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#191919',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    color: '#fff',
    marginRight: 10,
  },
  exportButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  exportButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  paymentTable: {
    backgroundColor: '#262720',
    borderRadius: 8,
    padding: '3%',
  },
  paymentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '3%',
  },
  paymentImage: {
    width: 52,
    height: 52,
  },
  headerText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '3%',
    borderTopWidth: 1,
    borderColor: '#4F4F4F',
  },
  paymentText: {
    color: '#fff',
    fontSize: 12,
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  fakeBlurBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    height: 30,
    marginTop: 30,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    fontFamily: 'knultrial-regular',
    lineHeight: 24,
  },
  modalDragIndicator: {
    width: 50,
    height: 5,
    backgroundColor: '#444',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  modalContent: {
    backgroundColor: '#111111',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 40, // Extra padding for buttons
  },
  modalSubtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'knultrial-regular',
  },
  modalLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
    marginTop: 20,
    marginBottom: 10,
  },
  modalInput: {
    backgroundColor: '#191919',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 56,
    color: '#fff',
    marginBottom: 20,
  },
  modalBalance: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
    lineHeight: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 15,
  },
  modalCloseButton: {
    backgroundColor: '#FCEACE',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    flex: 1,
    height: 48,
  },
  modalCloseButtonText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
    lineHeight: 24,
    textAlign: 'center',
  },
  modalSubmitButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    flex: 1,
    height: 48,
  },
  modalSubmitButtonText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'knultrial-regular',
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default PaymentTab;
