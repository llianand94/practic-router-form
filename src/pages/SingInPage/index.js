import React from 'react';
import SingInForm from '../../components/forms/SingInForm';
import styles from './SingInPage.module.scss';

const SingInPage = (props) => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  }
  return <div className={styles.container}>
        <h1 className={styles.formHeader}> Login to your account</h1>
        <SingInForm onSubmit={onSubmit}/>
      </div>        
      
      
}

export default SingInPage;

