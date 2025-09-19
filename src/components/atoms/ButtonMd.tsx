import React from 'react'
import styles from './buttonMd.module.scss'
interface ButtonMdProps extends React.HTMLAttributes<HTMLDivElement> {
  vars: 'solid' | 'ghost';
  text: string;
  onClickBtn: ()=> void
}

const ButtonMd: React.FC<ButtonMdProps> = ({ vars, text,onClickBtn, ...props }) => {

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