import React from "react";
import SingUpForm from "../../components/forms/SingUpForm";
import styles from './SingUpPage.module.scss';

const SingUpPage = (props) => {  
    const onSubmit = (values, formikBag) => {
      formikBag.resetForm();
    }  
  return (
    <div className={styles.container}>
        <h1 className={styles.formHeader}> Create an account</h1>
        <h2 className={styles.subHeader}>We always keep your name and email address private.</h2>
        <SingUpForm onSubmit={onSubmit}/>
      </div>    
  );
};

export default SingUpPage;
