import { Field } from 'formik';
import React from 'react';
import styles from './RadioWrapper.module.scss'

const RadioWrapper = (props) => {
  return (
    <div className={styles.radioWrapper}>
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
            
          </div>
  );
}

export default RadioWrapper;
