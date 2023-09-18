import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductList from '../ProductList'
import Description from './Description'
import Dashboard from './Dashboard'
import LOgin from './LOgin'
import Add_to_cart from './Add_to_cart'
import BUyNOW from './BUyNOW'
import FilterPage from './filterPage'
import Signup from './Signup'
const Stack = createNativeStackNavigator();
const NavigationApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Dasshboard' component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name='LOgin' component={LOgin} options={{ headerShown: false }} />
        <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name='ProductList' component={ProductList} options={{ headerShown: false }} />
        <Stack.Screen name='Add_to_cart' component={Add_to_cart} options={{ headerShown: false }} />
        <Stack.Screen name='BUyNOW' component={BUyNOW} options={{ headerShown: false }} />
        <Stack.Screen name='Description' component={Description} options={styles.head} />
        <Stack.Screen name='FilterPage' component={FilterPage} options={styles.head} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationApp

const styles = StyleSheet.create({
  head: {
    headerStyle: {
      backgroundColor: '#9457EB',
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTitleAlign: 'center'
    ,
  }

})