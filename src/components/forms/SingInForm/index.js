import { Form, Formik } from 'formik';
import React from 'react';
import InputWrapper from '../InputWrapper';
import {SIGN_IN_SCHEMA} from '../../../utils/schemasValidation';
import styles from './SingInForm.module.scss';

const initialValues ={
  email:'',
  password:'',
}
const SingInForm = () => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  }  
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SIGN_IN_SCHEMA}>
      <Form className={styles.container}>
        <InputWrapper name='email' type='name' placeholder='Enter your name'/>
        <InputWrapper name='password' type='password' placeholder='Enter your password'/>
        <input className={styles.submit} type='submit'/>
      </Form>
    </Formik>
  );
}

export default SingInForm;
