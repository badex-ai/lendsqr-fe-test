import React from 'react'
import styles from './gridA.module.scss'
import {PersonalInformationType, AccountInformationType, EducationAndEmploymentType, SocialsType} from '../../types'
import {formatKey} from '../../utils'


// Include guarantor type if needed
type GuarantorType = {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  relationship: string;
};

type DisplayNames = {
  personalInformation: "Personal Information";
  accountInformation: "Account Information";
  educationAndEmployment: "Education And Employment";
  socials: "Socials";
  gaurantor: ""
};

type UserInfoObject = PersonalInformationType | AccountInformationType | EducationAndEmploymentType | SocialsType | GuarantorType;

type Columns = number
type InfoNameType = string

type Props = {
  userInfo: UserInfoObject; 
  columns: Columns;
  infoName: InfoNameType;
};

const GridA = ({columns, infoName, userInfo}: Props) => {
   const data = Object.entries(userInfo).map(([key, value]) => (
    <div key={key} className={styles.gridCont_grid_item}>
      <div className={styles.gridCont_grid_item_title}>
        {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
      </div>
      <div className={styles.gridCont_grid_item_value}>
        {String(value)}
      </div>
    </div>
  )); 
  
  return (
    <div className={styles.gridCont}>
      <h3>{formatKey(infoName)}</h3>
      <div data-columns={columns} className={styles.gridCont_grid}>
        {data}
      </div>
    </div>
  )
}

export default GridA