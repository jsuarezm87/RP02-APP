import { useFormik } from 'formik';
import { validationSchemaYup } from '../utils/validationSchemaYup';

import '../styles/styles.css';

const initialValues = {
    firstName: '',
    lastName: '',
    email: ''
}

export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues,
        onSubmit: (values) => { console.log(values) },
        validationSchema: validationSchemaYup    
    });


  return (
    <div>
        <h1>Formik Yup</h1>

        <form onSubmit={ handleSubmit } noValidate>
            <label htmlFor="firstName">First Name</label>   
            <input type="text" { ...getFieldProps('firstName') } />
            {touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}
            <br />

            <label htmlFor="lastName">Last Name</label>   
            <input type="text" { ...getFieldProps('lastName') } /> 
            {touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}
            <br />

            <label htmlFor="email">Email Adress</label>   
            <input type="email" { ...getFieldProps('email') } />  
            {touched.email && errors.email && <span>{ errors.email }</span>}
            <br />

            <button type="submit">Submit</button>                 
        </form>
    </div>
  )
}
