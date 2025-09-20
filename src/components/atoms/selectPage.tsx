import React from 'react'
import { NextIcon } from '../../assets/icons'
import styles from './selectPage.module.scss'

type Props = {
    pageLength: number
    handlePageSelected : (num: string)=> void
}

const SelectPage = ({pageLength, handlePageSelected, ...props}: Props) => {
    const options = Array.from({ length: pageLength }, (_, i) => i + 1);
    
  return (
    <div className={styles.selectPage} >
         <select 
           onChange={(e) => handlePageSelected(e.target.value)} 
           className={styles.selectPage_input} 
           id='pageSelect' 
           {...props}
         >
            <option value="">{pageLength}</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
         </select>
         <span className={styles.selectPage_icon}>
           <NextIcon position='down'/>
         </span>
      </div>
  )
}

export default SelectPage