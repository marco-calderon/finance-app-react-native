import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import ActivityCard from '../../components/ActivityCard';

export interface ActivitiesContainerProps {
  activities: { title: string, svg: any }[]
}

const ActivitiesContainer = (props: ActivitiesContainerProps) => {
  const { activities } = props;
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Activities</Text>
      <View style={styles.activitiesContainer}>
        {activities && activities.map(a => <ActivityCard key={a.title} title={a.title} svgComponent={a.svg} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 'auto',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    height: 24,
    color: '#33404F',
  },
  activitiesContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default ActivitiesContainer;
