import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.heading}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>More...</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>😊</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {},
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 200,
  },
});
