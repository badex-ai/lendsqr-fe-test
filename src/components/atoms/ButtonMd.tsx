import React from 'react'
import styles from './buttonMd.module.scss'
import { ButtonProps } from '../../types'


const ButtonMd: React.FC<ButtonProps> = ({ vars, text,onClickBtn, ...props }) => {

function getWrapperClass() {
  return vars === "solid" ? styles.smBtn_solid : styles.smBtn_ghost;
}

  return (

    <button type='button' onClick={onClickBtn} className={`${styles.smBtn} ${getWrapperClass()}`}>
      {text}
    </button>
  )
}

export default ButtonMd