import React,{useState} from 'react'
import styles from './dashboardTable.module.scss'
import { StatusEnum,CustomerType } from '../../types';
import Badge from '../atoms/Badge';
import { FilterIcon,VertMoreIcon}   from '../../assets/icons';
import OrgFilter from './OrgFilter';





interface UserTableProps {
  customers: CustomerType[];
}
const DashboardTable: React.FC<UserTableProps> = ({ customers }) => {
  const [openFilter, setOpenFilter] = useState(false)
   const [openDetails, setOpenDetails] = useState(false)

   function handleOpenDetails() {
    
    setOpenDetails(true)
   }

   function handleOpenFilter(){
    setOpenFilter(true)
   }



  const tableBody =  <tbody>
          {customers.map((user) => (
            <tr key={user.id}>
              <td>{user.organisation}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone_number}</td>
              <td>{new Date(user.date_joined).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) + ' ' + new Date(user.date_joined).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
              })}</td>
              <td><Badge text={user.status}/></td>
              <td className={styles.dashboardTable_ellipses}>
                <VertMoreIcon onClick={handleOpenDetails}/>
              </td>
            </tr>
          ))}
        </tbody>

  return (
    <div className={styles.dashboardTable}>
       <table>
        <thead>
          <tr>
            <th>Organisation <span><FilterIcon onClick={handleOpenFilter}/></span></th>
            <th>Username <span><FilterIcon/></span></th>
            <th>Email <span><FilterIcon/></span></th>
            <th>Phone Number <span><FilterIcon/></span></th>
            <th>Date Joined <span><FilterIcon/></span></th>
            <th>Status <span><FilterIcon/></span></th>
          </tr>
        </thead>
          {tableBody}
          <div className={styles.dashboardTable_orgFilter}>
            <OrgFilter />
          </div>
          
      </table>

     
    </div>
  )
}

export default DashboardTable