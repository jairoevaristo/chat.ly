import * as yup from "yup";

export const signInSchema = yup.object({
  email: yup.string().email("Informe um e-mail válido").required("Este campo é obrigatório"),
  password: yup.string().required("Este campo é obrigatório"),
}).required();

export const signUpSchema = yup.object({
  name: yup.string().required("Este campo é obrigatório"),
  email: yup.string().email("Informe um e-mail válido").required("Este campo é obrigatório"),
  occupation: yup.string().required("Este campo é obrigatório"),
  password: yup.string().required("Este campo é obrigatório").min(8, 'A senha deve conter no mínino 8 carectéres'),
  passwordConfirme: yup.string().required('Este campo é obrigatório').oneOf([yup.ref('password')], 'As senhas estão diferentes')
}).required();