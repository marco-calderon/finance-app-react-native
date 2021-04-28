import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StyleSheetProperties } from 'react-native';

const buttonStyles = (color: string = 'success', size: string = 'sm') => {
  let styles = {};

  switch(color) {
    case 'success':
      styles = { backgroundColor: '#00DDA3' };
    default:
      styles =  { backgroundColor: '#00DDA3' };
  }

  switch(size) {
    case 'sm':
      styles = {...styles, height: 30, borderRadius: 15 };
    default:
      styles = {...styles, height: 30, borderRadius: 15 };
  }

  return styles;
}

export interface RoundedButtonProps {
  color: string;
  size: string;
  text?: string;
  children?: ReactNode[] | ReactNode | undefined;
  onClick?: Function;
  style?: any;
}

const RoundedButton = (props: RoundedButtonProps) => {
  const { color, size, text, onClick, style } = props;

  return (
    <TouchableOpacity style={[styles.container, style, buttonStyles(color, size)]} onPress={() => onClick && onClick()}>
      <Text style={styles.title}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#fff',
  },
});

export default RoundedButton;
