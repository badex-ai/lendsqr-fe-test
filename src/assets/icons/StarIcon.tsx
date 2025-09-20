import * as React from "react";

type StarProps ={
    fill?: boolean
}

const StarIcon = ({fill=false}: StarProps) => {

    const strokeColor = '#E9B200' 

     const style = fill ?' #E9B200' : '#fff'
    return (

        <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      fill={style}
      stroke={strokeColor}           
      strokeWidth="1"              
      strokeLinejoin="round" 
      fillRule="evenodd"
      d="M7.986 1.288a.32.32 0 0 0-.292.22L6.188 6.18 1.28 6.17a.32.32 0 0 0-.188.58l3.976 2.877-1.527 4.666a.32.32 0 0 0 .493.358L8 11.758l3.966 2.893a.32.32 0 0 0 .492-.358l-1.527-4.666 3.977-2.877a.32.32 0 0 0-.188-.58l-4.907.01-1.51-4.67v-.001a.32.32 0 0 0-.317-.221"
      clipRule="evenodd"
    ></path>
  </svg>
    )
}

   

export default StarIcon;
