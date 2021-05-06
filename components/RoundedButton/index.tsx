import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StyleSheetProperties } from 'react-native';

const buttonStyles = (color: string = 'success', size: string = 'sm', type: string = 'fill') => {
  let styles = {};
  let selectedColor = '';

  switch(color) {
    case 'success':
      selectedColor = '#00DDA3';
      break;
    case 'disabled':
      selectedColor = '#B5C5C3';
      break;
    case 'black':
      selectedColor = '#000';
      break;
    default:
      selectedColor = color;
      break;
  }

  switch(size) {
    case 'sm':
      styles = {...styles, height: 30, borderRadius: 15 };
      break;
    case 'md':
      styles = {...styles, height: 30, borderRadius: 15 };
      break;
    default:
      styles = {...styles, height: 30, borderRadius: 15 };
      break;
  }

  switch(type) {
    case 'fill':
      styles = {...styles, backgroundColor: selectedColor, color: '#fff', borderColor: selectedColor };
      break;
    case 'outline':
      styles = {...styles, backgroundColor: 'transparent', borderColor: selectedColor, color: selectedColor };
      break;
    default:
      styles = {...styles, backgroundColor: selectedColor, color: '#fff' };
      break;
  }

  return styles;
}

const textStyles = (color: string = 'success', size: string = 'sm', type: string = 'fill') => {
  let styles = {};
  let selectedColor = '';

  switch(color) {
    case 'success':
      selectedColor = '#00DDA3';
      break;
    case 'disabled':
      selectedColor = '#B5C5C3';
      break;
    case 'black':
      selectedColor = '#000';
      break;
    default:
      selectedColor = color;
      break;
  }

  switch(type) {
    case 'fill':
      styles = { color: '#fff' };
      break;
    case 'outline':
      styles = { color: selectedColor };
      break;
    case 'fill':
      styles = { color: '#fff' };
      break;
  }

  switch(size) {
    case 'sm':
      styles = {...styles, fontSize: 10 };
      break;
    case 'md':
      styles = {...styles, fontSize: 15 };
      break;
    default:
      styles = {...styles, fontSize: 15 };
      break;
  }

  return styles;
}

export interface RoundedButtonProps {
  color: string;
  size: string;
  type?: string;
  text?: string;
  children?: ReactNode[] | ReactNode | undefined;
  onClick?: Function;
  style?: any;
}

const RoundedButton = (props: RoundedButtonProps) => {
  const { color, size, text, onClick, style, type } = props;

  return (
    <TouchableOpacity style={[styles.container, style, buttonStyles(color, size, type)]} onPress={() => onClick && onClick()}>
      <Text style={[styles.title, textStyles(color, size, type)]}>
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
    paddingLeft: 25,
    paddingRight: 25,
    borderWidth: 2,
  },
  title: {
    fontSize: 10,
    color: '#fff',
  },
});

export default RoundedButton;
