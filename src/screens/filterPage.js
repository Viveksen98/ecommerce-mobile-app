import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'
import Header from './Header'

const FilterPage = () => {
  const navigation = useNavigation();
  const [product, setProduct] = useState([]);

  const route = useRoute();

  const { Details } = route.params;

  useEffect(() => {
   
    fetch(`https://fakestoreapi.com/products/category/${Details}`)
      .then(res => res.json())
      .then(json =>{
        setProduct(json)
     } );

  }, [])


  const renderProducts = ({ item }) => {
    return (
      <View>
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

      </View>

    )
  }

  return (
    <View><Header /><FlatList
      data={product}
      renderItem={renderProducts}
      keyExtractor={item => item}
      numColumns={2} />
      </View>
  )
}

export default FilterPage

const styles = StyleSheet.create({
  Pagestyle: {
    justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#DDDDFF'
    , marginBottom: 50

  }
  ,
  ProductStyle: {
    height: 260, width: 165, borderColor: 'gray', borderWidth: 2, margin: 7
    , backgroundColor: '#D7D0FF', borderRadius: 10, elevation: 8, shadowColor: 'black'
  },
  Imagestyle:
  {
    height: 120, width: 100, resizeMode: 'contain'
    , borderRadius: 10
    , marginLeft: 30,
  },
  textstyle: {
    height: 50, width: 165, margin: 2

  },
  buy: {
    textAlign: 'center',
    backgroundColor: '#FDCA54'
    , marginLeft: 10, marginRight: 10,
    padding: 2, borderRadius: 10, elevation: 8, shadowColor: 'black', margin: 4
  },
  filter: {
    fontSize: 15,
    backgroundColor: '#9457EB', margin: 7, marginBottom: 10,
    borderRadius: 10, padding: 5, textAlign: 'center', height: 25
    , color: 'white', elevation: 8, shadowColor: 'black',
  }
})