import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bonjour = ({nom, prenom}) => {
  return (
    <View>
      <Text>Bonjour {nom} {prenom}</Text>
    </View>
  )
}

export default Bonjour

const styles = StyleSheet.create({})