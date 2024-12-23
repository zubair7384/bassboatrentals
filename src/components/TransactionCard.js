import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TransactionCard = ({paymentMethod, status, date, amount}) => {
  return (
    <View style={styles.transacHistoryContainer}>
      <View style={styles.transacHistoryCard}>
        <View style={styles.paymentMethodCard}>
          <Text style={styles.payMethodTitle}>{paymentMethod}</Text>
          <Text style={styles.payMethodStatus}>{status}</Text>
        </View>
        <Text style={styles.payMethodDate}>{date}</Text>
      </View>
      <Text style={styles.payMoney}>- ${amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: '#000',
  },
  transacHistoryCard: {},
});

export default TransactionCard;
