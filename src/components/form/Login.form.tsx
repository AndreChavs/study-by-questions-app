import { useFormik } from 'formik'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import validationSchema from '@/src/functions/validationLogin'
import { Button, Text, TextInput } from 'react-native-paper'

const LoginForm = () => {
  const formik = useFormik({
    initialValues:{
      email:'',
      senha:''
    },
    validationSchema,
    onSubmit:(values) => {
      console.log({values})
    }
  })
  return (
    <ScrollView>
      <View style={styles.container}>
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
          onChangeText={formik.handleChange('senha')}
          onBlur={formik.handleBlur('senha')}
          value={formik.values.senha}
          mode="outlined"
          secureTextEntry
          style={styles.input}
          error={formik.touched.senha && Boolean(formik.errors.senha)}
        />
        {formik.touched.senha && formik.errors.senha && (
          <Text style={styles.error}>{formik.errors.senha}</Text>
        )}

        <Button 
          mode="contained" 
          onPress={() => formik.handleSubmit()} style={styles.button}>
          Entrar
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

export default LoginForm