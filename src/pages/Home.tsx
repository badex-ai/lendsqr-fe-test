
import React from 'react'
import { Link} from 'react-router-dom';
import styles from './home.module.scss'


const Home = () => {
 
  
  return (
    <div className={styles.home}>
      <div>
        <h2>
        Hey welcome to lensqr go to the login page here <Link to={'/login'}>HERE</Link>
      </h2>
      </div>
      
    </div>
  )
}

export default Home