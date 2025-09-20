import React ,{useState} from 'react'
import InfoCard from '../components/molecules/InfoCard'
import DashboardTable from '../components/organisms/DashboardTable'
import { UsersIcon , ActiveUsersIcon,CoinIcon, CoinSheet} from '../assets/icons' 
import { CustomerType } from '../types'
import styles from './usersPage.module.scss'
import BottomNavigation from '../components/organisms/BottomNavigation'

type Props = {}

const Users :React.FC = (props: Props) => {

  const [currentPage, setCurrentPage] = useState('1')

  const staticCustomerData : CustomerType[]  = [
  {
    "id": "e5dfe5d2-d7b9-45ba-ba02-d461a3c90f04",
    "organisation": "Lendsqr",
    "username": "Adedeji",
    "email": "adedeji@lendsqr.com",
    "phone_number": "08078903721",
    "date_joined": "May 15, 2020 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "7d196e2b-532c-40a8-b0a8-c6c28a2576ff",
    "organisation": "Irorun",
    "username": "Debby Ojana",
    "email": "debby2@irorun.com",
    "phone_number": "08160780928",
    "date_joined": "Apr 30, 2020 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "21c4b70b-98c8-4975-81ce-79eeafb85d6c",
    "organisation": "Lendsqr",
    "username": "Grace Effiom",
    "email": "grace@lendsqr.com",
    "phone_number": "07060780922",
    "date_joined": "Apr 30, 2020 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "10682dfc-e4be-4277-9fa9-a761ef5ac19c",
    "organisation": "Lendsqr",
    "username": "Tosin Dokunmu",
    "email": "tosin@lendsqr.com",
    "phone_number": "07033039226",
    "date_joined": "Apr 30, 2020 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "53781863-5d6d-48a6-a012-e65527091881",
    "organisation": "Lendsqr",
    "username": "Grace Effiom",
    "email": "grace@lendsqr.com",
    "phone_number": "07060780922",
    "date_joined": "Apr 30, 2020 10:00 AM",
    "status": "Active"
  },
  {
    "id": "5f921538-8c03-4021-9601-6375fea7eec3",
    "organisation": "Lendsqr",
    "username": "Tosin Dokunmu",
    "email": "tosin@lendsqr.com",
    "phone_number": "08160780900",
    "date_joined": "Apr 30, 2020 10:00 AM",
    "status": "Active"
  },
  {
    "id": "4affafba-d7dd-4261-ad0d-0ed6f68f39fb",
    "organisation": "Lendsqr",
    "username": "Grace Effiom",
    "email": "grace@lendsqr.com",
    "phone_number": "07060780922",
    "date_joined": "Apr 30, 2020 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "7c0971a3-54e3-40ad-8b35-a105246c0699",
    "organisation": "Lendsqr",
    "username": "Tosin Dokunmu",
    "email": "tosin@lendsqr.com",
    "phone_number": "08160780910",
    "date_joined": "Apr 30, 2020 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "0187156a-d601-4477-9684-62a0ccdc7fe9",
    "organisation": "Lendsqr",
    "username": "Grace Effiom",
    "email": "grace@lendsqr.com",
    "phone_number": "07060780922",
    "date_joined": "Apr 30, 2020 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "8dfbdaed-40a6-4bf4-b312-bf337cf5694c",
    "organisation": "Org5",
    "username": "User9",
    "email": "user9@example.com",
    "phone_number": "08000000009",
    "date_joined": "2020-010-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "cd94d807-2bfe-4d3c-88ae-9881acf38901",
    "organisation": "Org1",
    "username": "User10",
    "email": "user10@example.com",
    "phone_number": "08000000010",
    "date_joined": "2020-011-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "d5cdc9ad-bc8f-49e2-9c92-43fee1096c9a",
    "organisation": "Org2",
    "username": "User11",
    "email": "user11@example.com",
    "phone_number": "08000000011",
    "date_joined": "2020-012-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "9ce4bdf8-b031-4894-a438-90664d831ce1",
    "organisation": "Org3",
    "username": "User12",
    "email": "user12@example.com",
    "phone_number": "08000000012",
    "date_joined": "2020-01-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "a588cfc4-98c5-4a45-8f07-fd802374ebf3",
    "organisation": "Org4",
    "username": "User13",
    "email": "user13@example.com",
    "phone_number": "08000000013",
    "date_joined": "2020-02-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "e3838082-af83-4004-9c94-ac1011f0a4ee",
    "organisation": "Org5",
    "username": "User14",
    "email": "user14@example.com",
    "phone_number": "08000000014",
    "date_joined": "2020-03-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "b9f49fad-5585-4a6d-af02-d4cb1617c4a6",
    "organisation": "Org1",
    "username": "User15",
    "email": "user15@example.com",
    "phone_number": "08000000015",
    "date_joined": "2020-04-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "96b1c693-9d47-44da-944a-8ce3d1f4da7f",
    "organisation": "Org2",
    "username": "User16",
    "email": "user16@example.com",
    "phone_number": "08000000016",
    "date_joined": "2020-05-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "f6f9fb94-c649-4afc-b6b9-e18e52c775c8",
    "organisation": "Org3",
    "username": "User17",
    "email": "user17@example.com",
    "phone_number": "08000000017",
    "date_joined": "2020-06-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "61830dbc-b4e4-4a65-a466-49607438ac2e",
    "organisation": "Org4",
    "username": "User18",
    "email": "user18@example.com",
    "phone_number": "08000000018",
    "date_joined": "2020-07-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "ec9db9a4-3cd6-481e-b91a-f88962289862",
    "organisation": "Org5",
    "username": "User19",
    "email": "user19@example.com",
    "phone_number": "08000000019",
    "date_joined": "2020-08-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "24043340-1218-4d47-a75e-128282fb6e99",
    "organisation": "Org1",
    "username": "User20",
    "email": "user20@example.com",
    "phone_number": "08000000020",
    "date_joined": "2020-09-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "702d422b-cb6b-45b9-9168-012580a6f29c",
    "organisation": "Org2",
    "username": "User21",
    "email": "user21@example.com",
    "phone_number": "08000000021",
    "date_joined": "2020-010-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "b8a7874d-2947-45e0-bb45-f950eccb3bbb",
    "organisation": "Org3",
    "username": "User22",
    "email": "user22@example.com",
    "phone_number": "08000000022",
    "date_joined": "2020-011-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "6d6309ae-f38b-4370-8705-0386af8c5d15",
    "organisation": "Org4",
    "username": "User23",
    "email": "user23@example.com",
    "phone_number": "08000000023",
    "date_joined": "2020-012-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "2d3abb60-4560-4db3-aca8-b9ca681d48b7",
    "organisation": "Org5",
    "username": "User24",
    "email": "user24@example.com",
    "phone_number": "08000000024",
    "date_joined": "2020-01-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "452954cf-4974-4f93-96cf-7802d49a950b",
    "organisation": "Org1",
    "username": "User25",
    "email": "user25@example.com",
    "phone_number": "08000000025",
    "date_joined": "2020-02-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "c2c9c4de-d36a-4dfe-b214-90ff73c5f5cc",
    "organisation": "Org2",
    "username": "User26",
    "email": "user26@example.com",
    "phone_number": "08000000026",
    "date_joined": "2020-03-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "aa454f23-0fa4-404f-b941-ef6b05079d88",
    "organisation": "Org3",
    "username": "User27",
    "email": "user27@example.com",
    "phone_number": "08000000027",
    "date_joined": "2020-04-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "8b0193d2-d2b8-4033-b520-07aca66a6078",
    "organisation": "Org4",
    "username": "User28",
    "email": "user28@example.com",
    "phone_number": "08000000028",
    "date_joined": "2020-05-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "27e43baa-2df4-4198-9b28-cd3d0be42848",
    "organisation": "Org5",
    "username": "User29",
    "email": "user29@example.com",
    "phone_number": "08000000029",
    "date_joined": "2020-06-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "8013850d-66ac-4182-9595-79c4083dc81c",
    "organisation": "Org1",
    "username": "User30",
    "email": "user30@example.com",
    "phone_number": "08000000030",
    "date_joined": "2020-07-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "f68dcfb6-a4c7-4707-91f1-59fdda38e388",
    "organisation": "Org2",
    "username": "User31",
    "email": "user31@example.com",
    "phone_number": "08000000031",
    "date_joined": "2020-08-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "f64de9ce-03b4-4d25-bde6-604fa8adb930",
    "organisation": "Org3",
    "username": "User32",
    "email": "user32@example.com",
    "phone_number": "08000000032",
    "date_joined": "2020-09-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "cbb85fee-017f-4a3c-88f6-68ee7cca0b60",
    "organisation": "Org4",
    "username": "User33",
    "email": "user33@example.com",
    "phone_number": "08000000033",
    "date_joined": "2020-010-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "65bc8599-1582-4b63-8bca-465742d05503",
    "organisation": "Org5",
    "username": "User34",
    "email": "user34@example.com",
    "phone_number": "08000000034",
    "date_joined": "2020-011-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "a176a220-c4b4-44e2-9cd9-bea0a3afb4a2",
    "organisation": "Org1",
    "username": "User35",
    "email": "user35@example.com",
    "phone_number": "08000000035",
    "date_joined": "2020-012-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "67222202-83a7-4a3e-97b5-8bb65a80154e",
    "organisation": "Org2",
    "username": "User36",
    "email": "user36@example.com",
    "phone_number": "08000000036",
    "date_joined": "2020-01-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "56b8f6cf-ad4c-4d26-8d76-20137e65f10f",
    "organisation": "Org3",
    "username": "User37",
    "email": "user37@example.com",
    "phone_number": "08000000037",
    "date_joined": "2020-02-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "fa8415bf-23f4-49ab-b436-25ba46a23831",
    "organisation": "Org4",
    "username": "User38",
    "email": "user38@example.com",
    "phone_number": "08000000038",
    "date_joined": "2020-03-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "7b42d5f9-bc44-4d98-bf0e-52d3b8db2925",
    "organisation": "Org5",
    "username": "User39",
    "email": "user39@example.com",
    "phone_number": "08000000039",
    "date_joined": "2020-04-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "9d36bf45-a78e-4a16-8099-e4b3f73fbf9b",
    "organisation": "Org1",
    "username": "User40",
    "email": "user40@example.com",
    "phone_number": "08000000040",
    "date_joined": "2020-05-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "061125fc-3b7f-4d97-ae7d-36578dc8e56c",
    "organisation": "Org2",
    "username": "User41",
    "email": "user41@example.com",
    "phone_number": "08000000041",
    "date_joined": "2020-06-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "a55493ae-cbb2-4b1f-99fa-04d1fc15a478",
    "organisation": "Org3",
    "username": "User42",
    "email": "user42@example.com",
    "phone_number": "08000000042",
    "date_joined": "2020-07-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "d8799797-b759-48c5-bb6a-3fe6dcdb288b",
    "organisation": "Org4",
    "username": "User43",
    "email": "user43@example.com",
    "phone_number": "08000000043",
    "date_joined": "2020-08-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "6f905d75-159d-4fb4-84ea-e91612dbf9ae",
    "organisation": "Org5",
    "username": "User44",
    "email": "user44@example.com",
    "phone_number": "08000000044",
    "date_joined": "2020-09-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "5a6e00ec-39b5-4a64-8cee-6fddf358c0fb",
    "organisation": "Org1",
    "username": "User45",
    "email": "user45@example.com",
    "phone_number": "08000000045",
    "date_joined": "2020-010-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "b7c181dd-889f-4c0c-993c-1f57389e40ff",
    "organisation": "Org2",
    "username": "User46",
    "email": "user46@example.com",
    "phone_number": "08000000046",
    "date_joined": "2020-011-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "0c48c5ec-865c-4c29-807e-da0d8f87f9cf",
    "organisation": "Org3",
    "username": "User47",
    "email": "user47@example.com",
    "phone_number": "08000000047",
    "date_joined": "2020-012-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "daa32346-6073-4cfd-9f6d-1dff4ab8dab1",
    "organisation": "Org4",
    "username": "User48",
    "email": "user48@example.com",
    "phone_number": "08000000048",
    "date_joined": "2020-01-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "6075fe35-d21c-40ef-9aaa-7ac22c3c3fe4",
    "organisation": "Org5",
    "username": "User49",
    "email": "user49@example.com",
    "phone_number": "08000000049",
    "date_joined": "2020-02-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "30f370bc-021c-47c5-984e-7ea11aa49d53",
    "organisation": "Org1",
    "username": "User50",
    "email": "user50@example.com",
    "phone_number": "08000000050",
    "date_joined": "2020-03-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "12428548-66f5-44f2-9c53-e7e4733d1348",
    "organisation": "Org2",
    "username": "User51",
    "email": "user51@example.com",
    "phone_number": "08000000051",
    "date_joined": "2020-04-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "b235ca0e-82a0-44e0-a97a-ae9cf5dba071",
    "organisation": "Org3",
    "username": "User52",
    "email": "user52@example.com",
    "phone_number": "08000000052",
    "date_joined": "2020-05-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "591573e5-8695-42d9-b5fd-39db567bc4ee",
    "organisation": "Org4",
    "username": "User53",
    "email": "user53@example.com",
    "phone_number": "08000000053",
    "date_joined": "2020-06-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "be55a6e3-79d9-4c8c-a7af-9899c8278acf",
    "organisation": "Org5",
    "username": "User54",
    "email": "user54@example.com",
    "phone_number": "08000000054",
    "date_joined": "2020-07-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "f495afde-34cc-485b-b1b6-fb98f23d25bf",
    "organisation": "Org1",
    "username": "User55",
    "email": "user55@example.com",
    "phone_number": "08000000055",
    "date_joined": "2020-08-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "7048490d-2eb4-4887-a09e-e98625842a84",
    "organisation": "Org2",
    "username": "User56",
    "email": "user56@example.com",
    "phone_number": "08000000056",
    "date_joined": "2020-09-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "475f93b4-de64-4910-add7-8b00e885a33b",
    "organisation": "Org3",
    "username": "User57",
    "email": "user57@example.com",
    "phone_number": "08000000057",
    "date_joined": "2020-010-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "cfec2970-6c29-436f-9a15-a2226252e1c8",
    "organisation": "Org4",
    "username": "User58",
    "email": "user58@example.com",
    "phone_number": "08000000058",
    "date_joined": "2020-011-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "d8682adf-870a-49de-ba2d-17afe3639d6e",
    "organisation": "Org5",
    "username": "User59",
    "email": "user59@example.com",
    "phone_number": "08000000059",
    "date_joined": "2020-012-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "e1faf11f-344c-4b9b-9278-3d52a08c9d4f",
    "organisation": "Org1",
    "username": "User60",
    "email": "user60@example.com",
    "phone_number": "08000000060",
    "date_joined": "2020-01-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "44147112-244e-47dd-b67d-645c64114ef8",
    "organisation": "Org2",
    "username": "User61",
    "email": "user61@example.com",
    "phone_number": "08000000061",
    "date_joined": "2020-02-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "3b3dcb62-98bc-4d61-9ad2-b872fa547af9",
    "organisation": "Org3",
    "username": "User62",
    "email": "user62@example.com",
    "phone_number": "08000000062",
    "date_joined": "2020-03-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "ffc95f78-b763-4f0e-af30-845a633d08e9",
    "organisation": "Org4",
    "username": "User63",
    "email": "user63@example.com",
    "phone_number": "08000000063",
    "date_joined": "2020-04-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "96b978f1-266a-4e1f-976b-0e4fc97597bb",
    "organisation": "Org5",
    "username": "User64",
    "email": "user64@example.com",
    "phone_number": "08000000064",
    "date_joined": "2020-05-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "883e2736-5b83-45eb-8512-ff2ccd3fd619",
    "organisation": "Org1",
    "username": "User65",
    "email": "user65@example.com",
    "phone_number": "08000000065",
    "date_joined": "2020-06-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "0761a5e7-671a-4505-9a86-6e758bc79a7c",
    "organisation": "Org2",
    "username": "User66",
    "email": "user66@example.com",
    "phone_number": "08000000066",
    "date_joined": "2020-07-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "26f0ff74-4deb-42a1-a4a4-8ab4f765be65",
    "organisation": "Org3",
    "username": "User67",
    "email": "user67@example.com",
    "phone_number": "08000000067",
    "date_joined": "2020-08-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "0fb49cf8-278f-4cce-97fd-92a21b901f44",
    "organisation": "Org4",
    "username": "User68",
    "email": "user68@example.com",
    "phone_number": "08000000068",
    "date_joined": "2020-09-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "5bb95e1a-067a-4903-92ea-0f8f48e88b28",
    "organisation": "Org5",
    "username": "User69",
    "email": "user69@example.com",
    "phone_number": "08000000069",
    "date_joined": "2020-010-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "61213599-ade6-43f4-bc5e-afed1dcd83fc",
    "organisation": "Org1",
    "username": "User70",
    "email": "user70@example.com",
    "phone_number": "08000000070",
    "date_joined": "2020-011-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "a7f33fc1-1894-499d-a9a0-fb2bfe9c99ed",
    "organisation": "Org2",
    "username": "User71",
    "email": "user71@example.com",
    "phone_number": "08000000071",
    "date_joined": "2020-012-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "cfb2a615-db66-4c5e-8a84-24ec22b94bdb",
    "organisation": "Org3",
    "username": "User72",
    "email": "user72@example.com",
    "phone_number": "08000000072",
    "date_joined": "2020-01-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "5ee4bec8-6d5c-43b2-851b-6a49e0a6b77f",
    "organisation": "Org4",
    "username": "User73",
    "email": "user73@example.com",
    "phone_number": "08000000073",
    "date_joined": "2020-02-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "4265ef44-828c-49c9-8d43-1a729c43c9e2",
    "organisation": "Org5",
    "username": "User74",
    "email": "user74@example.com",
    "phone_number": "08000000074",
    "date_joined": "2020-03-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "3494da44-4917-4f8b-b403-393a683f0329",
    "organisation": "Org1",
    "username": "User75",
    "email": "user75@example.com",
    "phone_number": "08000000075",
    "date_joined": "2020-04-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "09932c7c-3ff7-425e-a16e-f87e74ad938b",
    "organisation": "Org2",
    "username": "User76",
    "email": "user76@example.com",
    "phone_number": "08000000076",
    "date_joined": "2020-05-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "c94a60fb-ecf9-41bd-9290-e390aeaa308b",
    "organisation": "Org3",
    "username": "User77",
    "email": "user77@example.com",
    "phone_number": "08000000077",
    "date_joined": "2020-06-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "1abde0da-b365-408b-8b60-c8a677662d75",
    "organisation": "Org4",
    "username": "User78",
    "email": "user78@example.com",
    "phone_number": "08000000078",
    "date_joined": "2020-07-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "db14cea9-7c2f-414a-a3b4-119072179196",
    "organisation": "Org5",
    "username": "User79",
    "email": "user79@example.com",
    "phone_number": "08000000079",
    "date_joined": "2020-08-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "2908e03b-d03f-48c6-a3c3-bdb44ea776c6",
    "organisation": "Org1",
    "username": "User80",
    "email": "user80@example.com",
    "phone_number": "08000000080",
    "date_joined": "2020-09-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "bc2311f9-06bf-47c5-8f70-463a5e9862bf",
    "organisation": "Org2",
    "username": "User81",
    "email": "user81@example.com",
    "phone_number": "08000000081",
    "date_joined": "2020-010-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "3bf06a4f-3a24-41fa-9ea3-7c920ecfc385",
    "organisation": "Org3",
    "username": "User82",
    "email": "user82@example.com",
    "phone_number": "08000000082",
    "date_joined": "2020-011-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "3a9a1f41-b7ad-450b-aa96-f998a344698b",
    "organisation": "Org4",
    "username": "User83",
    "email": "user83@example.com",
    "phone_number": "08000000083",
    "date_joined": "2020-012-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "5c23b551-6669-4486-9682-76388339374d",
    "organisation": "Org5",
    "username": "User84",
    "email": "user84@example.com",
    "phone_number": "08000000084",
    "date_joined": "2020-01-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "680b33c9-5e93-4a68-b0ec-9492b9ab7c1f",
    "organisation": "Org1",
    "username": "User85",
    "email": "user85@example.com",
    "phone_number": "08000000085",
    "date_joined": "2020-02-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "541d8c19-e9ce-40a5-a0cc-2bc0960a24f1",
    "organisation": "Org2",
    "username": "User86",
    "email": "user86@example.com",
    "phone_number": "08000000086",
    "date_joined": "2020-03-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "d935f91a-e3bf-4e11-a927-2d0a9246f1ce",
    "organisation": "Org3",
    "username": "User87",
    "email": "user87@example.com",
    "phone_number": "08000000087",
    "date_joined": "2020-04-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "def9c377-503b-4461-b0cf-27162ed09590",
    "organisation": "Org4",
    "username": "User88",
    "email": "user88@example.com",
    "phone_number": "08000000088",
    "date_joined": "2020-05-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "fcd2a6e0-abda-4949-a772-7e850c488389",
    "organisation": "Org5",
    "username": "User89",
    "email": "user89@example.com",
    "phone_number": "08000000089",
    "date_joined": "2020-06-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "34092f17-ab82-441a-bd69-f4f66251eb4f",
    "organisation": "Org1",
    "username": "User90",
    "email": "user90@example.com",
    "phone_number": "08000000090",
    "date_joined": "2020-07-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "b05128f4-c8ac-4837-9dc3-45acb29921b2",
    "organisation": "Org2",
    "username": "User91",
    "email": "user91@example.com",
    "phone_number": "08000000091",
    "date_joined": "2020-08-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "d7be5dd1-4e3b-4db9-a6c2-f1649a4e4e0b",
    "organisation": "Org3",
    "username": "User92",
    "email": "user92@example.com",
    "phone_number": "08000000092",
    "date_joined": "2020-09-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "db50a7c0-6c3f-451d-869c-06c852ee13e6",
    "organisation": "Org4",
    "username": "User93",
    "email": "user93@example.com",
    "phone_number": "08000000093",
    "date_joined": "2020-010-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "6544c32b-2a9b-4f4a-8781-95b9f02b0116",
    "organisation": "Org5",
    "username": "User94",
    "email": "user94@example.com",
    "phone_number": "08000000094",
    "date_joined": "2020-011-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "ad927d12-f333-4ede-8d58-60ba861bd052",
    "organisation": "Org1",
    "username": "User95",
    "email": "user95@example.com",
    "phone_number": "08000000095",
    "date_joined": "2020-012-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "8fd2e118-a1d7-409d-99fb-bc99c0b22233",
    "organisation": "Org2",
    "username": "User96",
    "email": "user96@example.com",
    "phone_number": "08000000096",
    "date_joined": "2020-01-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "7aec4ea2-833f-4e6f-8662-0f0b5c4faa1a",
    "organisation": "Org3",
    "username": "User97",
    "email": "user97@example.com",
    "phone_number": "08000000097",
    "date_joined": "2020-02-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "2451d358-0be5-4e16-8d78-3c609e84dfce",
    "organisation": "Org4",
    "username": "User98",
    "email": "user98@example.com",
    "phone_number": "08000000098",
    "date_joined": "2020-03-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "3b664a7e-fa04-4004-8f6b-12f00854cbf4",
    "organisation": "Org5",
    "username": "User99",
    "email": "user99@example.com",
    "phone_number": "08000000099",
    "date_joined": "2020-04-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "46bcacd8-6df0-40ff-9ee8-2cb2a8b06997",
    "organisation": "Org1",
    "username": "User100",
    "email": "user100@example.com",
    "phone_number": "08000000100",
    "date_joined": "2020-05-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "bbd7495c-d953-49ac-9863-27660098ea31",
    "organisation": "Org2",
    "username": "User101",
    "email": "user101@example.com",
    "phone_number": "08000000101",
    "date_joined": "2020-06-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "79c1835a-d857-469e-a481-d5d23e247ac7",
    "organisation": "Org3",
    "username": "User102",
    "email": "user102@example.com",
    "phone_number": "08000000102",
    "date_joined": "2020-07-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "d53d8716-1442-461c-96b6-1ffb5d10787e",
    "organisation": "Org4",
    "username": "User103",
    "email": "user103@example.com",
    "phone_number": "08000000103",
    "date_joined": "2020-08-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "edf6d461-f610-4fbf-938f-8e6ba8145fce",
    "organisation": "Org5",
    "username": "User104",
    "email": "user104@example.com",
    "phone_number": "08000000104",
    "date_joined": "2020-09-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "c79a92e8-b751-456b-a58c-3589dc203486",
    "organisation": "Org1",
    "username": "User105",
    "email": "user105@example.com",
    "phone_number": "08000000105",
    "date_joined": "2020-010-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "1b82dcb3-dde1-4b29-a8f5-fe2a8a2a0d09",
    "organisation": "Org2",
    "username": "User106",
    "email": "user106@example.com",
    "phone_number": "08000000106",
    "date_joined": "2020-011-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "d7a39241-3779-4451-872a-6febceaa1d1c",
    "organisation": "Org3",
    "username": "User107",
    "email": "user107@example.com",
    "phone_number": "08000000107",
    "date_joined": "2020-012-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "1386ff56-bc42-44ec-9905-2c2872136408",
    "organisation": "Org4",
    "username": "User108",
    "email": "user108@example.com",
    "phone_number": "08000000108",
    "date_joined": "2020-01-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "6ac108e5-e9a2-49a6-adca-550d9fd0c668",
    "organisation": "Org5",
    "username": "User109",
    "email": "user109@example.com",
    "phone_number": "08000000109",
    "date_joined": "2020-02-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "68f95caf-0ce6-4a8e-b9a3-76cf27b6a60e",
    "organisation": "Org1",
    "username": "User110",
    "email": "user110@example.com",
    "phone_number": "08000000110",
    "date_joined": "2020-03-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "b5064a5e-9fbb-4098-ae34-cbbca259ad2c",
    "organisation": "Org2",
    "username": "User111",
    "email": "user111@example.com",
    "phone_number": "08000000111",
    "date_joined": "2020-04-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "6a2fd7f9-f881-419e-90ba-90fd879a4df4",
    "organisation": "Org3",
    "username": "User112",
    "email": "user112@example.com",
    "phone_number": "08000000112",
    "date_joined": "2020-05-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "cac86081-a886-4e2b-9351-6d364e65fe61",
    "organisation": "Org4",
    "username": "User113",
    "email": "user113@example.com",
    "phone_number": "08000000113",
    "date_joined": "2020-06-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "99702c99-f6d3-423f-bb39-f0efc3ad7381",
    "organisation": "Org5",
    "username": "User114",
    "email": "user114@example.com",
    "phone_number": "08000000114",
    "date_joined": "2020-07-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "5879cd0f-3e67-46c4-a2c7-c94d87d87f81",
    "organisation": "Org1",
    "username": "User115",
    "email": "user115@example.com",
    "phone_number": "08000000115",
    "date_joined": "2020-08-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "043cc113-f7ca-4899-9aa1-65afb552132b",
    "organisation": "Org2",
    "username": "User116",
    "email": "user116@example.com",
    "phone_number": "08000000116",
    "date_joined": "2020-09-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "48d25491-d924-45c2-8a5b-db41e82e72e4",
    "organisation": "Org3",
    "username": "User117",
    "email": "user117@example.com",
    "phone_number": "08000000117",
    "date_joined": "2020-010-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "934425e0-c165-44a5-a30b-523ebbaa4f47",
    "organisation": "Org4",
    "username": "User118",
    "email": "user118@example.com",
    "phone_number": "08000000118",
    "date_joined": "2020-011-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "527e6d82-c6fa-47ce-86ba-c1e65c9d6d24",
    "organisation": "Org5",
    "username": "User119",
    "email": "user119@example.com",
    "phone_number": "08000000119",
    "date_joined": "2020-012-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "f316d090-ff8c-41e4-9728-193f916df54e",
    "organisation": "Org1",
    "username": "User120",
    "email": "user120@example.com",
    "phone_number": "08000000120",
    "date_joined": "2020-01-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "cb59154f-139b-499d-9056-c710cc475b24",
    "organisation": "Org2",
    "username": "User121",
    "email": "user121@example.com",
    "phone_number": "08000000121",
    "date_joined": "2020-02-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "70e77b52-4528-40dd-8691-682de0965d4d",
    "organisation": "Org3",
    "username": "User122",
    "email": "user122@example.com",
    "phone_number": "08000000122",
    "date_joined": "2020-03-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "d70840ce-4720-4081-bfdc-e872c539ac9c",
    "organisation": "Org4",
    "username": "User123",
    "email": "user123@example.com",
    "phone_number": "08000000123",
    "date_joined": "2020-04-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "bb00506e-e848-4b30-a542-202ee425fc3c",
    "organisation": "Org5",
    "username": "User124",
    "email": "user124@example.com",
    "phone_number": "08000000124",
    "date_joined": "2020-05-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "f9280d28-76b5-4af9-8d00-681a5d3c00b8",
    "organisation": "Org1",
    "username": "User125",
    "email": "user125@example.com",
    "phone_number": "08000000125",
    "date_joined": "2020-06-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "a33a8897-62d9-4f6c-ac56-79e9149eedec",
    "organisation": "Org2",
    "username": "User126",
    "email": "user126@example.com",
    "phone_number": "08000000126",
    "date_joined": "2020-07-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "c666b471-2ae0-4260-8817-c539d56741bf",
    "organisation": "Org3",
    "username": "User127",
    "email": "user127@example.com",
    "phone_number": "08000000127",
    "date_joined": "2020-08-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "7e624648-622c-460b-b5b3-aa49135741fe",
    "organisation": "Org4",
    "username": "User128",
    "email": "user128@example.com",
    "phone_number": "08000000128",
    "date_joined": "2020-09-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "70cdc193-e4e8-472b-8ec6-44bee5bc791e",
    "organisation": "Org5",
    "username": "User129",
    "email": "user129@example.com",
    "phone_number": "08000000129",
    "date_joined": "2020-010-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "f8e7914c-98fc-49f8-9642-6db28e2c4f62",
    "organisation": "Org1",
    "username": "User130",
    "email": "user130@example.com",
    "phone_number": "08000000130",
    "date_joined": "2020-011-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "24c08f73-d1d6-4ef3-9d27-b537b4ad8349",
    "organisation": "Org2",
    "username": "User131",
    "email": "user131@example.com",
    "phone_number": "08000000131",
    "date_joined": "2020-012-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "399b9fc1-9ed8-4f80-bb96-4d837e88a531",
    "organisation": "Org3",
    "username": "User132",
    "email": "user132@example.com",
    "phone_number": "08000000132",
    "date_joined": "2020-01-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "45fcbb5d-1228-4f47-ab45-c1895214b4d9",
    "organisation": "Org4",
    "username": "User133",
    "email": "user133@example.com",
    "phone_number": "08000000133",
    "date_joined": "2020-02-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "c33c1062-b47e-47be-8ec3-7f42baa0dd7e",
    "organisation": "Org5",
    "username": "User134",
    "email": "user134@example.com",
    "phone_number": "08000000134",
    "date_joined": "2020-03-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "92d2b23d-104e-47fb-accc-1138f8176865",
    "organisation": "Org1",
    "username": "User135",
    "email": "user135@example.com",
    "phone_number": "08000000135",
    "date_joined": "2020-04-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "134b689b-ab73-4280-895b-1ccfda4d593f",
    "organisation": "Org2",
    "username": "User136",
    "email": "user136@example.com",
    "phone_number": "08000000136",
    "date_joined": "2020-05-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "2b8fea8f-dd00-48f5-a25e-a68017f8cdf6",
    "organisation": "Org3",
    "username": "User137",
    "email": "user137@example.com",
    "phone_number": "08000000137",
    "date_joined": "2020-06-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "d688d60d-013e-407d-8499-81f5a66f480f",
    "organisation": "Org4",
    "username": "User138",
    "email": "user138@example.com",
    "phone_number": "08000000138",
    "date_joined": "2020-07-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "f5526cc6-0bd4-452a-867b-3c2711c1d706",
    "organisation": "Org5",
    "username": "User139",
    "email": "user139@example.com",
    "phone_number": "08000000139",
    "date_joined": "2020-08-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "9eb37747-2c24-4107-8e16-30276113df3e",
    "organisation": "Org1",
    "username": "User140",
    "email": "user140@example.com",
    "phone_number": "08000000140",
    "date_joined": "2020-09-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "3565982c-ac51-4520-a621-2ed6fdf20897",
    "organisation": "Org2",
    "username": "User141",
    "email": "user141@example.com",
    "phone_number": "08000000141",
    "date_joined": "2020-010-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "311fe284-6a7f-4ad2-8e38-ed810fcb5044",
    "organisation": "Org3",
    "username": "User142",
    "email": "user142@example.com",
    "phone_number": "08000000142",
    "date_joined": "2020-011-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "7968c7ef-dbfc-4008-859a-83496451087c",
    "organisation": "Org4",
    "username": "User143",
    "email": "user143@example.com",
    "phone_number": "08000000143",
    "date_joined": "2020-012-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "d43a7bef-e1a3-469b-bd51-7e901e2319b4",
    "organisation": "Org5",
    "username": "User144",
    "email": "user144@example.com",
    "phone_number": "08000000144",
    "date_joined": "2020-01-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "eca5f292-f129-4663-b71c-d444c5c137fb",
    "organisation": "Org1",
    "username": "User145",
    "email": "user145@example.com",
    "phone_number": "08000000145",
    "date_joined": "2020-02-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "14c27ef6-d14e-4324-a552-77cfd6669081",
    "organisation": "Org2",
    "username": "User146",
    "email": "user146@example.com",
    "phone_number": "08000000146",
    "date_joined": "2020-03-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "e1ef515d-1832-46f9-b932-cb634ed72f18",
    "organisation": "Org3",
    "username": "User147",
    "email": "user147@example.com",
    "phone_number": "08000000147",
    "date_joined": "2020-04-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "6a0764df-f49e-46f5-87f2-a01758ec69de",
    "organisation": "Org4",
    "username": "User148",
    "email": "user148@example.com",
    "phone_number": "08000000148",
    "date_joined": "2020-05-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "f94f41c3-035b-4d12-acd8-ccd9f7b78102",
    "organisation": "Org5",
    "username": "User149",
    "email": "user149@example.com",
    "phone_number": "08000000149",
    "date_joined": "2020-06-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "f3c8db3d-0980-48ff-bcfb-44eab8e27447",
    "organisation": "Org1",
    "username": "User150",
    "email": "user150@example.com",
    "phone_number": "08000000150",
    "date_joined": "2020-07-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "8162bff9-14fc-48bd-8163-ecf53bf5713f",
    "organisation": "Org2",
    "username": "User151",
    "email": "user151@example.com",
    "phone_number": "08000000151",
    "date_joined": "2020-08-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "ac4b9f33-1252-4f13-aec8-0f3d7e61ef6e",
    "organisation": "Org3",
    "username": "User152",
    "email": "user152@example.com",
    "phone_number": "08000000152",
    "date_joined": "2020-09-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "9dc5be01-b2dc-4b2c-8b74-8c449627f778",
    "organisation": "Org4",
    "username": "User153",
    "email": "user153@example.com",
    "phone_number": "08000000153",
    "date_joined": "2020-010-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "0ccccf23-feda-4919-9f7a-1eaff1994953",
    "organisation": "Org5",
    "username": "User154",
    "email": "user154@example.com",
    "phone_number": "08000000154",
    "date_joined": "2020-011-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "032e5840-4f19-4c25-a2fa-f05d8c8b235a",
    "organisation": "Org1",
    "username": "User155",
    "email": "user155@example.com",
    "phone_number": "08000000155",
    "date_joined": "2020-012-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "b9362477-806c-4af5-8d0c-09b9e8405650",
    "organisation": "Org2",
    "username": "User156",
    "email": "user156@example.com",
    "phone_number": "08000000156",
    "date_joined": "2020-01-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "ad1eb8eb-2269-43d4-9f1d-6dcbf6ca45f0",
    "organisation": "Org3",
    "username": "User157",
    "email": "user157@example.com",
    "phone_number": "08000000157",
    "date_joined": "2020-02-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "aacb19d9-4a16-4b15-9a58-59faa7f80603",
    "organisation": "Org4",
    "username": "User158",
    "email": "user158@example.com",
    "phone_number": "08000000158",
    "date_joined": "2020-03-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "1cc8e0f4-9b4e-4d55-a909-7d53af275f58",
    "organisation": "Org5",
    "username": "User159",
    "email": "user159@example.com",
    "phone_number": "08000000159",
    "date_joined": "2020-04-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "24a622af-0116-440d-937d-80c312b38be0",
    "organisation": "Org1",
    "username": "User160",
    "email": "user160@example.com",
    "phone_number": "08000000160",
    "date_joined": "2020-05-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "8b017c22-e7b0-4f92-8854-3bd862849b34",
    "organisation": "Org2",
    "username": "User161",
    "email": "user161@example.com",
    "phone_number": "08000000161",
    "date_joined": "2020-06-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "99b1c730-4d41-47b6-80c6-d198c5d719aa",
    "organisation": "Org3",
    "username": "User162",
    "email": "user162@example.com",
    "phone_number": "08000000162",
    "date_joined": "2020-07-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "ba75b2c5-5e58-46cc-80ba-42f5600282f8",
    "organisation": "Org4",
    "username": "User163",
    "email": "user163@example.com",
    "phone_number": "08000000163",
    "date_joined": "2020-08-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "f063be71-3b60-4653-8074-d6e98cbe3b4a",
    "organisation": "Org5",
    "username": "User164",
    "email": "user164@example.com",
    "phone_number": "08000000164",
    "date_joined": "2020-09-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "09c8bb1c-582a-42e5-84f5-7ac28ae0a8c2",
    "organisation": "Org1",
    "username": "User165",
    "email": "user165@example.com",
    "phone_number": "08000000165",
    "date_joined": "2020-010-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "44afe7a4-e0ae-42a3-8e31-3c0c60e2ea09",
    "organisation": "Org2",
    "username": "User166",
    "email": "user166@example.com",
    "phone_number": "08000000166",
    "date_joined": "2020-011-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "a9b07a5c-f53f-4839-a5bd-e459c355ca52",
    "organisation": "Org3",
    "username": "User167",
    "email": "user167@example.com",
    "phone_number": "08000000167",
    "date_joined": "2020-012-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "b3dced2a-2413-4699-8f37-c34f7c6c74b9",
    "organisation": "Org4",
    "username": "User168",
    "email": "user168@example.com",
    "phone_number": "08000000168",
    "date_joined": "2020-01-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "f998aa8b-37e7-4044-ac39-b06fa58b7e48",
    "organisation": "Org5",
    "username": "User169",
    "email": "user169@example.com",
    "phone_number": "08000000169",
    "date_joined": "2020-02-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "19e79bb5-a434-4a8f-919d-a555bc718453",
    "organisation": "Org1",
    "username": "User170",
    "email": "user170@example.com",
    "phone_number": "08000000170",
    "date_joined": "2020-03-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "1a968b9d-9fa8-46ef-8950-eee1feee6006",
    "organisation": "Org2",
    "username": "User171",
    "email": "user171@example.com",
    "phone_number": "08000000171",
    "date_joined": "2020-04-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "7aa34589-ac4a-4e35-975d-fc518bef1378",
    "organisation": "Org3",
    "username": "User172",
    "email": "user172@example.com",
    "phone_number": "08000000172",
    "date_joined": "2020-05-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "c50564d8-b2e2-4006-9d89-55444b6c5674",
    "organisation": "Org4",
    "username": "User173",
    "email": "user173@example.com",
    "phone_number": "08000000173",
    "date_joined": "2020-06-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "0cd65561-df09-44c7-8efe-70b8f430d109",
    "organisation": "Org5",
    "username": "User174",
    "email": "user174@example.com",
    "phone_number": "08000000174",
    "date_joined": "2020-07-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "fd0d47df-f84a-4181-98dd-3d91dc593cde",
    "organisation": "Org1",
    "username": "User175",
    "email": "user175@example.com",
    "phone_number": "08000000175",
    "date_joined": "2020-08-15 10:00 AM",
    "status": "Blacklisted"
  },
  {
    "id": "8c89eaea-9f29-4e30-b919-ce11b98177db",
    "organisation": "Org2",
    "username": "User176",
    "email": "user176@example.com",
    "phone_number": "08000000176",
    "date_joined": "2020-09-15 10:00 AM",
    "status": "Inactive"
  },
  {
    "id": "133a9b0b-e3b8-4330-a040-9faa8ee59b38",
    "organisation": "Org3",
    "username": "User177",
    "email": "user177@example.com",
    "phone_number": "08000000177",
    "date_joined": "2020-010-15 10:00 AM",
    "status": "Pending"
  },
  {
    "id": "339a37f3-605b-40be-a67b-ddb165cdf026",
    "organisation": "Org4",
    "username": "User178",
    "email": "user178@example.com",
    "phone_number": "08000000178",
    "date_joined": "2020-011-15 10:00 AM",
    "status": "Active"
  },
  {
    "id": "682f57c0-020e-4797-a63c-7e744cde6f42",
    "organisation": "Org5",
    "username": "User179",
    "email": "user179@example.com",
    "phone_number": "08000000179",
    "date_joined": "2020-012-15 10:00 AM",
    "status": "Blacklisted"
  }
]
const customersPerPage = 9
let endingIndex = parseInt(currentPage) * customersPerPage
let startingIndex = endingIndex - customersPerPage
let displayedCustomers = staticCustomerData.slice(startingIndex, endingIndex);

const pages = staticCustomerData.length / customersPerPage

const activeUsers   = staticCustomerData.filter((userData)=>{
    return userData.status === "Active"
})

const staticLoans= Array(12453).fill(null);
const staticSavings= Array(102453).fill(null)

const infoCardArray = [{name: 'users', length: staticCustomerData.length,icon: UsersIcon}, {name: 'active users', length : activeUsers.length, icon: ActiveUsersIcon},{name: "users with loans", length: staticLoans.length, icon: CoinSheet}, {name: "users with savings", length: staticSavings.length, icon: CoinIcon}]

const infoCards   = infoCardArray.map((info)=>{
  return  <InfoCard name = {info.name} value={info.length} icon={info.icon}/>
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
        <DashboardTable customers={displayedCustomers}/>
      </div>
      <BottomNavigation currentPage={currentPage} onPageClick={handlePageChange} pagesLength={pages}/>
      

    </div>
    
  )
}

export default Users