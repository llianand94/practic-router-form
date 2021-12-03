import { Form, Formik } from 'formik';
import React from 'react';
import InputWrapper from '../InputWrapper/index';
import {SIGN_UP_SCHEMA} from '../../../utils/schemasValidation';
import styles from './SingUpForm.module.scss';

const initialValues ={
  fname:'',
  sname:'',
  dname:'',
  email:'',
  password:'',
  comfPassword:'',
}
const SingUpForm = (props) => {
  const {onSubmit}= props; 
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SIGN_UP_SCHEMA}>{
      (formikProps)=>{
        return <Form className={styles.container}>
          <div className={styles.inputWrapper}>
            <InputWrapper addStyleLabel={styles.addLabel} addStyleInput={styles.addInput} name='fname' type='name' placeholder='First Name'/>
            <InputWrapper addStyleLabel={styles.addLabel} addStyleInput={styles.addInput} name='sname' type='name' placeholder='Last Name'/>
            <InputWrapper addStyleLabel={styles.addLabel} addStyleInput={styles.addInput} name='dname' type='name' placeholder='Display Name'/>
            <InputWrapper addStyleLabel={styles.addLabel} addStyleInput={styles.addInput} name='email' type='name' placeholder='Email Adress'/>
            <InputWrapper addStyleLabel={styles.addLabel} addStyleInput={styles.addInput} name='password' type='password' placeholder='Password'/>
            <InputWrapper addStyleLabel={styles.addLabel} addStyleInput={styles.addInput} name='comfPassword' type='password' placeholder='Comfirm Password'/>
          </div>
          
          <button className={styles.submit} type='submit'>LOGIN</button>
      </Form>
      }
    }  
    </Formik>
  );
}

export default SingUpForm;