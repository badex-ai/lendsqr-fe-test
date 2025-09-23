import React from 'react'
import styles from './buttonBg.module.scss'
import { ButtonProps } from '../../types';

interface ButtonBgProps extends ButtonProps {
  loading?: boolean;
   type?: 'button' | 'submit' | 'reset';
};
const ButtonBg: React.FC<ButtonBgProps> = ({ vars,type, text='button',onClickBtn,loading=false , ...props }) => {

function getWrapperClass() {
  return vars === "solid" ? styles.bgBtn_solid : styles.bgBtn_ghost;
}

  return (

    <button title='btnBg' type={type} onClick={onClickBtn} className={`${styles.bgBtn} ${getWrapperClass()}`}>
      {loading ? "...loading" : `${text}`}
      
    </button>
  )
}

export default ButtonBg