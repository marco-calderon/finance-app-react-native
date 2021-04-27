import * as React from 'react';
import { StyleSheet } from 'react-native';
import CategoryChart from '../components/CategoryChart';

import { Text, View } from '../components/Themed';

export default function TabHomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Hi, Arthur!</Text>
        <Text style={styles.subtitle}>Here's Your Balance.</Text>
        <View style={styles.chartsContainer}>
          <CategoryChart title="Savings" number="15615" percentage={80} color="#00DDA3" style={{ marginRight: 50 }} />
          <CategoryChart title="Assets" number="9615" percentage={25} color="#B5C5C3" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 141,
    paddingLeft: 24,
    paddingRight: 24,
    display: 'flex',
  },
  topContainer: {
  },
  chartsContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    fontSize: 36,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 36,
  }
});
