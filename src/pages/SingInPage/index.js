import React from 'react';
import { Link } from 'react-router-dom';
import SingInForm from '../../components/forms/SingInForm';
import styles from './SingInPage.module.scss';

const SingInPage = (props) => {

  return <>        
      <h1> This is a sing-in page</h1>
      <SingInForm/>
      </> 
}

export default SingInPage;

