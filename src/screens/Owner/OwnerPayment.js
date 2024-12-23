import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/EvilIcons';
import {MONEY_NOTE} from '../../strings/en';
import TransactionCard from '../../components/TransactionCard';

const OwnerPayment = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.paymentContainer}>
        <Text style={styles.title}>Payments</Text>
        <View style={styles.balanceContainer}>
          <Text style={styles.balTitle}>Current Balance</Text>
          <View style={styles.balCreditContainer}>
            <Text style={styles.balCredit}>$8,545.00</Text>
            <Icon name="eye-off" size={24} color="white" />
            {/* <Icon name="eye" size={24} color="white" /> */}
          </View>
        </View>
        <TouchableOpacity style={styles.btnWithdrawContainer}>
          <View style={styles.balCreditContainer}>
            <Text style={styles.btnWithdrawTitle}>Withdraw Money</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.noteContainer}>
          <Text style={styles.noteText}>{MONEY_NOTE}</Text>
        </View>
        <View style={styles.transactionContainer}>
          <View style={styles.transactionTitleContainer}>
            <Text style={styles.transactionTitleText}>Transaction</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('OwnerAllTransaction')}>
              <Text style={styles.transactionSellAll}>Sell All</Text>
            </TouchableOpacity>
          </View>

          <TransactionCard
            paymentMethod="PayPal"
            status="(Pending)"
            date="12 Dec, 2024"
            amount="500.00"
          />
        </View>

        <TransactionCard
          paymentMethod="PayPal"
          status="(Successful)"
          date="12 Dec, 2024"
          amount="500.00"
        />

        <TransactionCard
          paymentMethod="PayPal"
          status="(Failed)"
          date="12 Dec, 2024"
          amount="500.00"
        />

        <TransactionCard
          paymentMethod="PayPal"
          status="(Successfull)"
          date="12 Dec, 2024"
          amount="500.00"
        />

        <TouchableOpacity style={styles.btnMngPaymentContainer}>
          <Text style={styles.btnMngPaymentTitle}>Manage Payment Methods</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnMngPaymentTitle: {
    color: 'white',
    fontFamily: 'KnulTrial-Regular',
    fontSize: 16,
    fontWeight: '500',
  },
  btnMngPaymentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 8,
    height: 52,
    marginHorizontal: 40,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  payMoney: {
    color: '#EBDE6D',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '500',
  },
  payMethodDate: {
    color: '#A2A2A7',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 5,
  },
  payMethodStatus: {
    color: '#EBDE6D',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 10,
  },
  paymentMethodCard: {flexDirection: 'row'},
  payMethodTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  transacHistoryContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transacHistoryCard: {},
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  paymentContainer: {
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    textAlign: 'center',
  },
  balanceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  balTitle: {
    color: '#A2A2A7',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  balCredit: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  balCreditContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  btnWithdrawContainer: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 8,
    height: 52,
    marginHorizontal: 40,
  },
  btnWithdrawTitle: {
    color: '#111111',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'KnulTrial-Regular',
  },
  noteContainer: {
    marginTop: 10,
    flexDirection: 'row',
    width: 240,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  noteText: {
    color: '#A2A2A7',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'KnulTrial-Regular',
    textAlign: 'center',
    marginLeft: 5,
  },
  transactionContainer: {
    marginTop: 20,
  },
  transactionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionTitleText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  transactionSellAll: {
    color: '#6D6D6D',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
});

export default OwnerPayment;
