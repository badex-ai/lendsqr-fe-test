import React from 'react'
import {SvgIconComponent} from '../../types'
import styles from './infoCard.module.scss'

interface InfoCardType  {
  icon: SvgIconComponent;
  name: String;
  value: number

}

const InfoCard = ({icon :Icon, name, value}:InfoCardType ) => {
  return (
    <div className={styles.infocard}>
      <Icon/>
      <div className={styles.infocard_title}>
         {name}
      </div>
     
     <div className={styles.infocard_value}>
      {value} 
     </div>
    
    </div>
  )
}

export default InfoCard