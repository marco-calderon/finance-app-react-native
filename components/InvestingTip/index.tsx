import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TipModel } from '../../models/tip.model';
import RoundedButton from '../RoundedButton';

export interface InvestingTipProps {
  tip: TipModel;
  style?: any;
}

const InvestingTip = (props: InvestingTipProps) => {
  const { tip, style } = props;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconContainer}>
        {tip.svg && tip.svg}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{tip.title}</Text>
        <Text style={styles.subtitle}>{tip.subtitle}</Text>
        <RoundedButton style={styles.button} color="success" size="sm" text={tip.buttonText} />
      </View>
      <TouchableOpacity style={styles.closeButton}>
        <Ionicons name="ios-close-outline" size={16} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: '100%',
    display: 'flex',
    borderRadius: 20,
    flexDirection: 'row',
    shadowColor: 'rgb(51, 64, 79)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: .15,
    backgroundColor: '#fff',
    marginBottom: 25,
    marginTop: 25,
    position: 'relative',
  },
  iconContainer: {
    width: 140,
    height: 140,
    backgroundColor: '#E1FFEF',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15,
    flex: 1,
    marginRight: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    height: 22,
    color: '#33404F',
  },
  subtitle: {
    fontSize: 14,
    height: 18,
    color: '#aaaaaa',
    marginTop: 5,
  },
  button: {
    marginTop: 10,
  },
  closeButton: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#00DDA3',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InvestingTip;
