import React from 'react'

type badgeInputType = {
    text: string,
    type: string
}

const Badge = ({text, type}: badgeInputType) => {


  return (
    <div>{text}</div>
  )
}

export default Badge