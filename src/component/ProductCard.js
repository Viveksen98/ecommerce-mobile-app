import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'

const ProductCard = ({item}) => {
  const navigation = useNavigation();
  return (
    
    <TouchableOpacity
    activeOpacity={1} onPress={() => navigation.navigate('Description', { Details: item })}
    style={styles.ProductStyle}>


    <Text style={styles.textstyle}>
      {item.title}
    </Text>


    <Image source={{ uri: item.image }} style={styles.Imagestyle} />


    <Text style={{ margin: 2, color: 'green', marginLeft: 10 }} >
      ${item.price}
    </Text>
    <Pressable onPress={() => { Additem(item) }}>
      <Text style={styles.buy}>
        ADD TO CARD

      </Text>
    </Pressable>

    <Pressable onPress={() => { WishList(item) }}>
      <Text style={styles.buy}>
        Wishlist

      </Text>
    </Pressable>

  </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({})