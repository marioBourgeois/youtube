import {StyleSheet, Text, View, ImageBackground, Button, Alert} from 'react-native';
import React, {useState,useCallback,useRef} from 'react';
import {Icon} from '@rneui/themed'; 


// import {useNavigation} from '@react-navigation/native';

const Details = ({ route, navigation }) => {
  // const navigation = useNavigation();
  const {item} = route.params;
  // console.log(item) 
  
  return (
    <View style={styles.pageDetails}>
      <View style={styles.titreDetails}>
        <Icon
          name="arrow-back"
          color="#fff"
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.details}>Détails</Text> 
        <Icon name="search" color="#fff" />
      </View>

      <View style={styles.viewImage}>
        <ImageBackground
          source={item.image}
          resizeMode="cover"
          style={styles.image}></ImageBackground>
      </View>

      <Text style={styles.titre}>{item.titre}</Text>

      <Text style={styles.description}>
      {item.description}
      </Text>

      <Text style={styles.miseEnLigne}>Mise en ligne: {item.date}.</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  pageDetails: {
    backgroundColor: 'black',
    flex: 1,
  },

  viewImage: {
    width: 335,
    height: 200,
    margin: 15,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1.5,
    borderRightWidth: 1.5,
    borderBottomWidth: 1.5,
  },

  image: {
    width: 331,
    height: 196.5,
    opacity: 0.6,
    overflow: 'hidden',
    borderRadius: 4/2
  },

  titreDetails: {
    backgroundColor: '#036ffc',
    flexDirection: 'row',
    height: 50,
    padding: 10,
    justifyContent: 'space-between',
  },

  details: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

  titre: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  description: {
    padding: 15,
    color: 'white',
  },

  miseEnLigne: {
    textAlign: 'right',
    paddingRight: 15,
  },
});
