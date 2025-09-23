import { z } from 'zod';
type SvgIconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface User {
    id: string
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
  organizationSelect: z.string().optional(),
  
  username: z.string()
    .optional()
    .refine((val) => !val || val.length >= 3, {
      message: 'Username must be at least 3 characters'
    })
    .refine((val) => !val || val.length <= 50, {
      message: 'Username must not exceed 50 characters'
    })
    .refine((val) => !val || /^[a-zA-Z]+$/.test(val), {
      message: 'Username can only contain letters'
    }),
    
  userEmail: z.string()
    .optional()
    .refine((val) => !val || z.string().email().safeParse(val).success, {
      message: 'Invalid email address'
    }),
    
  date: z.string().optional(),
  
  phoneNumber: z.string()
    .optional()
    .refine((val) => !val || val.length >= 11, {
      message: 'Phone number must be at least 11 digits'
    })
    .refine((val) => !val || /^[+]?[1-9][\d]{0,15}$/.test(val), {
      message: 'Invalid phone number format'
    }),
    
  status: z.string().optional()
})
.refine((data) => {
  // Check if at least one field has a meaningful value
  return Object.values(data).some(value => 
    value !== undefined && 
    value !== null && 
    value !== '' && 
    String(value).trim() !== ''
  );
}, {
  message: "Please provide at least one filter criteria",
  path: [] // This shows the error at the form level, not on a specific field
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
      'Password must include an uppercase, lowercase letter, and a number.'
    )
});

type FilterOrgFormData = z.infer<typeof filterOrgFormSchema>;
type LoginFormData = z.infer<typeof loginFormSchema>;

// type dataType = FilterOrgFormData | LoginFormData
interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  vars: 'solid' | 'ghost';
  text: string;
  onClickBtn?: ()=> void
}



type UserInfoType = {
  id: string; 
  personalInformation: {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    residenceType: string;
  };
  accountInformation: {
    accountBalance: string; 
    tier: number;           
    accountNumber: string;  
    bankName: string;      
  };
  educationAndEmployment: {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: Array<{
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    relationship: string;
  }>;
};

type PersonalInformationType = UserInfoType["personalInformation"];
type AccountInformationType = UserInfoType["accountInformation"];
type EducationAndEmploymentType = UserInfoType["educationAndEmployment"];
type SocialsType = UserInfoType["socials"];
type Guarantor = UserInfoType["guarantor"]




export type {User, UserContextType, NavLinkType,NavLinkArray, SvgIconComponent, StatusEnum,CustomerType,FilterOrgFormData,LoginFormData,ButtonProps,UserInfoType, PersonalInformationType, AccountInformationType, EducationAndEmploymentType, SocialsType,Guarantor}