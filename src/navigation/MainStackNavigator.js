import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'
import Bag from '../screens/Bag'
import Bowl from '../screens/Bowl'
import Map from '../screens/Map'
import Cart from '../screens/Cart'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            gestureEnabled: true,
            headerStyle: {
            backgroundColor: '#101010'
            },
            headerTitleStyle: {
            fontWeight: 'bold'
            },
            headerTintColor: '#ffd700',
            headerBackTitleVisible: false
        }}
        headerMode='float'>
        <Stack.Screen
            name='Home'
            component={Home}
            options={{ title: 'Happy Halloween' }}
        />
        <Stack.Screen
            name='Profile'
            component={Profile}
            options={({ route }) => ({
                title: route.params.item.name
            })}
        />
        <Stack.Screen
            name='Settings'
            component={Settings}
            options={{ title: 'Settings' }}
        />
        <Stack.Screen
            name='Cart'
            component={Cart}
            options={{ title: 'Cart' }}
        />
        <Stack.Screen
            name='Bowl'
            component={Bowl}
            options={{ title: 'Candy Bowl' }}
        />
        <Stack.Screen
            name='Bag'
            component={Bag}
            options={{ title: 'Trick-or-Treat Bag' }}
        />
        <Stack.Screen
            name='Map'
            component={Map}
            options={{ title: 'Trick-or-Treat Map' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator