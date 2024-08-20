import { Button } from "react-native-paper";
import { Dimensions, StyleSheet, View } from "react-native";
import { router } from "expo-router";
import CadastroForm from "@/src/components/form/Cadastro.form";
import Title from "@/src/components/Title";

const Height = (Dimensions.get('window').height - 40)

export default function Cadastrar() {

  return (
    <View style={styles.container}>
      <Title>Faça Seu Cadastro</Title>
      <CadastroForm />      
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