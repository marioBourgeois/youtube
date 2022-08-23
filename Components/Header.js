import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

import {Icon} from '@rneui/themed';

const Index = ({navigation}) => {
  return (

    
    <View>
      <View style={styles.header}>
        <Icon name="menu" color="#fff" />
        <Text style={styles.mystream}>Mystream</Text>
        <Icon name="search" color="#fff" />
        {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#036ffc',
    flexDirection: 'row',
    height: 50,
    padding: 10,
    justifyContent: 'space-between',
  },

  mystream: {
    color: 'white',
    fontSize: 20,
  },
});
