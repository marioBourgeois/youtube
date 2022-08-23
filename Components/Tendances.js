import {StyleSheet, Text, View, FlatList, ImageBackground} from 'react-native';
import React from 'react';

import Mini from './Cards/Mini';

const Tendances = ({videos}) => {
  return (
    <View>
      <Text style={styles.tendances}>______Tendances</Text>

      <FlatList
        horizontal
        data={videos}
        renderItem={({item}) => <Mini item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Tendances;

const styles = StyleSheet.create({
  tendances: {
    paddingTop: 15,
    fontWeight: 'bold',
    paddingBottom: 15,
    fontSize: 18,
    color: 'white',
  },

  titrevideos: {
    color: 'white',
  },

  minicarte: {
    marginRight: 2,
    marginLeft: 2,
    width: 192,
    height: 100,
    borderRadius: 5,
    alignItems: 'flex-end',
  },

  image: {
    width: 50,
    height: 50,
  },
});
