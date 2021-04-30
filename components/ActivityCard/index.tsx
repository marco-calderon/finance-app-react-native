import React, { ReactChild } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export interface ActivityCardProps {
  svgComponent: ReactChild;
  title: String;
  onClick?: Function;
}

const ActivityCard = (props: ActivityCardProps) => {
  const { title, svgComponent, onClick } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={(e: any) => onClick && onClick(title)}>
      {svgComponent}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: 'rgb(51, 64, 79)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: .15,
    shadowRadius: 25,
    elevation: 5,
    minHeight: 140,
    width: 100,
    maxWidth: 100,
  },
  title: {
    fontSize: 15,
    color: '#33404F',
  },
});

export default ActivityCard;
