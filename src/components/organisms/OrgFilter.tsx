import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FilterOrgFormData,filterOrgFormSchema } from '../../types';
import styles from './orgFilter.module.scss'
import SelectInputSm from '../atoms/SelectInputsm';
import Input from '../atoms/Input';
import ButtonMd from '../atoms/ButtonMd';
import DateInput from '../atoms/DateInput';

type Props = {}

const OrgFilter = (props: Props) => {
    const {
        register,
        handleSubmit,
        reset, // 👈 comes from useForm
        formState: { errors, isSubmitting }, 
    } = useForm<FilterOrgFormData>({
        resolver: zodResolver(filterOrgFormSchema),
    
            mode: 'onChange', // Validates on change for better UX
            defaultValues: {
            organizationSelect: '',
            username: '',
            userEmail: '',
            date: '',
            phoneNumber: '',
            status: '',
            
            }
        });


  function onFilterOrgFormSubmit(data: FilterOrgFormData) { 
    console.log('Form submitted:', data); 
  }

  function handleResetClick() { 
    reset()
    return 
  }
  return (
   <div className={styles.orgFilter}>
    <form className={styles.orgFilter_form}> 
        {/* Organization Select */}
         <SelectInputSm 
        id='status'  
        options={[
          {value:'Org1', label: 'Org1'},
          {value:'Org1', label: 'Org2'},
          {value:'Org3', label: 'Org3'}
        ]} 
        label='Status'
        register={register}
        error={errors.status}
      />
        
      {/* username */}
      <Input 
        id='username' 
        placeholder='Enter username' 
        label='Username' 
        register={register}
        error={errors.username}
        /> 

        {/* email */}
      <Input 
        id='userEmail' 
        type='email'
        placeholder='Enter email' 
        label='Email' 
        register={register}
        error={errors.userEmail}
      /> 
        
      
        {/* Date */}
        <DateInput 
        id='date' 
        label='Select Date' 
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
                <ButtonMd text='Filter' vars='solid' onClickBtn={handleSubmit(onFilterOrgFormSubmit)} /> 
        </div>
    
  </form>
</div>

  )
}

export default OrgFilter