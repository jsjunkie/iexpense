import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Home from './Home';
import Transactions from './Transactions';
import Reports from './Reports';

export default App = DrawerNavigator({
  Home: {screen: Home},
  Transactions: {screen: Transactions},
  Reports: {screen: Reports}
})