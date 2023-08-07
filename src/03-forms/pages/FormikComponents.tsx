import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationSchemaComponents } from '../utils/validationSchemaComponents';

import '../styles/styles.css';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    terms: false,
    jobType: '',
}

export const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Components</h1>

        <Formik
            initialValues={ initialValues }
            onSubmit={ (values) => { console.log(values) } }
            validationSchema={ validationSchemaComponents }
        >
            {
               (formik) => (
                    <Form>
                        <label htmlFor="firstName">First Name</label>   
                        <Field name="firstName" type="text" placeholder="First Name" />
                        <ErrorMessage name="firstName" component="span" /><br />
        
                        <label htmlFor="lastName">Last Name</label>   
                        <Field name="lastName" type="text" placeholder="Last Name" />
                        <ErrorMessage name="lastName" component="span" /><br />
        
                        <label htmlFor="email">Email Adress</label>   
                        <Field name="email" type="text" placeholder="Email Adress" />
                        <ErrorMessage name="email" component="span" /><br />

                        <label htmlFor="jobType">Job Type</label> 
                        <Field name="jobType" as="select">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Jr.</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span" /><br />

                        <label>
                            <Field name="terms" type="checkbox" />                        
                            Terms and conditions
                        </label>   
                        <ErrorMessage name="terms" component="span" /><br />
            
                        <button type="submit">Submit</button>                 
                    </Form>
               )
            }
        </Formik>

    </div>
  )
}
