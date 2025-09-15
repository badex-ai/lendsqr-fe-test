import React from 'react'
import SearchBar from './searchBar'
import {NotifIcon, Logo} from '../../assets/icons/index'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className=''>
    <div>
        <Logo/>
    </div>
    <div>
    <SearchBar/>
    </div>
    <div>
    <NotifIcon/>
    </div>


    </div>
  )
}

export default Header