import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { SvgProps, Path } from "react-native-svg"
import { headerStyles } from '../../utils/color.utils';

const LogoSvg = (props: SvgProps) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 42 42"
      fill="none"
      {...props}
    >
      <Path
        d="M21 21H0L21 0v21zM21 21h21L21 42V21zM42 0v21L21 0h21zM0 42V21l21 21H0z"
        fill={props.color}
      />
    </Svg>
  )
}

export interface HeaderTitleProps {
  color: 'dark' | 'light';
}

const HeaderTitle = (props: HeaderTitleProps) => {
  const colorStyle = headerStyles(props.color);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoSvg style={styles.logo} fill={colorStyle.color} width={24} height={24} />
        <Text style={[styles.title, colorStyle]}>INVETO</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Ionicons size={56} color={colorStyle.color} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginRight: 20,
  },
  buttonContainer: {
    width: 24,
    height: 24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default HeaderTitle;
