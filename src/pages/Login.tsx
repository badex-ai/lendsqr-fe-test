import React from 'react'
import Input from '../components/atoms/Input'
import signInImage from '../assets/images/signInImage.svg'
import {LoginFormData, loginFormSchema} from '../types'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ButtonBg from '../components/atoms/ButtonBg';
import styles from './login.module.scss'
import { Logo } from '../assets/icons';
import { Link } from 'react-router-dom';
import {signIn} from '../api'
import { useNavigate } from 'react-router-dom';

type Props = {}

const Login = (props: Props) => {
  const navigate = useNavigate();




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
    
      await new Promise((r) => setTimeout(()=>{
       const result  = signIn(data)
       
       if (result){
        localStorage.setItem("lqwfreyiurs-rd", JSON.stringify(result));
        navigate('/dashboard/users');
       }
        
      }, 1000));
    reset(); 
    }
  return (
    <div className={styles.login}>
      <div className={styles.login_left}>
        <Logo className={styles.login_left_logo}/>
        <img src={signInImage} alt='sign in'/>
      </div>
      <div className={styles.login_right}>
        <div>
        <h1>Welcome!</h1>
        <h2>Enter details to login.</h2>
        <form>
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

      <Link to='#' className={styles.login_forgot}>forgot password</Link>
      <ButtonBg  loading={isSubmitting} text='LOG IN' vars='solid' onClickBtn={handleSubmit(handleLogin)}/>
        </form>
      </div>
        </div>
       
    </div>
  )
}

export default Login