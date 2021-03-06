import * as Yup from 'yup';

export const NAME_SCHEMA = Yup.string().matches(/^[A-Z][a-z]{1,16}$/,'Must be latin letter').required('Required field');

export const EMAIL_SCHEMA = Yup.string().email('Enter correct email').required('Required field');

export const PASSWORD_SCHEMA = Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,'Enter correct password').required('Required field');

export const SIGN_UP_SCHEMA = Yup.object({
  fname: NAME_SCHEMA, 
  sname: NAME_SCHEMA,
  dname: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  password:PASSWORD_SCHEMA,
  comfPassword:Yup.string().oneOf([Yup.ref('password')], 'Password does not match.'),
  age: Yup.number().min(14).max(99),
})

export const SIGN_IN_SCHEMA = Yup.object({
  email:EMAIL_SCHEMA,
  password:PASSWORD_SCHEMA,
  password2: Yup.string().oneOf([Yup.ref('password')], 'Password does not match.'),
})