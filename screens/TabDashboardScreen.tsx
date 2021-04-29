import React, { useContext, useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import PigSvg from '../components/svg/PigSvg';
import CardsContainer from '../containers/CardsContainer';

import InvestingTipsContainer from '../containers/InvestingTipsContainer';
import { CardModel } from '../models/card.model';
import { TipModel } from '../models/tip.model';
import { v4 as uuid } from 'uuid';

const tips: TipModel[] = [
  {
    id: uuid(),
    title: 'What is an ETF?',
    subtitle: 'By James B., PhD',
    buttonEnabled: true,
    buttonText: 'Learn more',
    svg: <PigSvg width={95} height={75} />
  }
];

const cards: CardModel[] = [
  {
    id: uuid(),
    lastDigits: 6175,
    balance: 47417,
    type: 'master-card',
  },
  {
    id: uuid(),
    lastDigits: 5789,
    balance: 584466,
    type: 'visa',
  },
]

export default function TabDashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <InvestingTipsContainer tips={tips} />
      <View style={styles.cards}>
        <CardsContainer cards={cards} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    display: 'flex',
    backgroundColor: '#fff',
    paddingLeft: 24,
    paddingRight: 24,
  },
  cards: {
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
    paddingBottom: 40,
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
