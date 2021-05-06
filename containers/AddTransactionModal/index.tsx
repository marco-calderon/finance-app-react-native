import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Input from '../../components/Input';
import RoundedButton from '../../components/RoundedButton';

const AddTransactionModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Text style={styles.headerButton}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.headerButton, { color: '#00DDA3' }]}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <RoundedButton size="md" color="#00DDA3" type="fill" text="Income" />
        <RoundedButton size="md" color="#CAA627" type="outline" text="Expense" />
      </View>
      <View style={styles.form}>
        <Input  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerButton: {
    fontSize: 20,
    color: '#999999',
  },
  buttonsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 48,
    paddingRight: 48,
    marginTop: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});

export default AddTransactionModal;
