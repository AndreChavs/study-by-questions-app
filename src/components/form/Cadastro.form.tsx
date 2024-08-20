import React from 'react'
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useFormik } from 'formik';
import validationSchema from '@/src/functions/validationCadastro';
import { UserRegister } from '@/src/classes/UserRegister.api';


const CadastroForm = () => {
  const register = new UserRegister()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmacaoSenha: '',
    },
    validationSchema,
    onSubmit: async(values) => {     
      const {email, name, password} = values
      const {response, json} = await register.userRegister({email, name, password})
      if(response.ok){
        Alert.alert(json)
      }else{
        Alert.alert(json.message)
      }
    },
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          label="Nome"
          onChangeText={formik.handleChange('name')}
          onBlur={formik.handleBlur('name')}
          value={formik.values.name}
          mode="outlined"
          style={styles.input}
          error={formik.touched.name && Boolean(formik.errors.name)}
        />
        {formik.touched.name && formik.errors.name && (
          <Text style={styles.error}>{formik.errors.name}</Text>
        )}

        <TextInput
          label="Email"
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
          mode="outlined"
          style={styles.input}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        {formik.touched.email && formik.errors.email && (
          <Text style={styles.error}>{formik.errors.email}</Text>
        )}

        <TextInput
          label="Senha"
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
          mode="outlined"
          secureTextEntry
          style={styles.input}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.error}>{formik.errors.password}</Text>
        )}

        <TextInput
          label="Confirmação de Senha"
          onChangeText={formik.handleChange('confirmacaoSenha')}
          onBlur={formik.handleBlur('confirmacaoSenha')}
          value={formik.values.confirmacaoSenha}
          mode="outlined"
          secureTextEntry
          style={styles.input}
          error={formik.touched.confirmacaoSenha && Boolean(formik.errors.confirmacaoSenha)}
        />
        {formik.touched.confirmacaoSenha && formik.errors.confirmacaoSenha && (
          <Text style={styles.error}>{formik.errors.confirmacaoSenha}</Text>
        )}

        <Button 
          mode="contained" 
          onPress={() => formik.handleSubmit()} style={styles.button}>
          Cadastrar
        </Button>
      </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  container: {   
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default CadastroForm