// InputSm.tsx
import React, { useState } from "react";
import styles from "./Input.module.scss";
import { UseFormRegister, FieldValues, Path, FieldError } from 'react-hook-form'; 

interface InputSmProps<T extends FieldValues = FieldValues> { 
  id: Path<T>;
  label?: string | null;
  type?: "password" | "text" | "email" | "date" | "tel";
  size?: "sm" | "lg";
  placeholder?: string;
  password?: boolean;
  register: UseFormRegister<T>;
  error?: FieldError;
}

const Input = <T extends FieldValues = FieldValues>({
  id,
  label =  null,
  type = "text",
  size = "sm",
  placeholder = "",
  password = false,
  register,
  error,
  ...props
}: InputSmProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);


function getWrapperClass() {
  return size === "sm" ? "input_sm" : "input_lg";  // Return the exact class name strings
}
const sizeStyle = getWrapperClass();

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className={styles.input}>
     {label && <label
        htmlFor={id}
        className={styles.input_label}
      >
        {label}
      </label>}

      <div className={styles[sizeStyle]}>
        <input className={styles[`${sizeStyle}_inp`]}
          id={id}
          type={inputType}
          placeholder={placeholder}
          {...register(id)}
          {...props} 
        />

        {type === "password" && (
          <button
            type="button"
            className={styles.input_toggle}
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </button>
        )}
      </div>
      
      {error && type === 'password' && (
        <span role="alert" className={styles.input_error}>{error.message}</span>
      )}
    </div>
  );
};

export default Input;