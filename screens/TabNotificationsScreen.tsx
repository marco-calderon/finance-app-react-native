import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import NotificationsContainer from '../containers/NotificationsContainer';
import { v4 as uuid } from 'uuid';
import { ScrollView } from 'react-native-gesture-handler';

const notifications = [
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1 },
  { id: uuid(), title: 'Your account has been upgraded', subtitle: 'Verify your email for details.', timestamp: 1 },
]

export default function TabNotificationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <NotificationsContainer notifications={notifications} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
