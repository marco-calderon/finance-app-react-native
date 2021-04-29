import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InvestingTip from '../../components/InvestingTip';
import { TipModel } from '../../models/tip.model';

export interface InvestingTipsContainerProps {
  tips: TipModel[];
}

const InvestingTipsContainer = (props: InvestingTipsContainerProps) => {
  const { tips } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Investing Tips</Text>
      <View style={styles.tipsContainer}>
        {tips && tips.length && tips.map(t => <InvestingTip key={t.id} tip={t} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  tipsContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#33404F',
  },
});

export default InvestingTipsContainer;
