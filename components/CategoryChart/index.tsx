import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../Themed';

export interface CategoryChartProps {
  title: string;
  number: string;
  percentage: number;
  color: string;
  style?: any;
}

const CategoryChart = (props: CategoryChartProps) => {
  const { title, number, percentage, color, style } = props;
  return (
    <View style={style ? {...styles.container, ...style } : styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.number}>{number}</Text>
      <View style={styles.chartContainer}>
        <View style={styles.chartBackground}></View>
        <View style={{...styles.chartForeground, width: `${percentage}%`, backgroundColor: color }}></View>
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
    fontSize: 14,
    height: 18,
    color: '#fff',
  },
  number: {
    fontSize: 24,
    height: 28,
    color: '#fff',
  },
  chartContainer: {
    position: 'relative',
    marginTop: 14,
    display: 'flex',
    width: 'auto',
    height: 12,
  },
  chartBackground: {
    backgroundColor: '#fff',
    position: 'absolute',
    width: '100%',
    height: 12,
    borderRadius: 6,
    left: 0,
    top: 0,
  },
  chartForeground: {
    position: 'absolute',
    height: 12,
    borderRadius: 6,
    left: 0,
    top: 0,
  },
});

export default CategoryChart;
