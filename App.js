import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTabs from './components/MainTabs.js';

export default function App() {
  return (
    <View style={styles.container}>
      <MainTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

