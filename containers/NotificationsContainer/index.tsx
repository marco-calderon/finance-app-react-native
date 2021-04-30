import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NotificationRow from '../../components/NotificationRow';
import { NotificationRowModel } from '../../models/notification-row.model';

export interface NotificationsContainerProps {
  notifications: NotificationRowModel[];
}

const NotificationsContainer = (props: NotificationsContainerProps) => {
  const { notifications } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My notifications</Text>
      <View style={styles.notificationsContainer}>
        {notifications && notifications.length > 0 && notifications.map(n => <NotificationRow key={n.id} notification={n} />)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // margin: 20,
  },
  title: {
    fontSize: 20,
    color: '#33404F',
    fontWeight: 'bold',
  },
  notificationsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
})

export default NotificationsContainer;
