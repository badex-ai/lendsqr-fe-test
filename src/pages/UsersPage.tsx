import React ,{useState,useEffect} from 'react'
import InfoCard from '../components/molecules/InfoCard'
import DashboardTable from '../components/organisms/DashboardTable'
import { UsersIcon , ActiveUsersIcon,CoinIcon, CoinSheet} from '../assets/icons' 
import { CustomerType } from '../types'
import styles from './usersPage.module.scss'
import BottomNavigation from '../components/organisms/BottomNavigation'
import { getCustomers,staticCustomersData } from '../api'

type Props = {}

const Users :React.FC = (props: Props) => {
  
  const [currentPage, setCurrentPage] = useState('1')
  const [customers, setCustomers] = useState<CustomerType[]>(staticCustomersData)

    //****This should be an async call to the API using a useEffect hook****
  // useEffect(() => {
  // const result = getCustomers()
  // setCustomers(result)
  //fetc data for users wit loans savins and te number of active users
  // }, [])
  


const customersPerPage = 9
let endingIndex = parseInt(currentPage) * customersPerPage
let startingIndex = endingIndex - customersPerPage
let displayedCustomers = customers.slice(startingIndex, endingIndex);

const pages = customers.length / customersPerPage

const activeUsers   = customers.filter((userData)=>{
    return userData.status === "Active"
})

const staticLoans= Array(12453).fill(null);
const staticSavings= Array(102453).fill(null)

const infoCardArray = [{name: 'users', length: customers.length,icon: UsersIcon}, {name: 'active users', length : activeUsers.length, icon: ActiveUsersIcon},{name: "users with loans", length: staticLoans.length, icon: CoinSheet}, {name: "users with savings", length: staticSavings.length, icon: CoinIcon}]

const infoCards   = infoCardArray.map((info)=>{
  return  <InfoCard key={`infocard${info.name}`}  name = {info.name} value={info.length} icon={info.icon}/>
})



function handlePageChange(page:string) {
  const start = page
  setCurrentPage(start)
}


  return (
    <div className={styles.usersPage}>
      <h1>Users</h1>
      <div className={styles.usersPage_cardsCont} >
       {infoCards}
      </div >
      <div className={styles.usersPage_table}>
        <DashboardTable data={displayedCustomers}/>
      </div>
      <BottomNavigation currentPage={currentPage} onPageClick={handlePageChange} pagesLength={pages}/>
      

    </div>
    
  )
}

export default Users