import { Field, Form, Formik } from 'formik';
import React from 'react';
import InputWrapper from '../InputWrapper/index';
import {SIGN_UP_SCHEMA} from '../../../utils/schemasValidation';
import styles from './SingUpForm.module.scss';
import RadioWrapper from '../RadioWrapper';

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
    <Formik initialValues={initialValues} onSubmit={()=>onSubmit()} validationSchema={SIGN_UP_SCHEMA}>{
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
          {<RadioWrapper/>}
          {/* <div className={styles.radioWrapper}>
            <div className={styles.labelWrapper}>
              <label>
                <Field className={styles.radio} type="radio" name="picked" value="buyer"/>
                Join As a Buyer
                <h3 className={styles.radioSubtext}>I am looking for a Name, Logo or Tagline for my business, brand or product.</h3>              
              </label>
            </div>
            <div className={styles.labelWrapper}>
              <label>
                <Field className={styles.radio} type="radio" name="picked" value="seller"/>
                Join As a Creative or Marketplace Seller
                <h3 className={styles.radioSubtext}>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</h3>              
              </label>
            </div>
            
          </div> */}

          <button className={styles.submit} type='submit'>Create account</button>
      </Form>
      }
    }  
    </Formik>
  );
}

export default SingUpForm;