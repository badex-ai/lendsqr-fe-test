import React from 'react'
import GridA from './GridA'
import { UserInfoType,PersonalInformationType, AccountInformationType, EducationAndEmploymentType, SocialsType } from '../../types'
import styles from './generalDetails.module.scss'
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

  // Fixed: Personal Information and Education & Employment
  const info1: ('personalInformation' | 'educationAndEmployment')[] = ['personalInformation', 'educationAndEmployment'];

  const components1 = info1.map((key) => {
    return (
      <GridA 
        key={key}
        columns={key === 'personalInformation' ? 5 : 4}
        userInfo={userInfoStatic[key]} 
        infoName={key} 
      />
    );
  });

  // Fixed: Socials component
  // const component2 = (
  //   <GridA 
  //     key="socials"
  //     columns={3} 
  //     userInfo={userInfoStatic.socials} 
  //     infoName="socials"
  //   />
  // );

  
  const component2 = (
    <GridA 
      key="socials"
      columns={5} 
      userInfo={userInfoStatic.socials} 
      infoName="socials"
    />
  );

  const component3 = userInfoStatic.guarantor.map((guarantorInfo, index) => {
    return (
      <GridA 
        key={`guarantor`} 
        columns={5} 
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