import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import NotificationsContainer from '../containers/NotificationsContainer';
import { v4 as uuid } from 'uuid';
import { ScrollView } from 'react-native-gesture-handler';
import { NotificationModel } from '../models/notification.model';

const notifications = [
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1619814937000 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1619123731000 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1619123731000 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1616445331000 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1616445331000 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1616445331000 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1611347731000 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1611347731000 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1611347731000 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1611347731000 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1606077331000 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1606077331000 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1606077331000 },
]

export default function TabNotificationsScreen() {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const handleOnDismiss = (notification: NotificationModel) => {
    console.log(notification);
  }

  const handleOnDelete = (notification: NotificationModel) => {
    console.log(notification);
  }

  return (
    <ScrollView style={styles.container} scrollEnabled={scrollEnabled}>
      <NotificationsContainer notifications={notifications} onSwipeStart={() => setScrollEnabled(false)} onSwipeEnd={() => setScrollEnabled(true)} onDismiss={handleOnDismiss} onDelete={handleOnDelete} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    display: 'flex',
    width: '100%',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
