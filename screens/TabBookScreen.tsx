import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import RoundedButton from '../components/RoundedButton';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryScatter } from "../components/charts/Victory";
import HeaderSvg from '../components/svg/HeaderSvg';
import NotificationComponent from '../components/Notification';
import CardSvg from '../components/svg/CardSvg';

export default function TabBookScreen() {
  const [assetsEnabled, setAssetsEnabled] = useState(true);
  const [debtEnabled, setDebtEnabled] = useState(false);
  const [incomeEnabled, setIncomeEnabled] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.balanceContainer}> 
        <View style={styles.balance}>
          <Text style={styles.title}>Total</Text>
          <Text style={styles.title}>Balance</Text>
          <Text style={styles.title}>${214417}</Text>
        </View>
        <View style={styles.headerSvg}>
          <HeaderSvg width={Dimensions.get('window').width} height={Dimensions.get('window').width} preserveAspectRatio="true" />
        </View>
      </View>
      <View style={styles.chartsContainer}>
        <View style={styles.chartsTabsContainer}>
          <RoundedButton style={styles.button} color="black" size="md" text="Assets" type={assetsEnabled ? 'fill' : 'outline'} onClick={() => setAssetsEnabled(!assetsEnabled)} />
          <RoundedButton style={styles.button} color="success" size="md" text="Debt" type={debtEnabled ? 'fill' : 'outline'} onClick={() => setDebtEnabled(!debtEnabled)} />
          <RoundedButton style={styles.button} color="disabled" size="md" text="Income" type={incomeEnabled ? 'fill' : 'outline'} onClick={() => setIncomeEnabled(!incomeEnabled)} />
        </View>
        <VictoryChart
          theme={VictoryTheme.material}
          height={250}
        >
          {assetsEnabled && (
            <VictoryLine
              interpolation="natural"
              style={{
                data: { stroke: "#33404F", strokeDasharray: '5, 5' },
                parent: { border: "1px solid #ccc"}
              }}
              data={[
                { x: 'Sun', y: 1 },
                { x: 'Mon', y: 2 },
                { x: 'Tue', y: 6 },
                { x: 'Wed', y: 3 },
                { x: 'Thu', y: 6 },
                { x: 'Fri', y: 4 },
                { x: 'Sat', y: 3 },
              ]}
            />
          )}
          {assetsEnabled && (
            <VictoryScatter
              standalone={false}
              data={[
                { x: 'Tue', y: 6, symbol: 'circle', fill: '#33404F' },
              ]}
              labels={(datum: any) => `$${datum.y}`}
              style={{
                data: {
                  fill: ({ datum }: any) => datum.fill,
                  strokeWidth: 3,
                },
                labels: {
                  fill: ({ datum }: any) => datum.fill,
                },
              }}
              symbol={(d: any) => 'circle'}
            />
          )}
          {debtEnabled && (
            <VictoryLine
              interpolation="natural"
              style={{
                data: { stroke: "#00DDA3", strokeDasharray: '5, 5' },
                parent: { border: "1px solid #ccc"}
              }}
              data={[
                { x: 'Sun', y: 2 },
                { x: 'Mon', y: 3 },
                { x: 'Tue', y: 5 },
                { x: 'Wed', y: 4 },
                { x: 'Thu', y: 7 },
                { x: 'Fri', y: 3 },
                { x: 'Sat', y: 2 },
              ]}
            />
          )}
          {debtEnabled && (
            <VictoryScatter
              standalone={false}
              data={[
                { x: 'Thu', y: 7, symbol: 'circle', fill: '#00DDA3' },
              ]}
              labels={(datum: any) => `$${datum.y}`}
              style={{
                data: {
                  fill: ({ datum }: any) => datum.fill,
                  strokeWidth: 3,
                },
                labels: {
                  fill: ({ datum }: any) => datum.fill,
                },
              }}
              symbol={(d: any) => 'circle'}
            />
          )}
          {incomeEnabled && (
            <VictoryLine
              interpolation="natural"
              style={{
                data: { stroke: "#B5C5C3", strokeDasharray: '5, 5' },
                parent: { border: "1px solid #ccc"}
              }}
              data={[
                { x: 'Sun', y: 7 },
                { x: 'Mon', y: 2 },
                { x: 'Tue', y: 6 },
                { x: 'Wed', y: 2 },
                { x: 'Thu', y: 3 },
                { x: 'Fri', y: 3 },
                { x: 'Sat', y: 5 },
              ]}
            />
          )}
          {incomeEnabled && (
            <VictoryScatter
              standalone={false}
              data={[
                { x: 'Sun', y: 7, symbol: 'circle', fill: '#B5C5C3' },
              ]}
              labels={(datum: any) => `$${datum.y}`}
              style={{
                data: {
                  fill: ({ datum }: any) => datum.fill,
                  strokeWidth: 3,
                },
                labels: {
                  fill: ({ datum }: any) => datum.fill,
                },
              }}
              symbol={(d: any) => 'circle'}
            />
          )}
          <VictoryAxis
            theme={VictoryTheme.material}
            standalone={false}
            style={{
              axis: { stroke: 'none' },
              ticks: { stroke: 'none' },
              grid: { stroke: 'none' },
              tickLabels: { fontSize: 15, fontWeight: 'bold' },
            }}
            tickFormat={(t: string) => `${t !== null && t !== undefined && t.charAt ? t.charAt(0) : ''}`}
          />
        </VictoryChart>
      </View>
      <View style={styles.notificationsContainer}>
        <NotificationComponent notification={{ title: 'Spending.', subtitle: 'You forgot to add debit card number at payment #1323. Add it now.', svg: <CardSvg width={105} height={66} />}} /> 
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  balanceContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },
  balance: {
    width: 200,
    height: 200,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00DDA3',
    marginTop: 25,
    zIndex: 5,
  },
  headerSvg: {
    position: 'absolute',
    top: -150,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  chartsContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    marginTop: 30,
    alignItems: 'center',
  },
  chartsTabsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  },
  notificationsContainer: {
    width: '100%',
    backgroundColor: '#E1FFEF',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
  },
});
