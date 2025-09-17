import React from 'react'
import Orgfilter from '../components/molecules/Orgfilter'
import InfoCard from '../components/molecules/InfoCard'
import DashboardTable from '../components/organisms/DashboardTable'
import { UsersIcon , ActiveUsersIcon,CoinIcon, CoinSheet} from '../assets/icons' 
import { length } from 'zod'
import styles from './usersPage.module.scss'

type Props = {}

const Users = (props: Props) => {

  const staticUserData  = [
  {
    "organisation": "Lendsqr",
    "username": "Adedeji",
    "email": "adedeji@lendsqr.com",
    "phone_number": "08078903721",
    "date_joined": "May 15, 2020 10:00 AM",
    "status": "inactive"
  },
  {
    "organisation": "Irorun",
    "username": "Debby Ojana",
    "email": "debby2@irorun.com",
    "phone_number": "08160780928",
    "date_joined": "Apr 30, 2020 10:00 AM",
    "status": "pending"
  },
  {
    "organisation": "Lendsqr",
    "username": "Grace Effiom",
    "email": "grace@lendsqr.com",
    "phone_number": "07060780922",
    "date_joined": "Apr 30, 2020 10:00 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Tosin Dokunmu",
    "email": "tosin@lendsqr.com",
    "phone_number": "07033039226",
    "date_joined": "Apr 30, 2020 10:00 AM",
    "status": "pending"
  },
  {
    "organisation": "Lendsqr",
    "username": "Grace Effiom",
    "email": "grace@lendsqr.com",
    "phone_number": "07060780922",
    "date_joined": "Apr 30, 2020 10:00 AM",
    "status": "active"
  },
  {
    "organisation": "Lendsqr",
    "username": "Tosin Dokunmu",
    "email": "tosin@lendsqr.com",
    "phone_number": "08160780900",
    "date_joined": "Apr 30, 2020 10:00 AM",
    "status": "active"
  },
  {
    "organisation": "Lendsqr",
    "username": "Grace Effiom",
    "email": "grace@lendsqr.com",
    "phone_number": "07060780922",
    "date_joined": "Apr 30, 2020 10:00 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Tosin Dokunmu",
    "email": "tosin@lendsqr.com",
    "phone_number": "08160780910",
    "date_joined": "Apr 30, 2020 10:00 AM",
    "status": "inactive"
  },
  {
    "organisation": "Lendsqr",
    "username": "Grace Effiom",
    "email": "grace@lendsqr.com",
    "phone_number": "07060780922",
    "date_joined": "Apr 30, 2020 10:00 AM",
    "status": "inactive"
  },

  {
    "organisation": "Lendsqr",
    "username": "Kristie Bean",
    "email": "kristiebean@digiprint.com",
    "phone_number": 8197200040,
    "date_joined": "May 21, 2019 04:21 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Larson Coleman",
    "email": "larsoncoleman@digiprint.com",
    "phone_number": 7860019467,
    "date_joined": "Mar 04, 2024 06:58 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Lucas Rosario",
    "email": "lucasrosario@digiprint.com",
    "phone_number": 7036664522,
    "date_joined": "Feb 11, 2023 01:08 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Rene Ballard",
    "email": "reneballard@digiprint.com",
    "phone_number": 8401829277,
    "date_joined": "Feb 21, 2019 02:14 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Martha Avila",
    "email": "marthaavila@digiprint.com",
    "phone_number": 7270828156,
    "date_joined": "Apr 28, 2024 12:00 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Porter Jenkins",
    "email": "porterjenkins@digiprint.com",
    "phone_number": 8973371260,
    "date_joined": "Dec 06, 2020 02:16 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Elizabeth Horton",
    "email": "elizabethhorton@digiprint.com",
    "phone_number": 8236234123,
    "date_joined": "Jan 02, 2022 01:06 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Hensley Bush",
    "email": "hensleybush@digiprint.com",
    "phone_number": 7424746147,
    "date_joined": "Feb 12, 2020 10:56 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Baxter Watts",
    "email": "baxterwatts@digiprint.com",
    "phone_number": 9033291680,
    "date_joined": "Sep 06, 2020 01:00 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Tracey Valenzuela",
    "email": "traceyvalenzuela@digiprint.com",
    "phone_number": 8878131260,
    "date_joined": "May 14, 2024 05:10 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Walter Myers",
    "email": "waltermyers@digiprint.com",
    "phone_number": 8794149932,
    "date_joined": "May 14, 2018 09:29 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Hoover Humphrey",
    "email": "hooverhumphrey@digiprint.com",
    "phone_number": 8409780639,
    "date_joined": "Oct 31, 2021 11:31 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Candace Shelton",
    "email": "candaceshelton@digiprint.com",
    "phone_number": 7716798259,
    "date_joined": "May 12, 2019 05:32 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Kim Alston",
    "email": "kimalston@digiprint.com",
    "phone_number": 8577647731,
    "date_joined": "Mar 26, 2022 09:50 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Esmeralda Sykes",
    "email": "esmeraldasykes@digiprint.com",
    "phone_number": 8709728888,
    "date_joined": "Feb 02, 2019 12:26 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Marquita Floyd",
    "email": "marquitafloyd@digiprint.com",
    "phone_number": 8929126269,
    "date_joined": "Jun 12, 2019 03:19 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Dolly Roman",
    "email": "dollyroman@digiprint.com",
    "phone_number": 7104610086,
    "date_joined": "Dec 02, 2020 06:38 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Christian Oconnor",
    "email": "christianoconnor@digiprint.com",
    "phone_number": 8244793250,
    "date_joined": "Jul 05, 2019 06:38 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Landry Rivers",
    "email": "landryrivers@digiprint.com",
    "phone_number": 8155393243,
    "date_joined": "Jan 29, 2019 12:45 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Ingram Diaz",
    "email": "ingramdiaz@digiprint.com",
    "phone_number": 8317573608,
    "date_joined": "Dec 25, 2021 12:52 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Lavonne Flores",
    "email": "lavonneflores@digiprint.com",
    "phone_number": 7479713880,
    "date_joined": "Sep 29, 2023 11:31 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Dianna Harding",
    "email": "diannaharding@digiprint.com",
    "phone_number": 8350818220,
    "date_joined": "Aug 17, 2018 08:56 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Matthews Bird",
    "email": "matthewsbird@digiprint.com",
    "phone_number": 8293354954,
    "date_joined": "Oct 30, 2019 11:16 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Wall Bauer",
    "email": "wallbauer@digiprint.com",
    "phone_number": 7762396234,
    "date_joined": "Sep 20, 2023 03:13 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Wilder Knowles",
    "email": "wilderknowles@digiprint.com",
    "phone_number": 7463326544,
    "date_joined": "Oct 02, 2018 02:31 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Kenya Roach",
    "email": "kenyaroach@digiprint.com",
    "phone_number": 8451500298,
    "date_joined": "May 01, 2019 08:20 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Short Cardenas",
    "email": "shortcardenas@digiprint.com",
    "phone_number": 8502043461,
    "date_joined": "Dec 03, 2022 12:38 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Dawn Bruce",
    "email": "dawnbruce@digiprint.com",
    "phone_number": 8433691147,
    "date_joined": "Mar 12, 2019 02:35 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Coffey Case",
    "email": "coffeycase@digiprint.com",
    "phone_number": 8377294806,
    "date_joined": "Mar 26, 2022 08:04 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Foster Bolton",
    "email": "fosterbolton@digiprint.com",
    "phone_number": 7337601496,
    "date_joined": "Mar 18, 2018 12:46 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Dolores Klein",
    "email": "doloresklein@digiprint.com",
    "phone_number": 7688372700,
    "date_joined": "Apr 18, 2018 06:49 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Alta Warner",
    "email": "altawarner@digiprint.com",
    "phone_number": 8175515713,
    "date_joined": "May 26, 2020 03:56 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Olivia Farrell",
    "email": "oliviafarrell@digiprint.com",
    "phone_number": 7597153084,
    "date_joined": "Sep 09, 2021 06:32 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Diane Bailey",
    "email": "dianebailey@digiprint.com",
    "phone_number": 7861732349,
    "date_joined": "Jul 10, 2024 12:57 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Joyce Lawson",
    "email": "joycelawson@digiprint.com",
    "phone_number": 7273458441,
    "date_joined": "Jun 05, 2023 04:56 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Elsie Dillard",
    "email": "elsiedillard@digiprint.com",
    "phone_number": 7090414679,
    "date_joined": "May 08, 2018 01:28 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Patterson Roberson",
    "email": "pattersonroberson@digiprint.com",
    "phone_number": 7423838100,
    "date_joined": "Apr 11, 2020 10:18 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Fletcher Steele",
    "email": "fletchersteele@digiprint.com",
    "phone_number": 8974930892,
    "date_joined": "Aug 31, 2022 08:26 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Rowe Larson",
    "email": "rowelarson@digiprint.com",
    "phone_number": 7509240549,
    "date_joined": "Dec 02, 2023 03:14 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Joyce Donovan",
    "email": "joycedonovan@digiprint.com",
    "phone_number": 8190580326,
    "date_joined": "Sep 11, 2019 08:13 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Adela Cunningham",
    "email": "adelacunningham@digiprint.com",
    "phone_number": 7723458989,
    "date_joined": "Jul 07, 2024 07:28 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Deanna Hess",
    "email": "deannahess@digiprint.com",
    "phone_number": 7334758451,
    "date_joined": "Mar 10, 2022 03:26 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Beatrice Hicks",
    "email": "beatricehicks@digiprint.com",
    "phone_number": 8489230518,
    "date_joined": "Jun 03, 2024 07:43 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Louise Zamora",
    "email": "louisezamora@digiprint.com",
    "phone_number": 7552464558,
    "date_joined": "Apr 05, 2019 01:13 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Mccarthy Greene",
    "email": "mccarthygreene@digiprint.com",
    "phone_number": 7718584382,
    "date_joined": "Jul 30, 2019 06:06 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Keith Vinson",
    "email": "keithvinson@digiprint.com",
    "phone_number": 7278969047,
    "date_joined": "Aug 21, 2020 09:52 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Jacqueline Hopkins",
    "email": "jacquelinehopkins@digiprint.com",
    "phone_number": 7627840870,
    "date_joined": "Feb 03, 2019 12:56 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Wilson Manning",
    "email": "wilsonmanning@digiprint.com",
    "phone_number": 7673546194,
    "date_joined": "Dec 06, 2018 12:32 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Hopper Cash",
    "email": "hoppercash@digiprint.com",
    "phone_number": 7079914392,
    "date_joined": "Jan 28, 2018 08:25 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Mcneil Macias",
    "email": "mcneilmacias@digiprint.com",
    "phone_number": 7272608849,
    "date_joined": "Apr 20, 2018 04:59 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Leach Gonzales",
    "email": "leachgonzales@digiprint.com",
    "phone_number": 7563779765,
    "date_joined": "Aug 06, 2018 09:46 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Martin Brady",
    "email": "martinbrady@digiprint.com",
    "phone_number": 8600427809,
    "date_joined": "Oct 23, 2022 05:41 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Noel Bishop",
    "email": "noelbishop@digiprint.com",
    "phone_number": 8193440262,
    "date_joined": "Jul 09, 2023 04:04 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Wendi Vasquez",
    "email": "wendivasquez@digiprint.com",
    "phone_number": 7017869943,
    "date_joined": "Feb 11, 2019 08:42 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Armstrong Sweet",
    "email": "armstrongsweet@digiprint.com",
    "phone_number": 7336949284,
    "date_joined": "Mar 23, 2019 12:31 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Snider Pitts",
    "email": "sniderpitts@digiprint.com",
    "phone_number": 7150805666,
    "date_joined": "Feb 06, 2021 01:25 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Cecilia Noble",
    "email": "cecilianoble@digiprint.com",
    "phone_number": 7775545784,
    "date_joined": "Jun 03, 2018 10:42 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Gonzalez Hardy",
    "email": "gonzalezhardy@digiprint.com",
    "phone_number": 7013136562,
    "date_joined": "Mar 20, 2024 06:05 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Shelby Richard",
    "email": "shelbyrichard@digiprint.com",
    "phone_number": 8355846189,
    "date_joined": "Aug 24, 2022 02:12 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Madeleine Oneil",
    "email": "madeleineoneil@digiprint.com",
    "phone_number": 8598972269,
    "date_joined": "Sep 06, 2020 05:53 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Reese King",
    "email": "reeseking@digiprint.com",
    "phone_number": 8261869194,
    "date_joined": "Jun 06, 2024 08:24 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Tracie Peterson",
    "email": "traciepeterson@digiprint.com",
    "phone_number": 8996129977,
    "date_joined": "Aug 28, 2023 10:12 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Jayne Cohen",
    "email": "jaynecohen@digiprint.com",
    "phone_number": 7410866814,
    "date_joined": "Jan 14, 2022 11:03 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Melissa Williams",
    "email": "melissawilliams@digiprint.com",
    "phone_number": 7457545699,
    "date_joined": "Mar 24, 2021 03:42 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Burgess Alvarado",
    "email": "burgessalvarado@digiprint.com",
    "phone_number": 8902118493,
    "date_joined": "Sep 13, 2019 12:55 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Twila Barron",
    "email": "twilabarron@digiprint.com",
    "phone_number": 7250877913,
    "date_joined": "Oct 27, 2024 05:28 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Nettie Ball",
    "email": "nettieball@digiprint.com",
    "phone_number": 8623931490,
    "date_joined": "Mar 13, 2022 12:40 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Mccray Everett",
    "email": "mccrayeverett@digiprint.com",
    "phone_number": 8764262538,
    "date_joined": "Dec 22, 2018 05:22 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Marianne Carver",
    "email": "mariannecarver@digiprint.com",
    "phone_number": 8172982467,
    "date_joined": "Nov 27, 2024 12:29 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Potter Clemons",
    "email": "potterclemons@digiprint.com",
    "phone_number": 7712297063,
    "date_joined": "Jan 07, 2023 03:24 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Brenda Gay",
    "email": "brendagay@digiprint.com",
    "phone_number": 8176442682,
    "date_joined": "Apr 06, 2019 05:25 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Nguyen Bray",
    "email": "nguyenbray@digiprint.com",
    "phone_number": 8943892451,
    "date_joined": "Nov 09, 2024 04:01 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Yesenia Neal",
    "email": "yesenianeal@digiprint.com",
    "phone_number": 7805055602,
    "date_joined": "Dec 18, 2024 04:54 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Gutierrez Hester",
    "email": "gutierrezhester@digiprint.com",
    "phone_number": 7631111492,
    "date_joined": "Oct 03, 2024 12:41 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Lorene Townsend",
    "email": "lorenetownsend@digiprint.com",
    "phone_number": 7919393171,
    "date_joined": "Jan 11, 2018 07:16 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Greene Merritt",
    "email": "greenemerritt@digiprint.com",
    "phone_number": 8533873528,
    "date_joined": "Jun 25, 2021 02:08 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Madden Morrison",
    "email": "maddenmorrison@digiprint.com",
    "phone_number": 8059798823,
    "date_joined": "May 23, 2023 11:01 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Annette Mccoy",
    "email": "annettemccoy@digiprint.com",
    "phone_number": 8655761429,
    "date_joined": "Feb 08, 2020 07:44 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Salas Sosa",
    "email": "salassosa@digiprint.com",
    "phone_number": 7523795623,
    "date_joined": "Jan 23, 2023 03:56 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Rose Farmer",
    "email": "rosefarmer@digiprint.com",
    "phone_number": 7608864901,
    "date_joined": "Jun 16, 2024 03:20 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Sasha Daniel",
    "email": "sashadaniel@digiprint.com",
    "phone_number": 7447507790,
    "date_joined": "Mar 08, 2022 07:00 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Harris Reid",
    "email": "harrisreid@digiprint.com",
    "phone_number": 8420549627,
    "date_joined": "Oct 21, 2018 09:23 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Rena Mcgee",
    "email": "renamcgee@digiprint.com",
    "phone_number": 7936716269,
    "date_joined": "Dec 22, 2023 02:56 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Witt Casey",
    "email": "wittcasey@digiprint.com",
    "phone_number": 9076709563,
    "date_joined": "Apr 28, 2019 09:04 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Lesa Lawrence",
    "email": "lesalawrence@digiprint.com",
    "phone_number": 8099228433,
    "date_joined": "Jun 25, 2019 03:01 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Martinez Cooke",
    "email": "martinezcooke@digiprint.com",
    "phone_number": 7680803590,
    "date_joined": "Jun 09, 2019 11:11 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Mercado Shaw",
    "email": "mercadoshaw@digiprint.com",
    "phone_number": 8986136472,
    "date_joined": "Mar 02, 2021 12:50 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Gabrielle Nguyen",
    "email": "gabriellenguyen@digiprint.com",
    "phone_number": 8010165318,
    "date_joined": "Oct 27, 2019 09:53 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Isabelle Huber",
    "email": "isabellehuber@digiprint.com",
    "phone_number": 8667397694,
    "date_joined": "Apr 07, 2024 11:06 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Bryan Rhodes",
    "email": "bryanrhodes@digiprint.com",
    "phone_number": 8166656715,
    "date_joined": "Nov 06, 2022 04:07 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Joanna Mason",
    "email": "joannamason@digiprint.com",
    "phone_number": 8629616136,
    "date_joined": "Apr 10, 2023 09:58 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Janie Thompson",
    "email": "janiethompson@digiprint.com",
    "phone_number": 7712932608,
    "date_joined": "Jul 31, 2021 07:22 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Giles Robinson",
    "email": "gilesrobinson@digiprint.com",
    "phone_number": 8418792467,
    "date_joined": "Sep 18, 2018 11:09 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Berg Kirkland",
    "email": "bergkirkland@digiprint.com",
    "phone_number": 8586511613,
    "date_joined": "Jul 19, 2024 03:22 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Freida Small",
    "email": "freidasmall@digiprint.com",
    "phone_number": 7832802731,
    "date_joined": "Feb 12, 2024 12:59 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Bridges Bryan",
    "email": "bridgesbryan@digiprint.com",
    "phone_number": 7536028688,
    "date_joined": "Jan 02, 2020 02:16 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Jarvis Hardin",
    "email": "jarvishardin@digiprint.com",
    "phone_number": 7169308419,
    "date_joined": "Sep 15, 2022 08:18 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Elsa Brown",
    "email": "elsabrown@digiprint.com",
    "phone_number": 7710604682,
    "date_joined": "Dec 18, 2022 12:51 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Graham Kinney",
    "email": "grahamkinney@digiprint.com",
    "phone_number": 7185500590,
    "date_joined": "Dec 06, 2018 05:06 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Latoya Clayton",
    "email": "latoyaclayton@digiprint.com",
    "phone_number": 8469433254,
    "date_joined": "Mar 15, 2019 09:17 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Carey Rose",
    "email": "careyrose@digiprint.com",
    "phone_number": 8463419818,
    "date_joined": "Dec 14, 2021 11:19 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Leonor Weiss",
    "email": "leonorweiss@digiprint.com",
    "phone_number": 8774023623,
    "date_joined": "Jan 06, 2020 07:47 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Cindy Douglas",
    "email": "cindydouglas@digiprint.com",
    "phone_number": 7327518099,
    "date_joined": "Jan 06, 2020 04:32 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Duke Mccormick",
    "email": "dukemccormick@digiprint.com",
    "phone_number": 7957051448,
    "date_joined": "Sep 05, 2019 08:15 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Phelps Grant",
    "email": "phelpsgrant@digiprint.com",
    "phone_number": 9046694129,
    "date_joined": "Jun 03, 2022 01:56 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Arline York",
    "email": "arlineyork@digiprint.com",
    "phone_number": 8136791111,
    "date_joined": "Mar 18, 2024 08:20 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Schmidt Harper",
    "email": "schmidtharper@digiprint.com",
    "phone_number": 8699985788,
    "date_joined": "Sep 23, 2023 01:08 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Gilliam Christensen",
    "email": "gilliamchristensen@digiprint.com",
    "phone_number": 7309859432,
    "date_joined": "Oct 14, 2024 08:49 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Melinda Prince",
    "email": "melindaprince@digiprint.com",
    "phone_number": 9093899487,
    "date_joined": "Nov 05, 2024 12:17 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Daisy Nieves",
    "email": "daisynieves@digiprint.com",
    "phone_number": 8774733434,
    "date_joined": "Aug 27, 2021 10:39 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Nixon Jackson",
    "email": "nixonjackson@digiprint.com",
    "phone_number": 7808763290,
    "date_joined": "Jun 05, 2023 09:16 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Freda England",
    "email": "fredaengland@digiprint.com",
    "phone_number": 7724676051,
    "date_joined": "Aug 28, 2018 10:40 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Amalia Banks",
    "email": "amaliabanks@digiprint.com",
    "phone_number": 8818939927,
    "date_joined": "Jul 18, 2023 04:37 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Montgomery Thornton",
    "email": "montgomerythornton@digiprint.com",
    "phone_number": 8041176015,
    "date_joined": "Dec 27, 2019 06:09 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Lowery Armstrong",
    "email": "loweryarmstrong@digiprint.com",
    "phone_number": 8076489062,
    "date_joined": "Mar 05, 2021 06:41 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Swanson Campbell",
    "email": "swansoncampbell@digiprint.com",
    "phone_number": 9088357568,
    "date_joined": "Jan 22, 2023 08:14 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Gibson Lopez",
    "email": "gibsonlopez@digiprint.com",
    "phone_number": 7318412366,
    "date_joined": "Jul 10, 2022 06:27 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Christy Sampson",
    "email": "christysampson@digiprint.com",
    "phone_number": 8903912292,
    "date_joined": "Nov 11, 2021 01:34 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Edwards Alexander",
    "email": "edwardsalexander@digiprint.com",
    "phone_number": 8371754245,
    "date_joined": "Aug 30, 2021 08:19 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Dillon Hickman",
    "email": "dillonhickman@digiprint.com",
    "phone_number": 7319067993,
    "date_joined": "Jun 07, 2023 06:49 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Austin Adams",
    "email": "austinadams@digiprint.com",
    "phone_number": 7442417707,
    "date_joined": "Sep 11, 2019 07:41 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Jeri Henderson",
    "email": "jerihenderson@digiprint.com",
    "phone_number": 8100663074,
    "date_joined": "Oct 08, 2021 06:28 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Alison Salazar",
    "email": "alisonsalazar@digiprint.com",
    "phone_number": 8123261797,
    "date_joined": "Jul 09, 2024 01:14 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Mai Forbes",
    "email": "maiforbes@digiprint.com",
    "phone_number": 7128705081,
    "date_joined": "Jan 24, 2020 01:26 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Carr Richmond",
    "email": "carrrichmond@digiprint.com",
    "phone_number": 8133634139,
    "date_joined": "Nov 29, 2019 11:41 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Minerva Roth",
    "email": "minervaroth@digiprint.com",
    "phone_number": 8983588705,
    "date_joined": "Jul 10, 2024 10:51 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Larsen Irwin",
    "email": "larsenirwin@digiprint.com",
    "phone_number": 8536737368,
    "date_joined": "May 30, 2021 01:54 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Sexton Owens",
    "email": "sextonowens@digiprint.com",
    "phone_number": 7556390634,
    "date_joined": "Mar 18, 2021 07:31 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Watkins Carson",
    "email": "watkinscarson@digiprint.com",
    "phone_number": 8544638497,
    "date_joined": "Sep 03, 2024 04:44 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Charlene Gibson",
    "email": "charlenegibson@digiprint.com",
    "phone_number": 8198787878,
    "date_joined": "Jan 08, 2018 04:29 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Sonja Holden",
    "email": "sonjaholden@digiprint.com",
    "phone_number": 8871897445,
    "date_joined": "Jun 28, 2023 06:40 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Jillian Mcclure",
    "email": "jillianmcclure@digiprint.com",
    "phone_number": 7735079940,
    "date_joined": "May 26, 2023 12:33 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Nadia Hart",
    "email": "nadiahart@digiprint.com",
    "phone_number": 8778940288,
    "date_joined": "Jun 21, 2021 06:45 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Cain Massey",
    "email": "cainmassey@digiprint.com",
    "phone_number": 8982396336,
    "date_joined": "Dec 07, 2019 06:39 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Louisa Winters",
    "email": "louisawinters@digiprint.com",
    "phone_number": 8359088018,
    "date_joined": "Jan 18, 2018 02:22 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Marcia Schneider",
    "email": "marciaschneider@digiprint.com",
    "phone_number": 7465128812,
    "date_joined": "Apr 05, 2022 12:45 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Park Britt",
    "email": "parkbritt@digiprint.com",
    "phone_number": 8204714801,
    "date_joined": "Aug 11, 2020 11:27 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Angela Wagner",
    "email": "angelawagner@digiprint.com",
    "phone_number": 8713934037,
    "date_joined": "Apr 10, 2021 07:20 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Lyons Osborne",
    "email": "lyonsosborne@digiprint.com",
    "phone_number": 7087566960,
    "date_joined": "Jan 02, 2021 03:51 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Kay Sharp",
    "email": "kaysharp@digiprint.com",
    "phone_number": 9012464234,
    "date_joined": "Oct 08, 2022 12:26 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Ellen Juarez",
    "email": "ellenjuarez@digiprint.com",
    "phone_number": 8270281103,
    "date_joined": "Nov 10, 2018 09:04 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Ilene Benton",
    "email": "ilenebenton@digiprint.com",
    "phone_number": 8107354172,
    "date_joined": "Jul 06, 2021 01:56 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Duncan Cooley",
    "email": "duncancooley@digiprint.com",
    "phone_number": 9072022491,
    "date_joined": "Apr 29, 2019 08:03 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Johnston Jennings",
    "email": "johnstonjennings@digiprint.com",
    "phone_number": 8428468382,
    "date_joined": "Apr 12, 2021 04:05 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Marilyn Mosley",
    "email": "marilynmosley@digiprint.com",
    "phone_number": 8828497897,
    "date_joined": "Feb 23, 2023 03:15 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Goff Berg",
    "email": "goffberg@digiprint.com",
    "phone_number": 7605106828,
    "date_joined": "Nov 23, 2023 11:30 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Kellie Hopper",
    "email": "kelliehopper@digiprint.com",
    "phone_number": 7646907315,
    "date_joined": "Sep 22, 2021 03:18 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Stanton Rocha",
    "email": "stantonrocha@digiprint.com",
    "phone_number": 8125248744,
    "date_joined": "May 03, 2021 04:56 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Pratt Gilbert",
    "email": "prattgilbert@digiprint.com",
    "phone_number": 7178554317,
    "date_joined": "Jul 27, 2021 12:52 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Wilma Wiley",
    "email": "wilmawiley@digiprint.com",
    "phone_number": 7422490600,
    "date_joined": "Sep 15, 2018 06:05 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Cristina Booker",
    "email": "cristinabooker@digiprint.com",
    "phone_number": 8372513214,
    "date_joined": "Jan 12, 2022 07:51 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Schneider Fletcher",
    "email": "schneiderfletcher@digiprint.com",
    "phone_number": 8619536491,
    "date_joined": "May 07, 2018 06:03 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Marguerite Leon",
    "email": "margueriteleon@digiprint.com",
    "phone_number": 8368365049,
    "date_joined": "Jun 06, 2020 11:34 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Rivers Reyes",
    "email": "riversreyes@digiprint.com",
    "phone_number": 7427868744,
    "date_joined": "Mar 06, 2019 07:07 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Nunez Bradley",
    "email": "nunezbradley@digiprint.com",
    "phone_number": 7179029811,
    "date_joined": "Sep 02, 2023 05:59 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Jenna Boyer",
    "email": "jennaboyer@digiprint.com",
    "phone_number": 8662577502,
    "date_joined": "Sep 17, 2019 04:08 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Britney Foster",
    "email": "britneyfoster@digiprint.com",
    "phone_number": 8011304440,
    "date_joined": "Nov 29, 2020 12:37 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Doreen Day",
    "email": "doreenday@digiprint.com",
    "phone_number": 8623988340,
    "date_joined": "Apr 20, 2019 05:38 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Hayes Buchanan",
    "email": "hayesbuchanan@digiprint.com",
    "phone_number": 8597175371,
    "date_joined": "Feb 09, 2020 03:55 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Haley Barker",
    "email": "haleybarker@digiprint.com",
    "phone_number": 7903071424,
    "date_joined": "May 07, 2020 06:48 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Campbell Pruitt",
    "email": "campbellpruitt@digiprint.com",
    "phone_number": 7224650416,
    "date_joined": "Mar 20, 2020 10:15 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Amber Head",
    "email": "amberhead@digiprint.com",
    "phone_number": 8161295088,
    "date_joined": "Jun 16, 2024 05:28 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Malinda Rivas",
    "email": "malindarivas@digiprint.com",
    "phone_number": 7551456679,
    "date_joined": "May 13, 2024 05:17 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Bobbi Sims",
    "email": "bobbisims@digiprint.com",
    "phone_number": 8331252291,
    "date_joined": "Apr 11, 2022 05:50 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Zelma Cotton",
    "email": "zelmacotton@digiprint.com",
    "phone_number": 8518633019,
    "date_joined": "Aug 15, 2023 07:51 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Sharon Parrish",
    "email": "sharonparrish@digiprint.com",
    "phone_number": 7098040654,
    "date_joined": "Sep 07, 2024 08:32 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Mattie Good",
    "email": "mattiegood@digiprint.com",
    "phone_number": 7131419738,
    "date_joined": "Sep 05, 2021 11:52 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Leonard Webb",
    "email": "leonardwebb@digiprint.com",
    "phone_number": 7915142024,
    "date_joined": "Apr 30, 2023 06:28 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Sims Hendrix",
    "email": "simshendrix@digiprint.com",
    "phone_number": 8121109326,
    "date_joined": "Aug 27, 2023 03:08 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Valeria Greer",
    "email": "valeriagreer@digiprint.com",
    "phone_number": 7457592422,
    "date_joined": "Oct 04, 2020 06:54 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Becky Kent",
    "email": "beckykent@digiprint.com",
    "phone_number": 7584971647,
    "date_joined": "Mar 14, 2018 11:15 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Terrie Hunter",
    "email": "terriehunter@digiprint.com",
    "phone_number": 8677283110,
    "date_joined": "May 23, 2024 02:06 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Guy Lancaster",
    "email": "guylancaster@digiprint.com",
    "phone_number": 7464900185,
    "date_joined": "May 06, 2020 06:47 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Irorun",
    "username": "Parker Chambers",
    "email": "parkerchambers@digiprint.com",
    "phone_number": 8786771988,
    "date_joined": "Oct 30, 2018 04:04 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Corinne Cantrell",
    "email": "corinnecantrell@digiprint.com",
    "phone_number": 9088315768,
    "date_joined": "Jul 30, 2020 04:23 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Moniepoint",
    "username": "Golden Mercer",
    "email": "goldenmercer@digiprint.com",
    "phone_number": 8607476078,
    "date_joined": "Mar 08, 2019 10:04 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Conrad Villarreal",
    "email": "conradvillarreal@digiprint.com",
    "phone_number": 8823860800,
    "date_joined": "Oct 14, 2020 12:23 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "Payforce",
    "username": "Kristin Ramos",
    "email": "kristinramos@digiprint.com",
    "phone_number": 7360890045,
    "date_joined": "Oct 13, 2023 11:03 PM",
    "status": "blacklisted"
  },
  {
    "organisation": "Lendsqr",
    "username": "Hoffman Hampton",
    "email": "hoffmanhampton@digiprint.com",
    "phone_number": 7709817602,
    "date_joined": "Nov 30, 2023 10:32 AM",
    "status": "blacklisted"
  },
  {
    "organisation": "FintechX",
    "username": "Eaton Wong",
    "email": "eatonwong@digiprint.com",
    "phone_number": 8755043828,
    "date_joined": "Jun 02, 2023 06:01 AM",
    "status": "blacklisted"
  }
]

const activeUsers   = staticUserData.filter((userData)=>{
    return userData.status === "active"
})

const staticLoans= Array(12453).fill(null);
const staticSavings= Array(102453).fill(null)

const infoCardArray = [{name: 'users', length: staticUserData.length,icon: UsersIcon}, {name: 'active users', length : activeUsers.length, icon: ActiveUsersIcon},{name: "users with loans", length: staticLoans.length, icon: CoinSheet}, {name: "users with savings", length: staticSavings.length, icon: CoinIcon}]

const infoCards   = infoCardArray.map((info)=>{
  return  <InfoCard name = {info.name} value={info.length} icon={info.icon}/>
})



  return (
    <div className={styles.usersPage}>
      <h1>Users</h1>
      <div className={styles.usersPage_cardsCont} >
       {infoCards}
      </div >
      <div className={styles.usersPage_table}>
        <DashboardTable />
        <div><Orgfilter/></div>
      </div>
      <div>
        pagination
      </div>
      

    </div>
    
  )
}

export default Users