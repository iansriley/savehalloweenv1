import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import cat from '../img/cat.jpg';

const character = {
    name: 'Ian Riley',
    home: '2931 S. Rosemary St.',
    userType: 'kid'
  }

function Home(props) {
  const { navigation } = props  

  return (
    <View style={styles.container}>
        <img src={cat} alt="" />
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Bag')}>
            <Text style={styles.buttonText}>Trick-or-Treat</Text>
        </TouchableOpacity> 
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Profile', { item: character })}>
            <Text style={styles.buttonText}>Who is {character.name}?</Text>
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

export default Home