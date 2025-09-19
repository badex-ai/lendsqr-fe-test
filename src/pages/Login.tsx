import React from 'react'
import Input from '../components/atoms/Input'
import signInImage from '../assets/images/signInImage.svg'
import {LoginFormData, loginFormSchema} from '../types'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ButtonBg from '../components/atoms/ButtonBg';

type Props = {}

const Login = (props: Props) => {

  const {
        register,
        handleSubmit,
        reset, 
        formState: { errors, isSubmitting }, 
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema),
          mode: 'onChange', // Validates on change for better UX
          defaultValues: {
            password: '',
            email: '',
            }
        });

    async function handleLogin(data: LoginFormData) { 
      // isSubmitting
      await new Promise((r) => setTimeout(r, 1000));
    reset(); 
    }
  return (
    <div>
      <div>
        <img src={signInImage} alt='sign in'/>
      </div>
      <div>
        <form onSubmit={handleSubmit(handleLogin)}>
           <Input 
        id='email' 
        type='email'
        placeholder='Email' 
        register={register}
        error={errors.email}
        size='lg'
      /> 
           <Input 
        id='password' 
        type='password'
        placeholder='Password' 
        register={register}
        error={errors.password}
        size='lg'
      /> 
      <div>forgot password</div>
      <ButtonBg text='LOG IN' vars='solid' onClickBtn={handleLogin}/>
        </form>
      </div>
    </div>
  )
}

export default Login