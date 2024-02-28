import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar/searchbar';
import styles from './navbar.module.css';

export default function Navbar({onSearch}){
   // const handleSearch = (searchName) => {
   //    console.log("handleSearchByName desde navbar:", searchName);
   //  };
      
    return(
      <nav className={styles.container}>
      
         <Link to="/home">
            <button>Home</button>
         </Link>
         <Link to="/about">
            <button>About</button>
         </Link>
         <Link to="/create">
            <button>Create</button>
         </Link>

       <Searchbar onSearch={onSearch} />
      </nav>
    )
} 