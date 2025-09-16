import React,{ReactNode, useState,createContext,useContext} from "react";
import {User, UserContextType} from '../types'
import userImage from '../assets/images/avatar.jpg'

type UserProviderProps = {
  children: ReactNode;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const staticUser : User = {name:"Adedeji", image: userImage }

export const UserProvider = ({ children }: { children: ReactNode }) => {
    
  const [user, setUser] = useState<User | null>(staticUser);

//   const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
