import React from 'react';

import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { NotificationRowModel } from '../../models/notification-row.model';
import { Ionicons } from '@expo/vector-icons';
import Swipeable from 'react-native-swipeable';
import * as timeago from 'timeago.js';

export interface NotificationRowProps {
  notification: NotificationRowModel;
  onSwipeStart?: Function;
  onSwipeEnd?: Function;
  onDismiss?: Function;
  onDelete?: Function;
}

const buttonStyles = StyleSheet.create({
  button: {
    width: 75,
    height: 100,
    display: 'flex',
  },  
  dismissButton: {
    backgroundColor: '#ffe57f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const NotificationRow = (props: NotificationRowProps) => {
  const { notification, onSwipeEnd, onSwipeStart, onDismiss, onDelete } = props;

  return (
    <Swipeable
      rightButtons={[
        <TouchableHighlight onPress={() => onDismiss && onDismiss(notification)}>
          <View style={[buttonStyles.button, buttonStyles.dismissButton]}>
            <Ionicons name="ios-checkmark-outline" color="#000" size={32} />
          </View>
        </TouchableHighlight>,
        <TouchableHighlight onPress={() => onDelete && onDelete(notification)}>
          <View style={[buttonStyles.button, buttonStyles.deleteButton]}>
            <Ionicons name="ios-trash-outline" color="#000" size={32} />
          </View>
        </TouchableHighlight>
      ]}
      onSwipeStart={onSwipeStart}
      onSwipeRelease={onSwipeEnd}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.iconCircle}></View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{notification.title}</Text>
            <Text style={styles.subtitle}>{notification.subtitle}</Text>
            <Text style={styles.date}>{timeago.format(notification.timestamp)}</Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
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
    flex: 1,
  },
  date: {
    color: '#B2B2B2',
    fontSize: 14,
    alignSelf: 'flex-end',
  },
});

export default NotificationRow;
