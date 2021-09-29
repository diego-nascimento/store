import React from 'react'
import Input from '../Input/Input'
import * as SC from './style'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../PagamentoCheckout/Pagamento.style'
import * as Yup from 'yup'
import { useAuth } from '../../contexts/Auth'

const schema = Yup.object({
  Email: Yup.string()
    .email('Preencha como um email')
    .required('Este campo deve ser preenchido')
    .lowercase('Email deve ser escrito com letras minusculas')
    .max(100, 'Número maximo de caracteres é 100 caracteres'),
  Password: Yup.string()
    .required('Este campo deve ser preenchido')
    .min(8, 'A senha deve ter pelo menos 8 caracteres'),
}).required()

export const LoginComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  })
  const { Login, error, loading } = useAuth()

  const onLogin = async (data: { Email: string; Password: string }) => {
    await Login({ email: data.Email, password: data.Password })
  }
  return (
    <SC.Container>
      <SC.Formulario onSubmit={handleSubmit(onLogin)}>
        <Input
          type='email'
          placeholder='Email'
          Register={register}
          Error={errors.Email}
          name='Email'
        />
        <Input
          type='Password'
          placeholder='Password'
          Register={register}
          Error={errors.Password}
          name='Password'
        />
        {error && <b>{error}</b>}
        <SC.ButtonContainer>
          <Button>Entrar</Button>
        </SC.ButtonContainer>
        <SC.Options>
          <p>CADASTRAR</p>
          <p>Esqueci minha senha</p>
        </SC.Options>
      </SC.Formulario>
    </SC.Container>
  )
}
