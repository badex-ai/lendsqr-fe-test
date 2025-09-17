import { Component} from "react";
type SvgIconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface User {
    name: string
    image : any

}

 type UserContextType = {
  user: User | null;              // current logged-in user
};

interface NavLinkType  {
  name: string
  link: string
  icon: SvgIconComponent;
}
type NavLinkArray  = NavLinkType[]
export type {User, UserContextType, NavLinkType,NavLinkArray, SvgIconComponent}