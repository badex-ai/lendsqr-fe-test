import React ,{useState,useEffect} from 'react'
import InfoCard from '../components/molecules/InfoCard'
import DashboardTable from '../components/organisms/DashboardTable'
import { UsersIcon , ActiveUsersIcon,CoinIcon, CoinSheet} from '../assets/icons' 
import { CustomerType,FilterOrgFormData } from '../types'
import styles from './usersPage.module.scss'
import BottomNavigation from '../components/organisms/BottomNavigation'
import { getCustomers,staticCustomersData,filterData } from '../api'

type Props = {}

const Users :React.FC = (props: Props) => {
  
  const [currentPage, setCurrentPage] = useState('1')
  const [customers, setCustomers] = useState<CustomerType[]>(staticCustomersData)
  const [displayedCustomers, setDisplayedCustomers] = useState<CustomerType[] | []>([])
  const [clonedCustomers, setClonedCustomers] = useState<CustomerType[] | []>([])

    //****This should be an async call to the API using a useEffect hook****
  // useEffect(() => {
  // const result = getCustomers()
  // setCustomers(result)
  //fetc data for users wit loans savins and te number of active users
  // }, [])


 const customersPerPage = 9

//  useEffect(() => {
//    const result = getCustomers()
//     setCustomers(result)
  
//  }, [customers])
 
 useEffect(() => {
    const clone = structuredClone(customers)    
    setClonedCustomers(clone)
   
  }, []) 
 
 useEffect(() => {
   

    
    
    let endingIndex = parseInt(currentPage) * customersPerPage
    let startingIndex = endingIndex - customersPerPage

    let displayedCustomers = customers?.slice(startingIndex, endingIndex);

    console.log(displayedCustomers)
    if (displayedCustomers) {
      setDisplayedCustomers(displayedCustomers)
    }
    


  }, [currentPage,customers])
  
  
  let pages


   pages = Math.floor(customers?.length / customersPerPage)

async function onFilterOrgFormSubmit(data: FilterOrgFormData) { 
    
    //****Tis sould be an async await call to te api*****
      await new Promise((resolve) => setTimeout(()=>{
              const result = filterData(data)
              // console.log(result)
              setCustomers(result)
              resolve(true); 
            }, 1000));
      
  }



const activeUsers   = clonedCustomers?.filter((userData:CustomerType)=>{
    return userData.status === "Active"
})

const staticLoans= Array(12453).fill(null);
const staticSavings= Array(102453).fill(null)

const infoCardArray = [{name: 'users', length: clonedCustomers?.length,icon: UsersIcon}, {name: 'active users', length : activeUsers?.length, icon: ActiveUsersIcon},{name: "users with loans", length: staticLoans.length, icon: CoinSheet}, {name: "users with savings", length: staticSavings.length, icon: CoinIcon}]

const infoCards   = infoCardArray.map((info)=>{
  return  <InfoCard key={`infocard${info.name}`}  name = {info.name} value={info.length} icon={info.icon}/>
})



function handlePageChange(page:string) {
  const start = page
  setCurrentPage(start)
  // setCustomers()
}
const empty = <div className={styles.usersPage_empty}>No data</div>

  return (
    <div className={styles.usersPage}>
      <h1>Users</h1>
      <div className={styles.usersPage_cardsCont} >
       {infoCards}
      </div >
      <div className={styles.usersPage_table}> 
           {displayedCustomers.length === 0 ? empty : <DashboardTable onFilterSub={onFilterOrgFormSubmit} data={displayedCustomers}/>}
      </div>
      {displayedCustomers.length === 0 ? null : <BottomNavigation currentPage={currentPage} onPageClick={handlePageChange} pagesLength={pages}/>}
      

    </div>
    
  )
}

export default Users