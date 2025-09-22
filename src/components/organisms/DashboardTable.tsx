import React,{useState} from 'react'
import styles from './dashboardTable.module.scss'
import { StatusEnum,CustomerType } from '../../types';
import Badge from '../atoms/Badge';
import { FilterIcon,VertMoreIcon}   from '../../assets/icons';
import OrgFilter from './OrgFilter';
import UserDetails from '../molecules/UserDetails';
import DetailsExpansion from '../molecules/DetailsExpansion';
import { useClickOutside } from '../../hooks/useClickOutside';






interface UserTableProps {
  customers: CustomerType[];
}
const DashboardTable: React.FC<UserTableProps> = ({ customers }) => {
  const [openFilter, setOpenFilter] = useState(false)
 

   function handleOpenFilter(){
    setOpenFilter(true)
   }

    const filterRef = useClickOutside<HTMLDivElement>(() => {
    setOpenFilter(false)
  })



  const tableBody =  <tbody>
          {customers.map((user) => (
            <tr key={user.id}>
              <td>{user.organisation}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone_number}</td>
              <td>{new Date(user.date_joined).toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true
                })}
              </td>
              <td><Badge text={user.status}/></td>
              <td className={styles.dashboardTable_icon}>
                <DetailsExpansion/>
              </td>
            </tr>
          ))}
        </tbody>

  return (
    <div className={styles.dashboardTable}>
       <table>
        <thead>
          <tr>
            <th>Organisation <span className={styles.dashboardTable_icon}><FilterIcon onClick={handleOpenFilter}/></span></th>
            <th>Username <span className={styles.dashboardTable_icon}><FilterIcon/></span></th>
            <th>Email <span className={styles.dashboardTable_icon}><FilterIcon/></span></th>
            <th>Phone Number <span className={styles.dashboardTable_icon}><FilterIcon/></span></th>
            <th>Date Joined <span className={styles.dashboardTable_icon}><FilterIcon/></span></th>
            <th>Status <span className={styles.dashboardTable_icon}><FilterIcon/></span></th>
          </tr>
        </thead>
          {tableBody}
          {openFilter && <div ref={filterRef} className={styles.dashboardTable_orgFilter}>
            <OrgFilter />
          </div>}
          
          
      </table>

     
    </div>
  )
}

export default DashboardTable