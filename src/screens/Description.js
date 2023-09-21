import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import { useState } from 'react'
import { useEffect } from 'react'


const Description = () => {
const navigation =useNavigation();
const [product, setProduct] = useState([]);
  const route = useRoute();
  const {Details} =route.params;
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${Details.id}`).
    then(res=>res.json()).
    then(json=>setProduct(json))

  }, []);
  return (
    < ScrollView style={styles.pagestyle}>
      <Text style={styles.titlestyle}>
        {product.title}
      </Text>
      <Image source={{ uri: product.image }} style={styles.imagestyle} />
      <Text style={styles.destyle}>
        {product.description}
      </Text>
      <Pressable onPress={() =>navigation.navigate("BUyNOW")}   style={styles.buy}>
        <Text style={{textAlign:'center'}}>
          Buy Now
        </Text>
      </Pressable>
    </ScrollView>
  )
}

export default Description

const styles = StyleSheet.create({
  pagestyle: {
    backgroundColor: '#DDDDFF',
    flex: 1
  },
  imagestyle: {
    resizeMode: 'contain',
    height: 400, width: 300,
    marginLeft: 30, borderRadius: 15,
    borderColor: '#9457EB', borderWidth: 2
  },
  titlestyle: {
    fontSize: 25,
    backgroundColor: '#9457EB',
    color: 'white',
    borderRadius: 15, textAlign: 'center', margin: 10

  },
  destyle: {
    textAlign: 'center',
    margin: 10
  },
   buy: {
    backgroundColor: '#FDCA54'
    , marginLeft: 10, marginRight: 10,
    padding: 15, borderRadius: 10,elevation:20,shadowColor:'black'
  }

})