import React,{useState,useEffect} from 'react'
import { BackArrowIcon } from '../assets/icons'
import { Outlet } from 'react-router-dom'
import UserDetailsHeader from '../components/molecules/UserDetailsHeader'
import ButtonColor from '../components/atoms/ButtonColor'
import styles from './userDetails.module.scss'
import { Link } from 'react-router-dom'
import { UserInfoType } from '../types'
import {getCutomerDetails} from '../api'

type Props = {}

const UserDetails = (props: Props) => {
  const [customerDetails, setcustomerDetails] = useState<UserInfoType| null>(null)

  const userInfoStatic : UserInfoType = {
  id: "LSQFf587g90",
  personalInformation: {
    fullName: "Grace Effiom",
    phoneNumber: "07060780922",
    emailAddress: "grace@gmail.com",
    bvn: "07060780922",
    gender: "Female",
    maritalStatus: "Single",
    children: "None",
    residenceType: "Parent’s Apartment"
  },
  accountInformation: {
    accountBalance: "₦200,000.00",
    tier: 1, // Tier one (3 stars)
    accountNumber: "9912345678",
    bankName: "Providus Bank"
  },
  educationAndEmployment: {
    levelOfEducation: "B.Sc",
    employmentStatus: "Employed",
    sectorOfEmployment: "FinTech",
    durationOfEmployment: "2 years",
    officeEmail: "grace@lendsqr.com",
    monthlyIncome: "₦200,000.00-₦400,000.00",
    loanRepayment: "40,000"
  },
  socials: {
    twitter: "@grace_effiom",
    facebook: "Grace Effiom",
    instagram: "@grace_effiom"
  },
  guarantor: [
    {
      fullName: "Debby Ogana",
      phoneNumber: "07060780922",
      emailAddress: "debby@gmail.com",
      relationship: "Sister"
    }
  ]
}

  useEffect(() => {
    
    setcustomerDetails(getCutomerDetails)
  }, [])
  



  function handleBtnClick(){
   
  }
  return (
    <div className={styles.userDetails}>
       <div className={styles.userDetails_backNav}>
      <BackArrowIcon/> <Link to={'/dashboard/users'}>Back to Users</Link>
      </div>

      <div className={styles.userDetails_top}>
        <h1>User Details</h1>
        <div className={styles.userDetails_top_btn}>
          <ButtonColor text='Blacklist User' col='blc' onClickBtn={handleBtnClick}/>
           <ButtonColor text='Activate User' col='act' onClickBtn={handleBtnClick}/>
        </div>
        </div>

       { customerDetails &&
       <UserDetailsHeader userInfo={customerDetails}/>}

       {/* </div> */}
    
      <Outlet/>
    </div>
   
  )
}

export default UserDetails