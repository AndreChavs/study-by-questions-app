import React from "react";
import perguntas from "@/src/constants/perguntas";
import Pagina from "@/src/components/template/Pagina";
import Logo from "@/src/components/template/Logo";
import Questionario from "@/src/components/Questionario";
import { Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Resultado from "@/src/components/Resultado";



export default function Index() {
  const [number, setNumber] = React.useState(0)
  const [respostas, setRespostas] = React.useState<string[]>([])

  console.log(respostas)
  console.log(number)

  const nextHandler = () => {
    if(respostas[number] !== undefined){
      if(number >= 0 && number <= 28){
        setNumber(number + 1)
      }
    }
  }
  const prevHandler = () => {
    if(number <= 30 && number >= 1){
      setNumber(number - 1)
    }   
  }

  const concluirHandler = () => {
    if(number === 29){
      setNumber(number + 1)
    }
  }
  
  

  return (
   <Pagina>
    <Logo />

    { (number <= 29 ? (
      perguntas.map((item, index) => {
        if(number === index){
          return <Questionario 
            key={item.id} 
            pergunta={perguntas[number]}
            respostas={respostas}
            setRespostas={setRespostas}
          />
        }else{
          return null
        }
      })
    ) : (
      <Resultado respostas={respostas} gabarito={perguntas.map((i) => i.resposta)}/>
    ))      
    }

    <View style={styles.botoes}>
      {number >= 30 ? (
        <Button 
        icon="arrow-left" 
        mode="elevated"
        buttonColor="#000"
        textColor="#fff"         
        style={styles.btn}
        onPress={() => {
          setRespostas([])
          setNumber(0)
        }}  
      >
        Refazer teste
      </Button>
      ) : (

      <Button 
        icon="arrow-left" 
        mode="contained-tonal" 
        style={styles.btn}
        onPress={prevHandler}  
      >
        Anterior
      </Button>
      )}
      {number >= 29 ? (
        <Button 
        icon="arrow-right" 
        mode="contained" 
        style={number >= 30 ? {display:"none"} : styles.btn} 
        onPress={concluirHandler}       
      >
        Concluir
      </Button>
      ) : (
        <Button 
          icon="arrow-right" 
          mode="contained" 
          style={styles.btn} 
          onPress={nextHandler}          
        >
          Proximo
        </Button>
      )}
      
    </View>        
   </Pagina>    
  );
}

const styles = StyleSheet.create({
  btn:{
    marginHorizontal:10,
 
  },
  botoes:{    
    display:"flex",
    flexDirection:"row",    
    width:"100%",
    paddingHorizontal:10,
    marginTop:10,
    justifyContent:"center",
    alignItems:"center",
    position:"relative",
    bottom:10,
    
    
  }
})
