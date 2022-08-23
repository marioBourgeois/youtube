import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

//import { Image } from "@rneui/themed";

import {useNavigation} from '@react-navigation/native';

const Maxi = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.grandeCarte}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Details', {item: item})}>
        <ImageBackground source={item.image} style={styles.maxiimage}>
          <Text style={styles.textecartemaxi}>{item.titre}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default Maxi;

const styles = StyleSheet.create({
  grandeCarte: {
    width: '100%',
    height: 200,
    borderWidth: 1.5,
    marginTop: 15,
    borderRadius: 5,
    fontWeight: 'bold',
    borderColor: 'white',
    flex: 1,
  },

  maxiimage: {
    height: 197,
    width: 352,
    overflow: 'hidden',
    borderRadius: 4/2
  },

  textecartemaxi: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    paddingTop: 5,
    paddingLeft: 5,
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
  },

  // item: {
  //   aspectRatio: 1,
  //   width: '100%',
  //   flex: 1,
  // },
});
