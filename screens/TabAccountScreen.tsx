import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { v4 as uuid } from 'uuid';
import SettingsBox from '../components/SettingsBox';

const settings = [
  {
    title: 'General Settings',
    settings: [
      {
        id: uuid(),
        title: 'My profile',
      },
      {
      id: uuid(),
        title: 'Cards',
      },
      {
        id: uuid(),
        title: 'App theme',
      },
      {
        id: uuid(),
        title: 'Advanced',
      },
    ]
  },
  {
    title: 'Financial',
    settings: [
      {
        id: uuid(),
        title: 'Incomes',
      },
      {
        id: uuid(),
        title: 'Outcomes',
      },
      {
        id: uuid(),
        title: 'Recurring',
      },
      {
        id: uuid(),
        title: 'Advanced',
      },
    ]
  },
]

export default function TabAccountScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.avatar}></View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>john.doe@gmail.com</Text>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="ios-pencil-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.settingsContainer}>
        {settings.map(s => <SettingsBox key={s.title} title={s.title} settings={s.settings} />)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#33404F'
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B2B2B2'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#C4C4C4',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
  },
  editButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#00DDA3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  settingsContainer: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 20,
  },
});
