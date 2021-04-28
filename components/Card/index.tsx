import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CardModel } from '../../models/card.model';
import CardChipSvg from '../svg/CardChipSvg';
import MasterCardSvg from '../svg/MasterCardSvg';
import VisaSvg from '../svg/VisaSvg';

export interface CardProps {
  card: CardModel;
}

const getCardIcon = (type: string) => {
  switch(type) {
    case 'master-card':
      return <MasterCardSvg color="#fff" width={40} height={30} />;
    case 'visa':
      return <VisaSvg color="#fff" width={50} height={16} />;
    default:
      return <MasterCardSvg color="#fff" width={40} height={30} />;
  }
}

const Card = (props: CardProps) => {
  const { lastDigits, balance, type } = props.card;

  return (
    <View style={ styles.container }>
      <View style={styles.topContainer}>
        <CardChipSvg color="#fff" width={22} height={30} />
        <Text style={styles.digits}>**** {lastDigits}</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={ styles.title }>$ {balance}</Text>
      </View>
      <View style={styles.bottomContainer}>
        {getCardIcon(type)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33404F',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 200,
    height: 311,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
  },
  totalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  bottomContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  digits: {
    fontWeight: 'normal',
    fontSize: 12,
    color: '#fff',
  }
});

export default Card;
