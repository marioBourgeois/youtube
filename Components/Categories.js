import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';

const initVideos = [];
const Categories = ({item , select}) => {

// use state a faire avec le filtre dans les categories pour la rentrée le 16 aout 2022.

  // const filterVideos = 
  return (
    <View>
      <Button
        title={item.titre}
        loading={false}
        loadingProps={{size: 'small', color: 'white'}}
        buttonStyle={{
          backgroundColor: '#036ffc',
          borderRadius: 5,
        }}
        titleStyle={{fontWeight: 'bold', fontSize: 18}}
        containerStyle={{
          marginHorizontal: 5,

          height: 50,
          width: 150,
          marginVertical: 5,

          
        }}
        onPress={() => select(item.id)}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  bouton: {
    margin: 3,
  },
});
