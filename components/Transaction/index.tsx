import React, { ReactChild } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TransactionModel } from '../../models/transaction.model';

export interface TransactionProps {
  transaction: TransactionModel;
}

const Transaction = (props: TransactionProps) => {
  const { title, subtitle, value, date } = props?.transaction;
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {value >= 0 && <Ionicons name="ios-caret-down-outline" fill="#fff" />}
        {value < 0 && <Ionicons name="ios-caret-up-outline" fill="#fff" />}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.spacer}></View>
      <View style={styles.endContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 70,
    flexDirection: 'row',
  },
  icon: {
    width: 35,
    height: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    backgroundColor: '#eaeaea',
    marginRight: 13,
  },
  iconPositive: {
    backgroundColor: '#00DDA3'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  endContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    height: 19,
    color: '#33404F'
  },
  subtitle: {
    fontSize: 11,
    height: 15,
    color: '#33404F'
  },
  spacer: {
    flex: 1,
  },
});

export default Transaction;
