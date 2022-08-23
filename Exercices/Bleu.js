import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Bleu = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.titre}>Bleu</Text>
    </View>
  );
};

export default Bleu;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'blue',
    height: 200,
    width: 200,
  },

  titre: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

});
