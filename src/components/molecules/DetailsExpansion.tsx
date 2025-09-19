import React, {useState} from 'react'
import {VertMoreIcon}   from '../../assets/icons';
import UserDetails from './UserDetails';
import styles from './detailsExpansion.module.scss'


type Props = {}

const DetailsExpansion = (props: Props) => {

       const [openDetails, setOpenDetails] = useState(false)

       function handleOpenDetails() {
    
    setOpenDetails(true)
   }
    
  return (
    <>
         <VertMoreIcon className={styles.expandDetails} onClick={handleOpenDetails}/>
                        {openDetails && <div className={styles.expandDetails_content}>
                        <UserDetails/>
                    </div>}
    </>
  )
}

export default DetailsExpansion