import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NotificationRowModel } from '../../models/notification-row.model';

export interface NotificationRowProps {
  notification: NotificationRowModel;
}

const NotificationRow = (props: NotificationRowProps) => {
  const { notification } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle}></View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{notification.title}</Text>
          <Text style={styles.subtitle}>{notification.subtitle}</Text>
          <Text style={styles.date}>{notification.timestamp}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    paddingBottom: 20,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    width: '100%',
  },
  iconContainer: {
    display: 'flex',
    width: 50,
    height: 100,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#C4C4C4',
  },
  textContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#312e38',
  },
  subtitle: {
    color: '#B2B2B2',
    fontSize: 14,
  },
  date: {
    color: '#B2B2B2',
    fontSize: 14,
    alignSelf: 'flex-end',
  },
});

export default NotificationRow;
