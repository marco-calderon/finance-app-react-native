import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import CategoryChart from '../components/CategoryChart';
import AccountSvg from '../components/svg/AccountSvg';
import HelpSvg from '../components/svg/HelpSvg';
import PrivacySvg from '../components/svg/PrivacySvg';

import { Text, View } from '../components/Themed';
import ActivitiesContainer from '../containers/ActivitiesContainer';
import TransactionsContainer from '../containers/TransactionsContainer';
import { v4 as uuid } from 'uuid';
import { useNavigation } from '@react-navigation/core';

const activities = [
  {
    title: 'Account',
    svg: <AccountSvg width={50} height={50} />
  },
  {
    title: 'Privacy',
    svg: <PrivacySvg width={50} height={50} />
  },
  {
    title: 'Help',
    svg: <HelpSvg width={50} height={50} />
  },
];

const transactions = [
  {
    id: uuid(),
    title: 'Food & Beverage',
    subtitle: 'Five Lods',
    value: 28.11,
    date: new Date()
  },
  {
    id: uuid(),
    title: 'Food & Beverage',
    subtitle: 'Five Lods',
    value: 28.11,
    date: new Date()
  },
  {
    id: uuid(),
    title: 'Food & Beverage',
    subtitle: 'Five Lods',
    value: 28.11,
    date: new Date()
  },
  {
    id: uuid(),
    title: 'Food & Beverage',
    subtitle: 'Five Lods',
    value: 28.11,
    date: new Date()
  },
  {
    id: uuid(),
    title: 'Food & Beverage',
    subtitle: 'Five Lods',
    value: 28.11,
    date: new Date()
  },
  {
    id: uuid(),
    title: 'Food & Beverage',
    subtitle: 'Five Lods',
    value: 28.11,
    date: new Date()
  },
  {
    id: uuid(),
    title: 'Food & Beverage',
    subtitle: 'Five Lods',
    value: 28.11,
    date: new Date()
  },
  {
    id: uuid(),
    title: 'Food & Beverage',
    subtitle: 'Five Lods',
    value: 28.11,
    date: new Date()
  },
]

export default function TabHomeScreen() {
  const navigation = useNavigation();

  const handleOnActivityClick = (activity: string) => {
    if (activity === 'Account') {
      navigation.navigate('TabAccount');
    }
  } 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Hi, Arthur!</Text>
        <Text style={styles.subtitle}>Here's Your Balance.</Text>
        <View style={styles.chartsContainer}>
          <CategoryChart title="Savings" number={15615} percentage={80} color="#00DDA3" style={{ marginRight: 50 }} />
          <CategoryChart title="Assets" number={9615} percentage={25} color="#B5C5C3" />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <ActivitiesContainer activities={activities} onClick={handleOnActivityClick} />
        <View style={styles.transactionsContainer}>
          <TransactionsContainer transactions={transactions} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 100,
    display: 'flex',
  },
  topContainer: {
    marginBottom: 20,
    paddingLeft: 24,
    paddingRight: 24,
  },
  chartsContainer: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  bottomContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    minWidth: 200,
    paddingTop: 40,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 120,
  },
  transactionsContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 36,
    height: 40,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 36,
    height: 40,
  },
  spacer: {
    flex: 1,
  },
});
