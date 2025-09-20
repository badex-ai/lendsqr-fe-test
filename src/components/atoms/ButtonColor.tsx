import React from 'react'
import styles from './buttonColor.module.scss'

type Props = {
    text: string
    col: 'act' | 'blc'
    onClickBtn: ()=> void
}

const ButtonColor = ({text,col,onClickBtn}: Props) => {

    function getWrapperClass(){ return col === 'act' ?  styles.colBtn_green : styles.colBtn_red;}
  return (
      <button type='button' onClick={onClickBtn} className={`${styles.colBtn} ${getWrapperClass()}`}>
      {text}
      
    </button>
  )
}

export default ButtonColor