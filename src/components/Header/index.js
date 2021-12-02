import React from 'react';
import { Children } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'
import Logo from './Logo/index';

const Header = (props) => {
  return (
    <header className={styles.container}>        
          <Logo/>
          {props.children}        
    </header>
  );
}

export default  Header;
