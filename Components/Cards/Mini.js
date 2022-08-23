import {ImageBackground, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
const Mini = ({item}) => {
  const navigation = useNavigation();
  return (

    

    <View style = {styles.minicarte}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Details', {item: item})}>
     <ImageBackground source={item.image} resizeMode="cover" style = {styles.image}>
      <Text style = {styles.textecarte}>{item.titre}</Text></ImageBackground>
</TouchableOpacity>
    </View>
  );
};

export default Mini;

const styles = StyleSheet.create({
  image: {
    height:97,
    width:196.5,
    overflow: 'hidden',
    borderRadius: 4/2
  },

  minicarte: {
    width:200,
    height:100,
    margin:5,
    borderRadius:5,
    borderColor:'white',
    borderWidth: 1.5,
  },

  textecarte: {
    color:'white',
    fontWeight:'bold',
    padding:5,
    
}
 
});
