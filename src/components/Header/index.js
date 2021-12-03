import React from 'react';
import { Link , useLocation} from 'react-router-dom';
import styles from './Header.module.scss'
import Logo from './Logo/index';

const Header = (props) => {  
  const path = useLocation().pathname;
  return (
    <header className={styles.container}>        
          <Logo/>          
          {path ==='/' || path ==='/singup' ?
          <Link className={styles.link} to="/singin">Sing In</Link>
          :<Link className={styles.link} to="/singup">Sing Up</Link>}                     
    </header>
  );
}

export default  Header;
