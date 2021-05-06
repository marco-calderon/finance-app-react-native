import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export interface InputProps {
  label: string;
  style?: any;
  placeholder: string;
}

const Input = (props: InputProps) => {
  const { label, style, placeholder } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder={placeholder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#33404F',
  },
  inputContainer: {
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
    padding: 12,
    display: 'flex',
    alignItems: 'center',
  }
});

export default Input;
