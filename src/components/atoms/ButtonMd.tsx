import React from 'react'
import styles from './buttonMd.module.scss'
import { ButtonProps } from '../../types'

interface ButtonMdProps extends ButtonProps {
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const ButtonMd: React.FC<ButtonMdProps> = ({ vars, text,onClickBtn,type='button', loading=false,...props  }) => {

function getWrapperClass() {
  return vars === "solid" ? styles.mdBtn_solid : styles.mdBtn_ghost;
}

  return (

    <button type={type} onClick={onClickBtn} className={`${styles.mdBtn} ${getWrapperClass()}`}>
      {loading ? "...loading" : `${text}`}
    </button>
  )
}

export default ButtonMd