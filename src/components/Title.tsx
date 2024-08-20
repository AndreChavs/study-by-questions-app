import React from 'react'
import {Text, StyleSheet} from 'react-native'

const Title = (props:{children:React.ReactNode}) => {
  return (
    <Text style={styles.title}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
  title:{
    fontFamily:"Poppins_700Bold",
    fontSize:20,
    textAlign:"center",
    color:"#000"
  }
})

export default Title