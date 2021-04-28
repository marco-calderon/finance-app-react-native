import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Transaction from '../../components/Transaction';
import { TransactionModel } from '../../models/transaction.model';

export interface TransactionContainerProps {
  transactions: TransactionModel[];
}

const TransactionsContainer = (props: TransactionContainerProps) => {
  const { transactions } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <View style={styles.transactionContainer}>
        {transactions && transactions.length > 0 && transactions.map(t => <Transaction transaction={t} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    height: 24,
    color: '#33404F',
    flex: 1,
  },
  transactionContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});

export default TransactionsContainer;
