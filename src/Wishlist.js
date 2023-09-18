import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Wishlist = () => {    
    const navigation=useNavigation();

    const item = useSelector(state => state);
    
    
    const renderItem = ({ item }) => {
        return (
    
    
          <TouchableOpacity
            activeOpacity={1} onPress={() =>navigation.navigate('Description', { Details: item })}
            style={styles.ProductStyle}>
    
    
            <Text style={styles.textstyle}>
              {item.title}
            </Text>
    
    
            <Image source={{ uri: item.image }} style={styles.Imagestyle} />
    
    
            <Text style={{ margin: 2, color: 'green', marginLeft: 10 }} >
              ${item.price}
            </Text>
            <Pressable onPress={() => navigation.navigate("BUyNOW")}>
              <Text style={styles.buy}>
                BUy NOW
    
              </Text>
              </Pressable>
    
          </TouchableOpacity>
    
        )
      }
      return (
        <SafeAreaView style={styles.Pagestyle}>
          <Header />
          <FlatList
            data={item}
            renderItem={renderItem}
            keyExtractor={Item => Item.id}
            numColumns={2}
          />
        </SafeAreaView>
      )
    }
    
    export default Wishlist
    
    const styles = StyleSheet.create({
      Pagestyle: {
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#DDDDFF'
        ,marginBottom:50
    
      }
      ,
      ProductStyle: {
        height: 230, width: 165, borderColor: 'gray', borderWidth: 2, margin: 7
        , backgroundColor: '#D7D0FF', borderRadius: 10, elevation: 8, shadowColor: 'black'
      },
      Imagestyle:
      {
        height: 120, width: 100, resizeMode: 'contain'
        , borderRadius: 10
        , marginLeft: 30,
      },
      textstyle: {
        height: 50, width: 165
    
      },
      buy: {
        textAlign: 'center',
        backgroundColor: '#FDCA54'
        , marginLeft: 10, marginRight: 10,
        padding: 2, borderRadius: 10, elevation: 8, shadowColor: 'black'
      }
    })