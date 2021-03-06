import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import candy from '../img/candy2.jpg';

function Bag(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <img src={candy} alt="" />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Map')}>
        <Text style={styles.buttonText}>Map</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

export default Bag