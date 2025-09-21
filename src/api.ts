import {UserInfoType,User, CustomerType,LoginFormData} from './types'
import userImage from './assets/images/avatar.jpg'

const staticCustomersData: UserInfoType = {
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


  const staticUser : User = {id:'gkhohygpaikjgag', name:"Adedeji", image: userImage }

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




export function signIn(data: LoginFormData){
    if(data.email && data.password)
    return staticUser

}


export function getCustomers (){

  return staticCustomersData

}

export function getCutomerDetails(){

  return userInfoStatic
}