import React from 'react';
import styles from './dateInput.module.scss';
import { CalendarIcon } from '../../assets/icons';
import { UseFormRegister, FieldValues, Path, FieldError } from 'react-hook-form'; 

interface DateInputProps<T extends FieldValues = FieldValues> extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'type'> {
  id: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  error?: FieldError;
}

const DateInput = <T extends FieldValues = FieldValues>({ 
  id, 
  label, 
  register, 
  error,
  ...props 
}: DateInputProps<T>) => {
  return (
    <div className={styles.date}>
      <label className={styles.date_label} htmlFor={id}>{label}</label>
      <div className={styles.date_input}>
        <input 
          className={styles.date_input_main} 
          id={id} 
          type="date"
          {...register(id)}
          {...props}
          placeholder='Date'
        />
        <span className={styles.date_input_icon}>
          <CalendarIcon />
        </span>
      </div>
      
      {error && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default DateInput;