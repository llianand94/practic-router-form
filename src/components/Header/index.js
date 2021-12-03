import React from 'react';
import { Children } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'
import Logo from './Logo/index';

const Header = (props) => {
  return (
    <header className={styles.container}>        
          <Logo/>
          <Link className={styles.link} to="/sing-in">Sing IN page</Link>        
    </header>
  );
}

export default  Header;
