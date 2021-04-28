import React, { ReactChild, ReactComponentElement, ReactNode } from 'react'
import { View, Text, StyleSheet } from 'react-native';

export interface ActivityCardProps {
  svgComponent: ReactChild;
  title: String;
}

const ActivityCard = (props: ActivityCardProps) => {
  const { title, svgComponent } = props;
  return (
    <View style={styles.container}>
      {svgComponent}
      <Text style={styles.title}>{title}</Text>
    </View>
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
