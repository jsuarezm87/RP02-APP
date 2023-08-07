import { useFormik } from 'formik';
import { validateBasic } from '../utils/validateFormikBasic';
import '../styles/styles.css';

const initialValues = {
    firstName: '',
    lastName: '',
    email: ''
}

// se usa Formik de forma basica usando el hook useFormik y FormikErrors
export const FormikBasicPage = () => {  

    const {handleChange, values, handleSubmit, errors, touched, handleBlur} = useFormik({
        initialValues,
        onSubmit: (values) => { console.log(values) },
        validate: validateBasic
    });


  return (
    <div>
        <h1>Formik Basic</h1>

        <form onSubmit={ handleSubmit } noValidate>
            <label htmlFor="firstName">First Name</label>   
            <input 
                type="text" 
                name="firstName"
                onBlur={ handleBlur }
                onChange={ handleChange }
                value={ values.firstName }
            />
            {touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}
            <br />

            <label htmlFor="lastName">Last Name</label>   
            <input 
                type="text" 
                name="lastName"
                onBlur={ handleBlur }
                onChange={ handleChange }
                value={ values.lastName }
            /> 
            {touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}
            <br />

            <label htmlFor="email">Email Adress</label>   
            <input 
                type="email" 
                name="email"
                onBlur={ handleBlur }
                onChange={ handleChange }
                value={ values.email }
            />  
            {touched.email && errors.email && <span>{ errors.email }</span>}
            <br />

            <button type="submit">Submit</button>                 
        </form>
    </div>
  )
}
