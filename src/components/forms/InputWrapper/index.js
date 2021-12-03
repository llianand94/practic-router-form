import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './InputWrapper.module.scss';
import cx from 'classnames';

const InputWrapper = (props) => {
  const {name, addStyleLabel, addStyleInput, ...rest} = props;
  console.log(addStyleLabel);
  return (
    <label className={cx(styles.label, addStyleLabel)}>
      <Field name={name}>{
        ({field, form, meta})=>{
          const classNames = cx(styles.input, addStyleInput,{
            [styles.valid]: meta.touched && !meta.error,
            [styles.invalid]: meta.touched && meta.error,
          });
          return <input className={classNames} {...field} {...rest}/>
        }
      }</Field>
      <ErrorMessage name={name} component='div' className={styles.error}/>
    </label>
  );
}

export default InputWrapper;