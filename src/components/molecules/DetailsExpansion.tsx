import React, {useState} from 'react'
import {VertMoreIcon}   from '../../assets/icons';
import UserDetails from './UserDetails';
import styles from './detailsExpansion.module.scss'
import { useClickOutside } from '../../hooks/useClickOutside';


type Props = {}

const DetailsExpansion = (props: Props) => {

       const [openDetails, setOpenDetails] = useState(false)

       function handleOpenDetails() {
    
    setOpenDetails(true)
   }

    const detailsRef = useClickOutside<HTMLDivElement>(() => {
    setOpenDetails(false)
  })
    
  return (
    <>
         <VertMoreIcon className={styles.expandDetails} onClick={handleOpenDetails}/>
                        {openDetails && <div ref={detailsRef} className={styles.expandDetails_content}>
                        < UserDetails/>
                    </div>}
    </>
  )
}

export default DetailsExpansion