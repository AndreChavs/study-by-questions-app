import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image';

const imageLogo = require('@/assets/images/react-logo.png')

const Logo = () => {

  return (
      <View style={style.content}>
        <Text style={style.logo}>JS Teste</Text>
        <Image 
          source={imageLogo} 
          contentFit="cover"
          style={style.image}
        />
      </View>
  )
}

const style = StyleSheet.create({  
  content:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    height:50
  },
  logo:{
    fontFamily:"Poppins_700Bold",
    fontSize:40,
    color:"#fff",
    textAlign:"center",
  },  
  image:{
    width:40,
    height:40,
    marginLeft:10,    
  }
})
export default Logo