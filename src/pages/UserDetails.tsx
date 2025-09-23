import React,{useState,useEffect} from 'react'
import { BackArrowIcon } from '../assets/icons'
import { Outlet } from 'react-router-dom'
import UserDetailsHeader from '../components/molecules/UserDetailsHeader'
import ButtonColor from '../components/atoms/ButtonColor'
import styles from './userDetails.module.scss'
import { Link } from 'react-router-dom'
import { UserInfoType,CustomerType } from '../types'
import {getSingleCutomerDetails,staticCustomersData,} from '../api'
import {useIsMobile} from '../hooks/IsMobile'


type Props = {}

const UserDetails = (props: Props) => {
  const [customerDetails, setcustomerDetails] = useState<UserInfoType | null>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const result = getSingleCutomerDetails("LSQFf587g90")
    setcustomerDetails(result)
  }, [])
  
  const link = isMobile.Tiny || isMobile.Big ? (
    <Link to={'/dashboard/users'}><BackArrowIcon/></Link>
  ) : (
    <><BackArrowIcon/><Link to={'/dashboard/users'}>Back to Users</Link></>
  )

  const handleBtnClick = (id: string) => {
     const user = staticCustomersData.find((customer :CustomerType)=>{
        return id === customer.id
      })
      if(!user){
        return
      }
      user.status = 'Blacklisted'
  }

  return (
    <div className={styles.userDetails}>
      <div className={styles.userDetails_backNav}>
        {link}
      </div>

      <div className={styles.userDetails_top}>
        <h1>User Details</h1>
        <div className={styles.userDetails_top_btn}>
          <ButtonColor 
            text='Blacklist User' 
            col='blc' 
            onClickBtn={() => customerDetails && handleBtnClick(customerDetails.id)}
          />
          <ButtonColor 
            text='Activate User' 
            col='act' 
            onClickBtn={() => customerDetails && handleBtnClick(customerDetails.id)}
          />
        </div>
      </div>

      {customerDetails && <UserDetailsHeader userInfo={customerDetails}/>}
      <Outlet/>
    </div>
  )
}

export default UserDetails