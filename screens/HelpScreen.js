import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <Header title="Help" />
      <View style={styles.content}>
        <Text style={styles.text}>Need assistance? We're here to help!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontSize: 18 },
});
