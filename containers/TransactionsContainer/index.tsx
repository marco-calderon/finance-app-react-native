import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Transaction from '../../components/Transaction';
import { TransactionModel } from '../../models/transaction.model';

export interface TransactionContainerProps {
  transactions: TransactionModel[];
  onAddClick?: Function;
}

const TransactionsContainer = (props: TransactionContainerProps) => {
  const { transactions, onAddClick } = props;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Transactions</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => onAddClick && onAddClick()}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transactionContainer}>
        {transactions && transactions.length > 0 && transactions.map(t => <Transaction key={t.id} transaction={t} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    width: 70,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#00DDA3',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 12,
    color: '#fff',
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
