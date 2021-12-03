import { Form, Formik } from 'formik';
import React from 'react';
import InputWrapper from '../InputWrapper/index';
import {SIGN_IN_SCHEMA} from '../../../utils/schemasValidation';
import styles from './SingInForm.module.scss';

const initialValues ={
  email:'',
  password:'',
}
const SingInForm = (props) => {
  const {onSubmit}= props;   
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SIGN_IN_SCHEMA}>{
      (formikProps)=>{
        return <Form className={styles.container}>
        <InputWrapper name='email' type='name' placeholder='Enter your email'/>
        <InputWrapper name='password' type='password' placeholder='Enter your password'/>
        <button className={styles.submit} type='submit'>LOGIN</button>
      </Form>
      }
    }  
    </Formik>
  );
}

export default SingInForm;
