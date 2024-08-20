import LoginForm from "@/src/components/form/Login.form";
import Title from "@/src/components/Title";
import { router } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";


const Height = (Dimensions.get('window').height - 40)

export default function Login() {
  return(
    <View style={styles.container}>
      <Title>Login</Title>
      <LoginForm />
      <Button
        mode="contained-tonal"                
        onPress={() => router.replace('/')}
        style={styles.btn}
      >
        Voltar
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height:Height,   
    marginTop:40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign:"center"
  },
  btn:{
    margin:10
  }
});