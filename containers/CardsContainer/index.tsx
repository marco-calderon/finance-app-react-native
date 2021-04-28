import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../../components/Card';
import { CardModel } from '../../models/card.model';

export interface CardsContainerProps {
  cards: CardModel[];
}

const CardsContainer = (props: CardsContainerProps) => {
  const { cards } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cards ({cards.length})</Text>
      <ScrollView style={styles.cardsContainer} horizontal={true}>
        {cards && cards.length > 0 && cards.map(c => <Card card={c} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#33404F',
  },
  cardsContainer: {
    marginTop: 15,
    width: '100vw',
    marginLeft: -24,
  },
});

export default CardsContainer;
