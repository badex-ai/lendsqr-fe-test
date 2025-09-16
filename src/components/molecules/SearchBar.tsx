import React from 'react'
import styles from "./searchBar.module.scss"
import { SearchIcon } from '../../assets/icons'


function SearchBar() {
 
   



  return (
   <div className={styles.searchbar}>
    <form>
      <input title='me' placeholder='Search for anything'></input>
    </form>
    
    <div className={styles.searchbar_button}>
      <SearchIcon/>
    </div>
    
   </div>
  )
}

export default SearchBar