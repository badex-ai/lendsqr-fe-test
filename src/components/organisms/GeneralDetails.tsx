import React from 'react'
import GridA from './GridA'
import { UserInfoType } from '../../types'
import styles from './generalDetails.module.scss'
import {useIsMobile} from '../../hooks/IsMobile'
type Props = {}

const GeneralDetails = (props: Props) => {
  const userInfoStatic: UserInfoType = {
    id: "LSQFf587g90",
    personalInformation: {
      fullName: "Grace Effiom",
      phoneNumber: "07060780922",
      emailAddress: "grace@gmail.com",
      bvn: "07060780922",
      gender: "Female",
      maritalStatus: "Single",
      children: "None",
      residenceType: "Parent's Apartment"
    },
    accountInformation: {
      accountBalance: "₦200,000.00",
      tier: 1,
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

  const isMobile = useIsMobile()

  
  const info1: ('personalInformation' | 'educationAndEmployment')[] = ['personalInformation', 'educationAndEmployment'];

 let gridNum = isMobile.Big || isMobile.Tiny? [4,3] :[5,4]
  console.log(gridNum[1],'this is index 1')
  console.log(gridNum[0], 'this is index 2')

  let  components1 = info1.map((key) => {
    return (
      <GridA 
        key={key}
        columns={key === 'personalInformation' ? gridNum[0] : gridNum[1]}
        userInfo={userInfoStatic[key]} 
        infoName={key} 
      />
    );
  });

 

  
  const component2 = (
    <GridA 
      key="socials"
      columns={gridNum[0]} 
      userInfo={userInfoStatic.socials} 
      infoName="socials"
    />
  );

  const component3 = userInfoStatic.guarantor.map((guarantorInfo, index) => {
    return (
      <GridA 
        key={`guarantor`} 
        columns={gridNum[0]} 
        userInfo={guarantorInfo}
        infoName={`guarantor ${index + 1}`}
      />
    );
  });

  return (
    <div className={styles.generalDetails} >
      {components1}
      {component2}
      {component3}
    </div>
  )
}

export default GeneralDetails