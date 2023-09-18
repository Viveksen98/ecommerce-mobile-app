import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Dashboard = () => {
  const navigation=useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../src/Images/8997261.jpg')} style={{
        height: 800, width: 370, resizeMode: 'stretch'
        , marginRight: 100, alignItems: 'center'
      }}
      />
      <View style={{
        position: 'absolute'
        , justifyContent: 'center', alignItems: 'center'
      }}>
        <Text style={styles.wellstyle}>
          WELLCOME
        </Text>
        <Pressable onPress={() =>navigation.navigate('LOgin')} >
          <Text style={styles.loginstyle}>
            LOGIN PAGE
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  
  wellstyle:{alignItems:'center',marginTop:170,marginLeft:70,fontSize:40,color:'white',
  backgroundColor:'#9457EB',padding:10,borderRadius:10,
elevation:9,shadowColor:'black' },

  loginstyle:{
    backgroundColor: '#76D0E9',
    color: 'white', textAlign: 'center', padding: 15,
    marginTop:400,marginLeft:70,borderRadius:10
  }
})