import Title from "@/src/components/Title";
import { useRouter, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja bem-vindo!</Text>
      <Title>
        Faça o Login para testar seus conhecimentos
      </Title>
      <View>
        <Button
          mode="elevated"                
          onPress={() => router.replace('/login')}
          style={styles.btn}
        >
          Login
        </Button>
        <Button
          mode="elevated"                
          onPress={() => router.replace('/cadastrar')}
          style={styles.btn}
        >
          Cadastrar
        </Button>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    // alignItems: 'center',
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