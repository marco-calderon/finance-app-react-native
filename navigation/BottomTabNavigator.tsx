/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabHomeScreen';
import TabTwoScreen from '../screens/TabBookScreen';
import { BottomTabParamList, TabHomeParamList, TabBookParamList, TabNotificationsParamList, TabDashboardParamList, TabAccountParamList } from '../types';
import TabNotificationsScreen from '../screens/TabNotificationsScreen';
import TabDashboardScreen from '../screens/TabDashboardScreen';
import TabAccountScreen from '../screens/TabAccountScreen';
import TabBookScreen from '../screens/TabBookScreen';
import HeaderTitle from '../components/HeaderTitle';
import TabHomeScreen from '../screens/TabHomeScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const styles = StyleSheet.create({
  bottomTabs: {
    backgroundColor: '#33404F'
  }
})

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabHome"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, style: styles.bottomTabs }}>
      <BottomTab.Screen
        name="TabHome"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabBook"
        component={TabBookNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-book-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabDashboard"
        component={TabDashboardNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-pie-chart-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabNotifications"
        component={TabNotificationsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-notifications-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabAccount"
        component={TabAccountNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person-circle-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabHomeStack = createStackNavigator<TabHomeParamList>();

function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen
        name="TabHomeScreen"
        component={TabHomeScreen}
        options={{ headerTitle: props => <HeaderTitle />, headerTransparent: true }}
      />
    </TabHomeStack.Navigator>
  );
}

const TabBookStack = createStackNavigator<TabBookParamList>();

function TabBookNavigator() {
  return (
    <TabBookStack.Navigator>
      <TabBookStack.Screen
        name="TabBookScreen"
        component={TabBookScreen}
        options={{ headerTitle: 'Book' }}
      />
    </TabBookStack.Navigator>
  );
}
const TabDashboardStack = createStackNavigator<TabDashboardParamList>();

function TabDashboardNavigator() {
  return (
    <TabDashboardStack.Navigator>
      <TabDashboardStack.Screen
        name="TabDashboardScreen"
        component={TabDashboardScreen}
        options={{ headerTitle: 'Dashboard' }}
      />
    </TabDashboardStack.Navigator>
  );
}
const TabNotificationsStack = createStackNavigator<TabNotificationsParamList>();

function TabNotificationsNavigator() {
  return (
    <TabNotificationsStack.Navigator>
      <TabNotificationsStack.Screen
        name="TabNotificationsScreen"
        component={TabNotificationsScreen}
        options={{ headerTitle: 'Notifications' }}
      />
    </TabNotificationsStack.Navigator>
  );
}
const TabAccountStack = createStackNavigator<TabAccountParamList>();

function TabAccountNavigator() {
  return (
    <TabAccountStack.Navigator>
      <TabAccountStack.Screen
        name="TabAccountScreen"
        component={TabAccountScreen}
        options={{ headerTitle: 'Account' }}
      />
    </TabAccountStack.Navigator>
  );
}
