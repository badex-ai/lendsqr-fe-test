import { Component} from "react";
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
type SvgIconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface User {
    name: string
    image : any

}

 type UserContextType = {
  user: User | null;              // current logged-in user
};

type StatusEnum ='Active' | 'Inactive' | 'Pending' | 'Blacklisted';

interface CustomerType {
  id: string
  organisation: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  status: StatusEnum
}

interface NavLinkType  {
  name: string
  link: string
  icon: SvgIconComponent;
}
type NavLinkArray  = NavLinkType[]


export const filterOrgFormSchema = z.object({
  organizationSelect: z.string().trim().min(1, 'Organization is required'),
  username: z.string()
    .trim()
    .min(3, 'Username must be at least 3 characters')
    .max(50, 'Username must not exceed 50 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  userEmail: z.email('Invalid email address')
    .trim()
    .min(1, 'Email is required'),
  date: z.string().min(1, 'Date is required'),
  phoneNumber: z.string()
    .trim()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number format'),
  status: z.string().min(1, 'Status is required')
});

export const loginFormSchema = z.object({
  email: z.email('Invalid email address')
    .trim()
    .min(1, 'Email is required'),
  password: z.string()
    .trim()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
});

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  vars: 'solid' | 'ghost';
  text: string;
  onClickBtn: ()=> void
}


type FilterOrgFormData = z.infer<typeof filterOrgFormSchema>;
type LoginFormData = z.infer<typeof loginFormSchema>;
export type {User, UserContextType, NavLinkType,NavLinkArray, SvgIconComponent, StatusEnum,CustomerType,FilterOrgFormData,LoginFormData,ButtonProps}