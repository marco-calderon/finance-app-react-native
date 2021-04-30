import React, { ReactChild, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TransactionModel } from '../../models/transaction.model';
import Collapsible from 'react-native-collapsible';

export interface TransactionDetailsProps {
  transaction: TransactionModel;
}

const TransactionDetails = (props: TransactionDetailsProps) => {
  const { transaction } = props;

  return (
    <View style={detailsStyles.container}>
      <Text style={detailsStyles.title}>Date:</Text>
      <Text style={detailsStyles.value}>{transaction.date.toString()}</Text>
      <Text style={detailsStyles.title}>Price:</Text>
      <Text style={detailsStyles.value}>${transaction.value.toLocaleString()}</Text>
    </View>
  );
}

const detailsStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#33404F',
  },
  value: {
    fontSize: 14,
    color: '#33404F',
    marginBottom: 10,
  }
});

export interface TransactionProps {
  transaction: TransactionModel;
}

const Transaction = (props: TransactionProps) => {
  const { title, subtitle, value, date } = props?.transaction;
  const [collapsed, setCollapsed] = useState(true);

  const handleOnClick = () => {
    setCollapsed(!collapsed);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.innerContainer} onPress={handleOnClick}>
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
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <TransactionDetails transaction={props.transaction} />
      </Collapsible>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  innerContainer: {
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
