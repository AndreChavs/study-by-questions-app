import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "./Title";

interface ResultadoProps{
  respostas:string[];
  gabarito:number[];
}

export default function Resultado({respostas, gabarito}:ResultadoProps) {

  const resultado = React.useMemo(() => {
    let acertos:number = 0
    let erros:number = 0
    for(let i = 0; i < respostas.length; i++){
      if(Number(respostas[i]) === gabarito[i]){
        console.log(Number(respostas[i]) === gabarito[i])
        acertos++
      }else {
        erros++
      }
    }
    const percentual = (acertos / respostas.length) * 100
    return {acertos, erros, percentual}
    }, []
  )

 

  return <View style={styles.container}>
    <Title>
      Resultado do Teste:
    </Title>
    <Text>
      {`Acertos: ${resultado.acertos}`}
    </Text>
    <Text>
      {`Erradas: ${resultado.erros}`}
    </Text>
    <Text>
      {`Aproveitamento: ${resultado.percentual}%`}
    </Text>
    <Text>
      {`Resultado: ${resultado.percentual >= 60 ? 'APROVADO' : 'REPROVADO'}`}
    </Text>
  </View>
}

const styles = StyleSheet.create({
  container:{    
    padding:10,
    backgroundColor:"#f2f2f2",
    borderRadius:10,    
    margin:10,       
  },
  text:{
    color:"#000"
  }
})