import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Header from './Header';
 import Tendances from './Tendances';
 import {videos} from '../constantes/videos';
 import Content from './Content';
import {categories} from '../constantes/categories';


const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Header navigation={navigation}/>
      <Tendances videos = {videos} />
      <Content categories = {categories} videos = {videos} /> 
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
