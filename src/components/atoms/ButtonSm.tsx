

import React from 'react'
import style from './buttonSm.module.scss'

// This enforces that you can ONLY have icon OR text, never both
type IconType = {
  icon: React.ReactNode
  text?: never
}

type TextType = {
  text: string
  icon?: never  
}

type ClickBtn = {
  onClick: () => void
}

// Correct union and intersection precedence
type Props = (IconType | TextType) & ClickBtn

const ButtonSm = (props: Props) => {
  // Check which prop exists to determine what to render
  const element = props.icon ? <>{props.icon}</> : <>{props.text}</>
    
  return (
    <button className={style.smBtn} onClick={props.onClick}>
      {element}
    </button>
  )
}

export default ButtonSm