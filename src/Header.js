import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';


const Header = () => {
  const navigation= useNavigation();
   const [count, setCount] = useState(0)

  return (
    <View style={{ height: 100, width: '100%', backgroundColor: '#9457EB', flexDirection: 'row' }}>

      <Text style={{ textAlign: 'center', fontSize: 30, marginTop: 60, marginLeft: 15, color: 'white' }}>
        PRODUCTLIST
      </Text>

      <Text style={{
        marginTop: 60, fontSize: 30, marginLeft: 70, height: 30, width: 20, backgroundColor: '#DDDDFF',
        color: '#9457EB', borderRadius: 10,
      }}>
        {count}
      </Text>
      <Pressable onPress={() => navigation.navigate("Add_to_cart")}>

      <AntDesign name="shoppingcart" size={30} color="black" style={{marginTop:60,marginLeft:10}} />

      </Pressable>


    </View>
  )
}

export default Header

const styles = StyleSheet.create({})