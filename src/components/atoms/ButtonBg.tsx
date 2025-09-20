import React from 'react'
import styles from './buttonBg.module.scss'
import { ButtonProps } from '../../types';

interface ButtonBgProps extends ButtonProps {
  loading?: boolean;
};
const ButtonBg: React.FC<ButtonBgProps> = ({ vars, text,onClickBtn,loading=false , ...props }) => {

function getWrapperClass() {
  return vars === "solid" ? styles.bgBtn_solid : styles.bgBtn_ghost;
}

  return (

    <button type='button' onClick={onClickBtn} className={`${styles.bgBtn} ${getWrapperClass()}`}>
      {loading ? "...submitting" : `${text}`}
      
    </button>
  )
}

export default ButtonBg