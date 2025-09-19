import React from 'react'
import styles from './selectInputSm.module.scss'
import { NextIcon } from '../../assets/icons';
import { UseFormRegister, FieldValues, Path, FieldError } from 'react-hook-form'; 

type Option = {
  value: string;
  label: string;
};

interface SelectProps<T extends FieldValues = FieldValues> extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'id'> {
  id: Path<T>;
  label: string;
  options: Option[];
  register: UseFormRegister<T>;
  error?: FieldError;
}

const SelectInputSm = <T extends FieldValues = FieldValues>({ 
  id, 
  label, 
  options,
  register, 
  error,
  ...props 
}: SelectProps<T>) => {
  return (
    <div className={styles.select}>
      <label className={styles.select_label} htmlFor={id}>{label}</label>
      <div className={styles.select_input} >
         <select 
           className={styles.select_input_main} 
           id={id} 
           {...register(id)}
           {...props}
         >
            <option value="">Select</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
         </select>
         <span className={styles.select_input_icon}>
           <NextIcon position='down'/>
         </span>
      </div>
      
      {error && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default SelectInputSm;