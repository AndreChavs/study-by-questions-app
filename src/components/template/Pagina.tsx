import { View, StyleSheet, ImageBackground, Dimensions } from "react-native"

const imageBG = require('@/assets/images/background.jpg')

interface PageProps{
  children:React.ReactNode
}

const Height = (Dimensions.get('window').height - 20)

export default function Pagina(props:PageProps){  
  return <View style={styles.container}>
    <ImageBackground source={imageBG} resizeMode="cover" style={styles.image} imageStyle={{opacity:.48}}>
      {props.children}
    </ImageBackground>
  </View>
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#000",
    height:Height,   
    marginTop:20    
  },
  image:{
    flex:1,
    width:"100%",    
  }
})