import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NotificationRow from '../../components/NotificationRow';
import { NotificationRowModel } from '../../models/notification-row.model';

export interface NotificationsContainerProps {
  notifications: NotificationRowModel[];
  onSwipeStart?: Function;
  onSwipeEnd?: Function;
  onDismiss?: Function;
  onDelete?: Function;
}

const NotificationsContainer = (props: NotificationsContainerProps) => {
  const { notifications, onSwipeStart, onSwipeEnd, onDismiss, onDelete } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My notifications</Text>
      <View style={styles.notificationsContainer}>
        {notifications && notifications.length > 0
          && notifications.map(n => <NotificationRow key={n.id} notification={n} onSwipeStart={onSwipeStart} onSwipeEnd={onSwipeEnd} onDismiss={onDismiss} onDelete={onDelete} />)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    fontSize: 20,
    color: '#33404F',
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
  },
  notificationsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 25,
  },
})

export default NotificationsContainer;
