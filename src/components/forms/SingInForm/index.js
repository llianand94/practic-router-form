import { Form, Formik } from 'formik';
import React from 'react';
import InputWrapper from '../../InputWrapper';
import {input} from './../../InputWrapper/InputWrapper.module.scss'
import styles from './SingInForm.module.scss'

const initialValues ={
  email:'',
  password:'',
}
const SingInForm = () => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={styles.container}>
        <InputWrapper name='email'/>
        <InputWrapper name='password'/>
        <input className={input} type='submit'/>
      </Form>
    </Formik>
  );
}

export default SingInForm;
