import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';


const Logo = () => {
  return (
    <Link className={styles.navItem} to='/'><img className={styles.logo} src='/static/images/logo.png' alt='logo company'/></Link>
  );
}

export default Logo;
