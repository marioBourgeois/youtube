import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

import Categories from './Categories';
import Maxi from './Cards/Maxi';

const Content = ({categories, videos}) => {
  console.log(categories);

  const selectCategorie = (id) => { 
    
    console.log("cat" , id)

   }
  return (
    <View>
      <Text style={styles.contenu}>______Catégories</Text>

      <FlatList
        horizontal
        data={categories}
        renderItem={({item}) => <Categories item={item} select={selectCategorie} />}
        keyExtractor={item => item.id}
      />

      <Text style={styles.contenu}>______Vidéos</Text>
      <FlatList
        style= {styles.videos}
        data={videos}
        renderItem={({item}) => <Maxi item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({

  videos: {marginLeft:2,
   marginRight:2},

  contenu: {
    color: 'white',
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: 'bold',
  },
});
