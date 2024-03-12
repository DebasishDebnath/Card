import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>TrndingPlaces</Text>
      <View style={[styles.card, styles.cardElement]}>
        <Image
          source={{
            uri: 'https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Google</Text>
          <Text style={styles.cardLabel}>1</Text>
          <Text style={styles.cardDescription}>It is a Google</Text>
          <Text style={styles.cardFooter}>
            It is a Google and it established in 1920
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  cardElement: {},
  cardImage: {
    height: 180,
    // width: 280,
  },
  cardBody: {
    alignItems: 'center',

    padding: 15,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardLabel: {},
  cardDescription: {},
  cardFooter: {},
});
