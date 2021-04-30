import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { v4 as uuid } from 'uuid';
import SettingsBox from '../components/SettingsBox';

const settings = [
  {
    title: 'General Settings',
    settings: [
      {
        id: uuid(),
        title: 'My profile',
        svg: <Ionicons name="ios-person-outline" color="#fff" size={16} />,
        backgroundColor: '#00DDA3',
      },
      {
        id: uuid(),
        title: 'Cards',
        svg: <Ionicons name="ios-card-outline" color="#fff" size={16} />,
        backgroundColor: '#7D9D95',
      },
      {
        id: uuid(),
        title: 'App theme',
        svg: <Ionicons name="ios-apps-outline" color="#fff" size={16} />,
        backgroundColor: '#5D61CC',
      },
      {
        id: uuid(),
        title: 'Advanced',
        svg: <Ionicons name="ios-cog-outline" color="#fff" size={16} />,
        backgroundColor: '#E38516',
      },
    ]
  },
  {
    title: 'Financial',
    settings: [
      {
        id: uuid(),
        title: 'Incomes',
        svg: <Ionicons name="ios-arrow-up-outline" color="#fff" size={16} />,
        backgroundColor: '#00DDA3',
      },
      {
        id: uuid(),
        title: 'Outcomes',
        svg: <Ionicons name="ios-arrow-down-outline" color="#fff" size={16} />,
        backgroundColor: '#F03C3C',
      },
      {
        id: uuid(),
        title: 'Recurring',
        svg: <Ionicons name="ios-alarm-outline" color="#fff" size={16} />,
        backgroundColor: '#19D9D9',
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
    marginBottom: 24,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#33404F'
  },
  email: {
    fontSize: 16,
    color: '#B2B2B2'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#C4C4C4',
  },
  textContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
  },
  settingsContainer: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 20,
  },
});
