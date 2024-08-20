import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Nome é obrigatório'),
  email: yup
    .string()
    .email('Email inválido')
    .required('Email é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
  confirmacaoSenha: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'As senhas devem ser iguais')
    .required('Confirmação de senha é obrigatória'),
});

export default validationSchema