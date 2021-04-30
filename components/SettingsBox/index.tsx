import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { SettingModel } from '../../models/setting.model';

export interface SettingsBoxProps {
  title: string;
  settings: SettingModel[];
}

export interface SettingsRowProps {
  setting: SettingModel;
}

const SettingsRow = (props: SettingsRowProps) => {
  const { setting } = props;

  return (
    <View style={rowStyles.container}>
      <View style={rowStyles.iconContainer}>
        <Ionicons name="ios-add-outline" size={16} color="#fff" />
      </View>
      <Text style={rowStyles.title}>{setting.title}</Text>
    </View>
  );
}

const rowStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    width: '100%',
  },
  iconContainer: {
    width: 26,
    height: 26,
    borderRadius: 6,
    backgroundColor: '#00DDA3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    color: '#33404F',
    marginLeft: 12,
  },
});

const SettingsBox = (props: SettingsBoxProps) => {
  const { title, settings } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.innerContainer}>
        {settings && settings.length > 0 && settings.map(s => <SettingsRow key={s.id} setting={s} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOpacity: .10,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 50,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#5D61CC',
  },
  innerContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
  },
});

export default SettingsBox;
