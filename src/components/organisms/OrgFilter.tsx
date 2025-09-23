import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FilterOrgFormData,filterOrgFormSchema } from '../../types';
import styles from './orgFilter.module.scss'
import SelectInputSm from '../atoms/SelectInputsm';
import Input from '../atoms/Input';
import ButtonMd from '../atoms/ButtonMd';
import DateInput from '../atoms/DateInput';


type Props = {
  onFilter:  (data: FilterOrgFormData)=> void
}

const OrgFilter = ({onFilter}: Props) => {
    const {
        register,
        handleSubmit,
        reset, 
        formState: { errors, isSubmitting }, 
    } = useForm<FilterOrgFormData>({
        resolver: zodResolver(filterOrgFormSchema),
    
            mode: 'onChange', 
            defaultValues: {
            organizationSelect: '',
            username: '',
            userEmail: '',
            date: '',
            phoneNumber: '',
            status: '',
            
            }
        });

  function handleResetClick() { 
    reset()
    return 
  }

 
  return (
   <div className={styles.orgFilter}>
      <form onSubmit={handleSubmit(onFilter)}   id='filterForm' className={styles.orgFilter_form}> 
          {/* Organization Select */}
          <SelectInputSm 
          id="organizationSelect" 
          options={[
            {value:'Org1', label: 'Org1'},
            {value:'Org2', label: 'Org2'},
            {value:'Org3', label: 'Org3'}
          ]} 
          label='Organization'
          register={register}
          error={errors.status}
        />
          
        {/* username */}
        <Input 
          id='username' 
          placeholder='User' 
          label='Username' 
          register={register}
          error={errors.username}
          /> 

          {/* email */}
        <Input 
          id='userEmail' 
          type='email'
          placeholder='Email' 
          label='Email' 
          register={register}
          error={errors.userEmail}
        /> 
          
        
          {/* Date */}
          <DateInput 
          id='date' 
          label='Date' 
          register={register}
          error={errors.date}
        /> 

          {/* Phone Number */}
        
          
            <Input 
          id='phoneNumber' 
          type='tel'
          placeholder='Phone Number' 
          label='Phone Number' 
          register={register}
          error={errors.phoneNumber}
        /> 
          
          

          {/* Status Select */}
          <div>
        <SelectInputSm 
          id='status'  
          options={[
            {value:'Active', label: 'Active'},
            {value:'Inactive', label: 'Inactive'},
            {value:'Pending', label: 'Pending'},
            {value:'Blacklisted', label: 'Blacklisted'}
          ]} 
          label='Status'
          register={register}
          error={errors.status}
        />
          </div>
          <div className={styles.orgFilter_btns}>
                  <ButtonMd text='Reset' vars='ghost' onClickBtn={handleResetClick} />
                  <ButtonMd type='submit' text='Filter' loading={isSubmitting} vars='solid'/> 
          </div>
    
      </form>
    </div>

  )
}

export default OrgFilter