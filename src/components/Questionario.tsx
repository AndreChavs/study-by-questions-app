import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Pergunta from "../interfaces/Pergunta";
import { RadioButton } from 'react-native-paper';


interface PerguntaProps{
  pergunta: Pergunta;
  setRespostas:React.Dispatch<React.SetStateAction<string[]>>;
  respostas:string[]
}

export default function Questionario({pergunta, setRespostas, respostas}:PerguntaProps) {
  
  return <>
    <ScrollView style={{marginVertical:10}}>
    <View style={styles.container}>
      <Text style={styles.enunciado}>        
        {`${pergunta.id} - ${pergunta.enunciado}`}
      </Text>
      <RadioButton.Group 
      onValueChange={value => setRespostas((prevValues) => {
        const newRespostas = [...prevValues]
        newRespostas[pergunta.id - 1] = value;
        return newRespostas
      })} 
      value={respostas[pergunta.id - 1]}>      
        <RadioButton.Item 
          label={`A) ${pergunta.opcoes[0]}`} 
          value="0"
          labelStyle={{color:"#fff"}}
          style={{backgroundColor:`${respostas[pergunta.id - 1] === "0"? "#00000047" : "transparent"}`}}
        />
        <RadioButton.Item 
          label={`B) ${pergunta.opcoes[1]}`} 
          value="1" 
          labelStyle={{color:"#fff"}}
          style={{backgroundColor:`${respostas[pergunta.id - 1] === "1"? "#00000047" : "transparent"}`}}
        />
        <RadioButton.Item 
          label={`C) ${pergunta.opcoes[2]}`} 
          value="2"
          labelStyle={{color:"#fff"}}
          style={{backgroundColor:`${respostas[pergunta.id - 1] === "2"? "#00000047" : "transparent"}`}} 
        />
        <RadioButton.Item 
          label={`D) ${pergunta.opcoes[3]}`} 
          value="3"
          labelStyle={{color:"#fff"}}
          style={{backgroundColor:`${respostas[pergunta.id - 1] === "3"? "#00000047" : "transparent"}`}} 
        />
        <RadioButton.Item 
          label={`E) ${pergunta.opcoes[4]}`} 
          value="4"
          labelStyle={{color:"#fff"}}
          style={{backgroundColor:`${respostas[pergunta.id - 1] === "4"? "#00000047" : "transparent"}`}} 
        />      
      </RadioButton.Group>
    </View>    
    </ScrollView>
  </>
}

const styles = StyleSheet.create({
  enunciado:{
    color:"#fff",
    fontSize:18,
    fontWeight:"700",    
  },
  container:{
    padding:10,
    backgroundColor:"#852e9c",
    borderRadius:10,
    textAlign:"center",
    marginHorizontal:10,    
  }
})