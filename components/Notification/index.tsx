import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NotificationModel } from '../../models/notification.model';

export interface NotificationProps {
  notification: NotificationModel;
}

const Notification = (props: NotificationProps) => {
  const { notification } = props;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {notification.svg && notification.svg}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{notification.title}</Text>
        <Text style={styles.subtitle}>{notification.subtitle}</Text>
      </View>
      <TouchableOpacity style={styles.closeButton}>
        <Ionicons name="ios-close-outline" size={16} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    display: 'flex',
    borderRadius: 20,
    flexDirection: 'row',
    // shadowColor: 'rgb(51, 64, 79)',
    // shadowOffset: { width: 0, height: 0 },
    // shadowRadius: 5,
    // shadowOpacity: .15,
    // marginBottom: 25,
    // marginTop: 25,
    position: 'relative',
  },
  iconContainer: {
    width: 150,
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15,
    flex: 1,
    marginRight: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    height: 22,
    color: '#33404F',
  },
  subtitle: {
    fontSize: 12,
    color: '#aaaaaa',
    marginTop: 5,
  },
  button: {
    marginTop: 10,
  },
  closeButton: {
    width: 32,
    height: 32,
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#00DDA3',
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Notification;
